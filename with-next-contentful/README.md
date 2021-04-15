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
- `description`
- `weight`

To access your content outside of contentful, you'll need the following env variables.

- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ENTRY_ID`
- `CONTENTFUL_ENVIRONMENT_ID`
- `CONTENTFUL_ACCESS_TOKEN`

For the purposes of this example a sample product's variables are used, Replace these with yours to access your product.

## Download Manually

> The Getting Started section is a prerequisite for this section

- Clone:

  ```bash
  npx degit dolapay/bep-examples/with-next-contentful#main contentful-bep-nextjs
  ```

- Run command `cd contentful-bep-nextjs`
- Create a `.env.local` file. then paste your
  - `MERCHANT_ID` into the `NEXT_PUBLIC_MERCHANT_ID` field.
- Run command `npm install`
- Start your server `npm run dev`
