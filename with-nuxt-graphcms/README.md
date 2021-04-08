## Getting Started

- Go to [Dola's website](https://dola.me/), sign up, and complete your merchant on-boarding
- Once completed, proceed to your Wallet's `Settings > Business Details` to copy and paste your `MERCHANT_ID`
- Use your `MERCHANT_ID` to configure your Vercel deployment

### GraphCMS Configuration

Product Schemas are required to include the following fields as they are required by BEP.

- `id`
- `title`
- `price`
- `quantity`
- `sku`
- `image`
- `description`
- `weight`

## Download Manually

- Clone:

  ```bash
  npx degit dolapay/bep-examples/with-nuxt#main nuxtjs-graphcms-example
  ```

- Run command `cd nuxtjs-graphcms-example`
- Create a `.env` file and paste your `MERCHANT_ID` into the `NUXT_ENV_MERCHANT_ID` field
- Run command `npm install`
- Start your server `npm run dev`
