### Welcome to the Auth Next project

Here are the few things you need to do to run it on your local machine

1. run `npm i` to install dependencies
2. create a `.env.local` file which will be store in your machine and will not sent to github
3. add `NEXTAUTH_SECRET`, `GITHUB_SECRET` & `GITHUB_ID` to this file which can be obtain following this

   1. NEXTAUTH_SECRET can be obtain following [this document](https://next-auth.js.org/configuration/options)

   You will need to run this command and pass it to env variable
   `openssl rand -base64 32`

   2. GITHUB_SECRET & GITHUB_ID can both be obtained from githun Oauth app setup. For this create new Oauth app and copy the secret and id seperately. Create it from [here](https://github.com/settings/developers)

4. once everything is set up run development server with `npm run dev`

5. Since there is no BE at the moment, you can use dummy user credentials which can be found at src/app/options.ts file. You can add your login logic here in the future.
6. We already have some middleware to protect routes which was provided by Next Auth. You can check the docs [from here](https://next-auth.js.org/getting-started/introduction)
