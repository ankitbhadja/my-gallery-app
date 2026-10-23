# Gallery frontend

React and Vite frontend for the personal photo gallery. It provides a login
page, a folder view, and an image browser backed by the gallery API.

## Development

Requirements: Node.js 20 or later and npm.

```sh
npm ci
npm run dev
```

The frontend currently calls a fixed development API Gateway URL from its
login, folder, and image pages. Change those URLs when connecting to another
stage. Do not put AWS credentials, CloudFront private keys, or backend secrets
in frontend code or `VITE_*` variables; values in a Vite build are public.

## Build and deploy

```sh
npm run lint
npm run build
npm run preview
```

Vite writes production assets to `dist/`. Serve them from a private S3 static
site bucket through CloudFront Origin Access Control. Configure CloudFront to
use `index.html` as its default root object and return the app entry point for
client-side routes. See the backend [deployment and security guide](../gallery-be/README.md)
for the end-to-end architecture and AWS setup.
