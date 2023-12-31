# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)
- [Netlify Functions Overview](https://docs.netlify.com/functions/overview)

## Netlify Setup

1. Install the [Netlify CLI](https://docs.netlify.com/cli/get-started/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

Ensure all packages are installed by running:

```sh
npm install
```

Run

```sh
netlify dev
```

Open up [http://localhost:8888](http://localhost:8888), and you're ready to go!

### Adding Redirects and Rewrites

To add redirects and rewrites, add them to the `netlify.toml` file or to the [\_app_redirects](_app_redirects) file. For more information about redirects and rewrites, see the [Netlify docs](https://docs.netlify.com/routing/redirects/).

### Serve your site locally

Run

```sh
npm run start
```

to serve your site locally at [http://localhost:8888](http://localhost:8888).

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
# preview deployment
netlify deploy --build

# production deployment
netlify deploy --build --prod
```

# Required Env's

Please set these variables on your repository secrets.

```bash
NETLIFY_SITE_ID
NETLIFY_AUTH_TOKEN
```

# Basic Setup

Run this command `without the @latest` and choose **`typescript`** and install any `Netlify Function`

```bash
npx create-remix --template netlify/remix-template
```

##### remix.config.js

```js
future: {
    v2_normalizeFormMethod: true,
    // ...
    v2_routeConvention: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_dev: true
}
```

##### Start

```bash
npm run dev
```

##### Using [netlify-cli](https://cli.netlify.com/commands/link/)

```bash
npm install

npm install -g netlify-cli@latest

export NETLIFY_AUTH_TOKEN={xyz}

export NETLIFY_SITE_ID={appid}

netlify build

netlify deploy --prod
```
