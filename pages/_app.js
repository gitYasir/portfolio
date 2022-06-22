import { NextUIProvider } from "@nextui-org/react";
import "../Styles/Global.css";
function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
