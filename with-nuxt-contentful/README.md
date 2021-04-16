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

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fdolapay%2Fbep-examples%2Ftree%2Fmain%2Fwith-nuxt-contentful&env=NUXT_PUBLIC_MERCHANT_ID,NUXT_ENV_CONTENTFUL_ACCESS_TOKEN,NUXT_ENV_CONTENTFUL_SPACE_ID&envDescription=Your%20merchant%20ID%20and%20Contentful%20credentials&envLink=https%3A%2F%2Fgithub.com%2Fdolapay%2Fbep-examples%2Ftree%2Fmain%2Fwith-nuxt-contentful%23getting-started&project-name=bep-nuxt-contentful-starter&repo-name=BEP-contentful-nuxt-starter)

## Download Manually

> The Getting Started section is a prerequisite for this section

- Clone:

  ```bash
  npx degit dolapay/bep-examples/with-nuxt-contentful#main bep-nuxt-contentful
  ```

- Run command `cd bep-nuxt-contentful`
- Create a `.env` file.
  - Your `NUXT_ENV_MERCHANT_ID`.
  - Your `NUXT_ENV_CONTENTFUL_ACCESS_TOKEN`.
  - Your `NUXT_ENV_CONTENTFUL_SPACE_ID`.
- Run command `npm install`
- Start your server `npm run dev`
