## Getting Started

- Go to [Dola's website](https://dola.me/), sign up, and complete your merchant on-boarding
- Once completed, proceed to your Wallet's `Settings > Business Details` to copy and paste your `MERCHANT_ID`
- Use your `MERCHANT_ID` to configure your Vercel deployment

## Download Manually

- Clone:

  ```bash
  npx degit dolapay/backendless-ecommerce-platform/examples/nextjs-example nextjs-example
  ```

- Run command `cd nextjs-example`
- Create a `.env.local` file and paste your `MERCHANT_ID` into the `NEXT_PUBLIC_MERCHANT_ID` field
- Run command `npm install`
- Start your server `npm run dev`
