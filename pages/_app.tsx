import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";
import ThirdwebGuideFooter from "../components/ThirdwebGuideFooter";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      clientId="a71602f1d0822c8003cf0df203ebd0b0"
      activeChain={activeChain}>
      <Head>
        <title>FMS Staking</title>
      </Head>
      <Navbar />
      
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
