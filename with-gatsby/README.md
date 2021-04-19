## Getting Started

- Go to [Dola's website](https://dola.me/), sign up, and complete your merchant on-boarding
- Once completed, proceed to your Wallet's `Settings > Business Details` to copy and paste your `MERCHANT_ID`
- Use your `MERCHANT_ID` to configure your Vercel deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fdolapay%2Fbep-examples%2Ftree%2Fmain%2Fwith-gatsby&env=NEXT_PUBLIC_MERCHANT_ID&envDescription=Your%20Merchant%20ID&envLink=https%3A%2F%2Fgithub.com%2Fdolapay%2Fbep-examples%2Ftree%2Fmain%2Fwith-gatsby%23getting-started)

## Download Manually

- Clone:

  ```shell
  npx degit dolapay/bep-examples/with-gatsby#main with-gatsby
  ```

- Run command `cd with-gatsby`
- Create a `.env.development` file and paste your `MERCHANT_ID` into the `NEXT_PUBLIC_MERCHANT_ID` field
- Run command `npm install`
- Start your server `npm run develop`
