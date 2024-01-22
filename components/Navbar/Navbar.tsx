import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo.png"
              width={48}
              height={48}
              alt="FMS Staking" 
            />
          </Link>

          <div className={styles.navMiddle}>
          <Link href="https://fmtlol.com" className={styles.link}>
              Home
            </Link>
            <Link href="/mint" className={styles.link}>
              MINT
            </Link>
            <Link href="/stake" className={styles.link}>
              Stake
            </Link>
            <Link href="/Withdraw" className={styles.link}>
              Withdraw
            </Link>
            <Link href="/claim" className={styles.link}>
             Claim
            </Link>
            <Link href="https://market.fmtlol.com" className={styles.link}>
             Market
            </Link>
            
            
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
          <ConnectWallet
          theme={"dark"}
          btnTitle={"Connect Wallet"}
          modalTitle={""}
          modalSize={"wide"}
          welcomeScreen={{
            title: "FMS Staking",
            subtitle: "Stake FMS Discount NFTs, Get FMS Token",
            img: {
              src: "https://i.imgur.com/3D2Arx0.png",
              width: 150,
              height: 150,
            },
          }}
          modalTitleIconUrl={
            "https://i.imgur.com/34MRBfl.png"
          }
        />
          </div>
        </div>
      </nav>
    </div>
  );
}
