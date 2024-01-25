import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <br>
      </br>
      <h1 className={styles.h1}>FMS Staking</h1>
      <p className={styles.selectBoxDescription}>
      <br/>
      Stake FMS Discount NFTs, Get F Token</p>
      <br/>
      <br/>
      <br/>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/mint")}
        >
          
        
          <h2 className={styles.selectBoxTitle}>MINT</h2>
          
        </div>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/stake")}
        >
          
        
          <h2 className={styles.selectBoxTitle}>Stake</h2>
          
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/claim")}
        >
          {/* Staking an NFT */}
          
          <h2 className={styles.selectBoxTitle}>Claim </h2>
        
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/Withdraw")}
        >
          {/* Staking an NFT */}
          
          <h2 className={styles.selectBoxTitle}>Withdraw</h2>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
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

export default Home;
