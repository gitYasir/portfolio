import Head from "next/head";
import Splash from "../Components/Splash/Splash";
import Navbar from "../Components/NavBar/Navbar";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Yasir Ibrahim Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <Navbar />
      <Splash />
    </>
  );
}
