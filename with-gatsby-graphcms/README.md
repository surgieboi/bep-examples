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
- `weight`

To access your content outside of contentful, you'll need the following env variables.

- Your `GRAPHCMS_API` endpoint

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fdolapay%2Fbep-examples%2Ftree%2Fmain%2Fwith-gatsby-graphcms&env=MERCHANT_ID,GRAPHCMS_API&envDescription=https%3A%2F%2Fgithub.com%2Fdolapay%2Fbep-examples%2Ftree%2Fmain%2Fwith-gatsby-graphcms%23getting-started)

## Download Manually

> The Getting Started section is a prerequisite for this section

- Clone:

  ```bash
  npx degit dolapay/bep-examples/with-gatsby-graphcms#main bep-gatsby-graphcms
  ```

- Run command `cd bep-gatsby-graphcms`
- Create a `.env` file. then paste your
  - `MERCHANT_ID` into the `MERCHANT_ID` field.
  - Your graphcms endpoint as `GRAPHCMS_API`.
- Run command `npm install`
- Start your server `npm run develop`
