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

> The Getting Started section is a prerequisite for this section

- Clone:

  ```bash
  npx degit dolapay/bep-examples/with-graphcms-next#main graphcms-bep-nextjs
  ```

- Run command `cd graphcms-bep-nextjs`
- Create a `.env.local` file. then paste your
  - `MERCHANT_ID` into the `NEXT_PUBLIC_MERCHANT_ID` field.
  - GraphCMS API Endpoint into the `NEXT_PUBLIC_GRAPHCMS_ENDPOINT` field.
- Run command `npm install`
- Start your server `npm run dev`
