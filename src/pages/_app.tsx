import { ProductContextProvider } from "@/context/useProductList";
import Layout from "@/layout/Layout";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  return (
    <ProductContextProvider>
      <SessionProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ProductContextProvider>
  );
};

export default MyApp;
