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

- Your `space_id`
- The API environment
- Your `CONTENTFUL_ACCESS_TOKEN`

For the purposes of this example a sample product's variables are used, Replace these with yours to access your product.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fsurgieboi%2Fbep-examples%2Ftree%2Fmain%2Fwith-next-contentful&env=NEXT_PUBLIC_MERCHANT_ID,CONTENTFUL_ACCESS_TOKEN&envDescription=Your%20merchant%20ID&envLink=https%3A%2F%2Fgithub.com%2Fsurgieboi%2Fbep-examples%2Ftree%2Fmain%2Fwith-graphcms-next%23getting-started&project-name=bep-next-contentful-starter&repo-name=BEP-contentful-next-starter)

## Download Manually

> The Getting Started section is a prerequisite for this section

- Clone:

  ```bash
  npx degit dolapay/bep-examples/with-next-contentful#main contentful-bep-nextjs
  ```

- Run command `cd contentful-bep-nextjs`
- Create a `.env.local` file. then paste your
  - `MERCHANT_ID` into the `NEXT_PUBLIC_MERCHANT_ID` field.
  - Your contentful access token `CONTENTFUL_ACCESS_TOKEN`
- Run command `npm install`
- Start your server `npm run dev`
