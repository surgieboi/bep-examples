## Getting Started

- Go to [Dola's website](https://dola.me/), sign up, and complete your merchant on-boarding
- Once completed, proceed to your Wallet's `Settings > Business Details` to copy and paste your `MERCHANT_ID`
- Use your `MERCHANT_ID` to configure your Vercel deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fsurgieboi%2Fbep-examples%2Ftree%2Fmain%2Fwith-nuxt-graphcms&env=NUXT_ENV_MERCHANT_ID,NUXT_ENV_GRAPHCMS_API&envDescription=Your%20Merchant%20ID&envLink=https%3A%2F%2Fgithub.com%2Fsurgieboi%2Fbep-examples%2Ftree%2Fmain%2Fwith-nuxt-graphcms%23getting-started)

### GraphCMS Configuration

Product Schemas are required to include the following fields as they are required by BEP.

- `id`
- `title`
- `price`
- `quantity`
- `sku`
- `image`
- `weight`

To access your content you'll need your `GRAPHCMS_API_URL`

## Download Manually

- Clone:

  ```bash
  npx degit dolapay/bep-examples/with-nuxt-graphcms#main with-nuxt-graphcms
  ```

- Run command `cd with-nuxt-graphcms`
- Create a `.env` file and paste
  - your `MERCHANT_ID` into the `NUXT_ENV_MERCHANT_ID` field.
  - `GRAPHCMS_API_URL` into the `NEXT_PUBLIC_GRAPHCMS_API` field.
- Run command `npm install`
- Start your server `npm run dev`
