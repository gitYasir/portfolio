import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import "../Styles/Global.css";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Head>
        <title>Yasir Ibrahim Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
