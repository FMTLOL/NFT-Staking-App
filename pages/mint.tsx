import { Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>FMS Discount NFT</h1>
      <br />
      <br />
      <Image src="/nft.png" alt="logo" width={300} height={200} /> 
      <h4>3% discount on all FMS platform services</h4>
      <p className={styles.explain}>
      MINT Price 200.000 FMS Tokens 
      </p>
      
     <br />
      <Web3Button
        connectWallet={{
            modalSize: "compact",
            modalTitleIconUrl: "",
          }}
        contractAddress={nftDropContractAddress}
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        MINT
      </Web3Button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>fms ©2024</h4>
      
    </div>
  );
};

export default Mint;
