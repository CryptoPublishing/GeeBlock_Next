'use client'
import { useEffect, useRef } from "react"
import styles from "./IntroSection.module.css"
import LargeLogo from "@/public/images/introSection/logo-large.svg";
import GeeBlock from "@/public/images/introSection/GeeBlock.svg";
import Icon1 from "@/public/images/introSection/intro-icon1.svg";
import Icon2 from "@/public/images/introSection/intro-icon2.svg";
import Icon3 from "@/public/images/introSection/intro-icon3.svg";

export default function IntroSection(){
    const videoRef = useRef(null);

    useEffect(()=>{
        if(videoRef.current){
            videoRef.current.play();
        }
    }, [])

    return(
        <section className={styles.introSection}>
            <video
                ref={videoRef}
                className={styles.backgroundVideo}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/videos/background.mp4" type="video/mp4" />
            </video>

            <div className={styles.contentWrapper}>
                <div className={styles.logoWrapper}>
                    <LargeLogo width={120} height={230}  className={styles.logoImage} />
                </div>

                <h1 className={styles.mainTitle}>
                    Welcome to<br />
                    <GeeBlock className={styles.titleImage} />
                </h1>

                <p>
                    GEEBLOCK, created to popularize blockchain technology, is a next-generation mainnet
                    embracing various services in the fields of De-So, De-Ai, De-Fi, as well as the Game
                    and IoT markets, leveraging decentralized technology.
                </p>

                <button>
                    Get Started
                    <div className={styles.gradientBg}></div>
                </button>

                <div className={styles.cardContainer}>

                    <div className={styles.card}>
                        <div className={styles.cardInner}>
                            <h3>GeeBlock</h3>
                            <div className={styles.iconWrapper}>
                                <Icon1 className={styles.cardIcon} />
                            </div>
                          
                            <p>The cutting-edge blockchain technology of GeeBlock</p>
                        </div>
                     
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardInner}>
                            <h3>$GEE</h3>
                            <div className={styles.iconWrapper}>
                                <Icon2 className={styles.cardIcon} />
                            </div>
                            <p>Value growth through $GEE Tokenomics</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div  className={styles.cardInner}>
                            <h3>GEE Ecosystem</h3>
                            <div className={styles.iconWrapper}>
                                <Icon3  className={styles.cardIcon} />
                            </div>
                            <p>Leading the Web3 market through the activation of the GeeBlock Ecosystem</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}