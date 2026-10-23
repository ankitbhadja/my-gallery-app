# Personal Photo Gallery

A personal photo gallery built with a React/Vite client and AWS serverless
services. The client uses API Gateway and Lambda for login and listing. Images
are stored in S3 and delivered through CloudFront signed URLs rather than
making the image bucket public.

> **Implementation status:** Login, folder listing, and signed image listing
> are present. An image-upload API or upload screen is not implemented yet.
> The upload section below describes the recommended next step, not a current
> feature.

## Architecture

```text
Browser
  ├── React static site (S3 origin, served through CloudFront)
  └── API Gateway
        ├── POST /login             → Lambda issues a short-lived JWT
        ├── GET  /list-folders      → Lambda returns the user's folder list
        └── GET  /fetch-sign-url    → Lambda checks access, lists S3 keys,
                                      and signs CloudFront image URLs

Private photo S3 bucket ← Lambda list access
Private photo S3 bucket → CloudFront origin access (OAC)
CloudFront → browser (only with a valid signed URL)
```

The gallery frontend is in the sibling `gallery-app` directory. The API and
Lambda functions are in `modules/gallery`.

## Current API

| Method | Path                                        | Purpose                                                                                                 |
| ------ | ------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `POST` | `/login`                                    | Checks a configured account and returns a JWT that expires after four hours.                            |
| `GET`  | `/list-folders`                             | Validates the JWT and returns that account's configured folders.                                        |
| `GET`  | `/fetch-sign-url?path=<folder>&after=<key>` | Validates the JWT and folder permission, lists up to 50 S3 objects, and returns signed CloudFront URLs. |

The client sends the JWT in the `Authorization` header. The `path` value is
checked against the account's folder allow-list before the Lambda lists objects.
The API currently uses wildcard CORS; restrict allowed origins to the deployed
gallery domain before exposing the API more broadly.

## Security model and follow-up work

- Keep the photo bucket private and enable S3 Block Public Access.
- Allow CloudFront to read from the bucket using Origin Access Control (OAC);
  do not grant public `s3:GetObject` access.
- The Lambda role currently has `s3:ListBucket`, `s3:GetObject`,
  `s3:PutObject`, and `s3:DeleteObject` permissions. The current handlers only
  need object listing; reduce this policy to the actions and key prefixes each
  function actually needs.
- CloudFront signing material and login passwords are supplied as deployment
  environment variables, not stored in source or a checked-in `.env` file.
  For stronger operational security, load secrets from AWS Secrets Manager or
  SSM Parameter Store and grant the Lambda role access only to those secrets.
- The client stores the JWT in `localStorage`. For a production-facing
  application, consider an `HttpOnly`, `Secure`, `SameSite` cookie and review
  the authentication/session design.
- Set and verify a short explicit CloudFront URL expiry. The signing call
  currently relies on the signing library's defaults; the calculated expiry
  value in the handler is not currently passed to the signer.
- The current login users and folder permissions are static configuration.
  They are suitable only for a small personal gallery; use a managed identity
  provider and persistent authorization data if the audience grows.

### Planned upload flow

There is no upload route in the current function configuration. A safer
extension is an authenticated `POST /upload-url` endpoint:

1. The Lambda validates the JWT and checks that the user may upload to the
   requested folder.
2. The Lambda generates the S3 object key; it must not trust an arbitrary
   client-supplied bucket/key.
3. The Lambda returns a short-lived presigned S3 `PUT` URL (or presigned
   `POST` policy) with the allowed content type and relevant size constraints.
4. The browser uploads directly to S3 using that URL. No AWS credentials are
   sent to or stored in the browser.
5. The S3 bucket CORS policy allows only the gallery origin and required
   upload headers.

Keep upload permission separate from image-list permission and scope the
Lambda's S3 policy to the approved gallery prefixes.

## Requirements

- Node.js 20 or later for local development
- Yarn Classic 1.22
- AWS CLI configured with a deployment profile
- Serverless Framework v3 CLI
- An AWS account with permissions to deploy API Gateway/Lambda and access the
  configured S3 and CloudFront resources

The Lambda runtime is configured as `nodejs22.x`.

## Configuration

The backend does not require a local `.env` file. Export configuration in your
shell or inject it from a secrets manager/CI environment before running
Serverless commands:

| Variable                 | Purpose                                                                |
| ------------------------ | ---------------------------------------------------------------------- |
| `PROFILE`                | AWS CLI profile used by Serverless.                                    |
| `BUCKET_NAME`            | Private photo bucket name.                                             |
| `BUCKET_ARN`             | Photo bucket ARN used by the Lambda IAM policy.                        |
| `BUCKET_ARN_WITH_STAR`   | Object ARN for the bucket, such as the bucket ARN followed by `/*`.    |
| `CLOUD_FRONT_URL`        | CloudFront distribution hostname or base URL used to build image URLs. |
| `CLOUDFRONT_KEY_PAIR_ID` | CloudFront public key pair ID used to sign URLs.                       |
| `CLOUDFRONT_PRIVATE_KEY` | Base64-encoded CloudFront private key.                                 |
| `JWT_SECRET`             | High-entropy secret used to sign and verify JWTs.                      |
| `GALLERY_ANKIT_PASSWORD` | Password for the configured `Ankit` account.                           |
| `GALLERY_GUEST_PASSWORD` | Password for the configured `marriage_guest` account.                  |

Do not put real values in documentation, source control, deployment logs, or
frontend build variables. The `modules/gallery/.env*` pattern is ignored by
Git, but ignored files should not be used as a substitute for managed secrets.

## Local development

Install backend dependencies from `gallery-be`:

```sh
yarn install --frozen-lockfile
```

Install the Serverless v3 CLI if it is not already available:

```sh
npm install --global serverless@3
```

With the required environment variables exported, start the local API from
`gallery-be/modules/gallery`:

```sh
sls offline --stage dev --config serverless.yml
```

The Serverless Offline plugin is configured to use port `4000`.

Start the frontend from the sibling `gallery-app` directory:

```sh
npm ci
npm run dev
```

The current frontend calls a fixed `dev` API Gateway URL in its page
components. Update those URLs when using a different API stage or deployment.

## Build and deploy

Deploy the backend from `gallery-be` after providing the required configuration:

```sh
yarn sls-deploy-gallery
```

Build the static frontend from `gallery-app`:

```sh
npm ci
npm run lint
npm run build
```

The production assets are written to `gallery-app/dist`. For deployment, use a
private static-site S3 bucket with CloudFront OAC. Upload the build output and
invalidate the CloudFront cache, substituting your own bucket and distribution:

```sh
aws s3 sync dist/ s3://<private-gallery-site-bucket>/ --delete
aws cloudfront create-invalidation \
  --distribution-id <distribution-id> \
  --paths '/*'
```

Configure the site distribution's default root object as `index.html` and
configure SPA fallback so client-side routes such as `/login` resolve to the
application entry point. Keep the static-site bucket private as well; the
CloudFront OAC should be its reader.

## Project layout

```text
gallery-app/
  src/pages/                 Login, folder list, image list, and resume pages
modules/gallery/
  auth/login.ts              Login and JWT issuance
  listFolders/listFolders.ts JWT validation and folder response
  fetchSignUrl/fetchSignUrl.ts S3 listing, authorization, and URL signing
  gallery-functions.yml      API Gateway route-to-handler mapping
  serverless.yml             AWS provider, IAM, runtime, and plugins
```
