'use client'
import { useEffect, useRef } from "react"
import styles from "./IntroSection.module.css"
import Image from "next/image";

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
                    <Image 
                        src="/images/logo-large.png"
                        alt="GeeBlock Logo"
                        width={120}
                        height={126}
                        className={styles.logoImage}
                        priority
                    />
                </div>

                <h1 className={styles.mainTitle}>
                    Welcome to<br />
                    <Image 
                        src="/images/geeblock-text.png"
                        alt="GeeBlock"
                        width={456}
                        height={121}
                        className={styles.titleImage}
                        priority
                    />
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
                                <Image 
                                    src="/images/intro-icon1.png"
                                    alt="GeeBlock"
                                    width={152}
                                    height={152}
                                    className={styles.cardIcon}
                                />
                            </div>
                          
                            <p>The cutting-edge blockchain technology of GeeBlock</p>
                        </div>
                     
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardInner}>
                            <h3>$GEE</h3>
                            <div className={styles.iconWrapper}>
                                <Image 
                                    src="/images/intro-icon2.png"
                                    alt="$GEE"
                                    width={152}
                                    height={152}
                                    className={styles.cardIcon}
                                />
                            </div>
                            <p>Value growth through $GEE Tokenomics</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div  className={styles.cardInner}>
                            <h3>GEE Ecosystem</h3>
                            <div className={styles.iconWrapper}>
                                <Image 
                                    src="/images/intro-icon3.png"
                                    alt="GEE Ecosystem"
                                    width={152}
                                    height={152}
                                    className={styles.cardIcon}
                                />
                            </div>
                            <p>Leading the Web3 market through the activation of the GeeBlock Ecosystem</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}