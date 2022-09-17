import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import "../Styles/Global.css";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Head>
        <title>Yasir Ibrahim Portfolio</title>
        <meta
          name="description"
          content="My portfolio website built to demonstrate my skills and capabilities as well as my completed projects"
        />
        <meta
          name="google-site-verification"
          content="kQN0bpkotPsezPE5J9Pk07u-zrFD5_YwkCJU-kKchWE"
        />
        <link rel="icon" href="/myLogo.png" />
      </Head>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
