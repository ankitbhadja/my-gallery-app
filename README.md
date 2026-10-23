# Personal Photo Gallery

This project is a personal photo gallery with a React/Vite frontend and an
AWS serverless backend. The frontend is built as a static site; API Gateway
and Lambda handle login and photo listing. Photos stay in a private S3 bucket
and are viewed through CloudFront signed URLs.

## Project structure

```text
my gallery/
  README.md                 Shared project overview and setup
  gallery-app/              React/Vite frontend
  gallery-be/               Serverless API and Lambda functions
```

## Architecture

```text
Browser
  ├── Gallery frontend (static files on S3, served by CloudFront)
  └── API Gateway
        ├── POST /login
        ├── GET  /list-folders
        └── GET  /fetch-sign-url
              └── Lambda validates access, lists S3 objects,
                  and creates CloudFront signed URLs

Private photo S3 bucket → CloudFront → browser
```

The frontend does not receive AWS credentials or direct access to the bucket.
The current API returns signed URLs for viewing images. **Image upload is not
implemented yet**; the backend guide describes a recommended presigned-upload
design for a future change.

## Requirements

- Node.js 20 or later
- npm for the frontend
- Yarn Classic 1.22 for the backend
- AWS CLI and an AWS profile for deployment
- Serverless Framework v3
- AWS resources configured for the API, private photo bucket, and CloudFront

## Run locally

### Start the frontend

```sh
cd gallery-app
npm ci
npm run dev
```

The frontend currently calls a configured development API Gateway URL directly.
Update the API URL in the frontend when using another stage or deployment.

### Start the backend locally

Configure the backend environment variables listed below, then run:

```sh
cd gallery-be
yarn install --frozen-lockfile
cd modules/gallery
sls offline --stage dev --config serverless.yml
```

Serverless Offline listens on port `4000`.

## Configuration

Provide these values to the backend through the shell, CI environment, or a
secrets manager. Do not commit `.env` files or place private keys and AWS
credentials in the frontend.

| Variable                 | Purpose                                        |
| ------------------------ | ---------------------------------------------- |
| `PROFILE`                | AWS profile used by Serverless.                |
| `BUCKET_NAME`            | Private bucket containing gallery photos.      |
| `BUCKET_ARN`             | S3 bucket ARN for the Lambda IAM policy.       |
| `BUCKET_ARN_WITH_STAR`   | S3 object ARN for the Lambda IAM policy.       |
| `CLOUD_FRONT_URL`        | CloudFront URL used to build image URLs.       |
| `CLOUDFRONT_KEY_PAIR_ID` | CloudFront key-pair ID used for signing.       |
| `CLOUDFRONT_PRIVATE_KEY` | Base64-encoded CloudFront signing private key. |
| `JWT_SECRET`             | Secret used to sign and validate login tokens. |
| `GALLERY_ANKIT_PASSWORD` | Password for the configured Ankit account.     |
| `GALLERY_GUEST_PASSWORD` | Password for the configured guest account.     |

## Deploy

Deploy the API from `gallery-be` after setting its required configuration:

```sh
yarn sls-deploy-gallery
```

Build the frontend from `gallery-app`:

```sh
npm ci
npm run lint
npm run build
```

Publish the generated `dist/` files to a private static-site S3 bucket served
through CloudFront. Keep S3 Block Public Access enabled and use CloudFront
Origin Access Control (OAC) to read from the bucket. Configure the site
distribution to serve `index.html` and route client-side paths to the app entry
point.

## Security notes

- Keep both the photo bucket and static-site bucket private.
- Restrict CloudFront signed URLs to a short expiry.
- Restrict API CORS to the deployed gallery origin.
- Limit Lambda permissions to the required S3 actions and allowed key prefixes.
- Store passwords, JWT secrets, and CloudFront signing keys in a secrets
  manager or deployment environment, not in source control.
- The current frontend stores the JWT in `localStorage`; review the session
  approach before exposing the application to a broader audience.

## Detailed guides

- [Frontend guide](./gallery-app/README.md): local development and static-site
  build.
- [Backend guide](./gallery-be/README.md): API routes, Lambda configuration,
  security details, and AWS deployment.
