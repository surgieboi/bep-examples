## Getting Started

- Go to [Dola's website](https://dola.me/), sign up, and complete your merchant on-boarding
- Once completed, proceed to your Wallet's `Settings > Business Details` to copy and paste your `MERCHANT_ID`
- Use your `MERCHANT_ID` to configure your Vercel deployment

### Contentful Configuration

Product Schemas are required to include the following fields as they are required by BEP.

- `id`
- `title`
- `price`
- `quantity`
- `sku`
- `image`
- `weight`

To access your content outside of contentful, you'll need the following env variables.

- Your `CONTENTFUL_SPACE_ID`
- The API environment
- Your `CONTENTFUL_ACCESS_TOKEN`

For the purposes of this example a sample product's variables are used, Replace these with yours to access your product.

## Download Manually

> The Getting Started section is a prerequisite for this section

- Clone:

  ```bash
  npx degit dolapay/bep-examples/with-next-contentful#main bep-next-contentful
  ```

- Run command `cd graphcms-bep-graphcms`
- Create a `.env.dvelopment` file. then paste your
  - `MERCHANT_ID` into the `NEXT_PUBLIC_MERCHANT_ID` field.
  - Your `CONTENTFUL_ACCESS_TOKEN`.
  - Your `CONTENTFUL_SPACE_ID`.
- Run command `npm install`
- Start your server `npm run develop`
