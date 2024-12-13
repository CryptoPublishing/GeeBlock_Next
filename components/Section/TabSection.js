'use client'
import Image from "next/image";
import styles from "./TabSection.module.css";
import { useState } from "react";

export default function TabSection(){
    const [activeTab, setActiveTab] = useState('De-Sci')
    
    const renderDeSciContent = () => (
        <div className={styles.deSciLayout}>
            <div className={styles.sectionCol}>
                <div className={styles.imgBox}>
                    <Image src="/images/tabSection/desci-img1.png" alt="De-Sci 1" width={230} height={230} />
                </div>
                <p>The Convergence of Blockchain Technology and Science A project aimed at building an ecosystem 
                    by utilizing blockchain technology to store scientific and technological data and implementing 
                    tokenomics for profit distribution to project participants.
                </p>
            </div>
            <div className={styles.sectionCol}>
                <div className={styles.imgBox}>
                    <Image src="/images/tabSection/desci-img2.png" alt="De-Sci 2" width={230} height={230} />
                </div>
                <p>Thousands of cattle grazing on vast grasslands in South America are being equipped with 
                    IoT-enabled devices implanted within their bodies. These devices collect physiological and location data, 
                    driving a revolutionary project in the industrial livestock market. By integrating scientific data from 
                    the physical market with De-Sci principles, we are witnessing the emergence of a decentralized large-scale industry.
                </p>
            </div>
        </div>
      )
    
      const renderAIContent = () => (
        <div className={styles.aiLayout}>
            <div className={styles.sectionCol}>
                <div className={styles.imgBox}>
                    <Image src="/images/tabSection/ai-img1.png" alt="AI 1" width={230} height={186} />
                </div>
                <p>GeeBlock provides the most optimized AI-based communication browser service the most optimized 
                    AI-based communication browser service in gaming, entertainment, and financial services etc,.
                </p>
            </div>
            <div className={styles.sectionCol}>
                <div className={styles.imgBox}>
                    <Image src="/images/tabSection/ai-img2.png" alt="AI 2" width={230} height={184} />
                </div>
                <p>The combination of GeeBlock's AI platform and innovative tokenomics creates a compelling ecosystem</p>
            </div>
            <div className={styles.sectionCol}>
                <div className={styles.imgBox}>
                    <Image src="/images/tabSection/ai-img3.png" alt="AI 3" width={230} height={191} />
                </div>
                <p>AI GeeBlock's AI Platform enables anyone to create AI applications based on generative communication and build our ecosystem. </p>
            </div>
        </div>
      )
    
      const renderDeFiContent = () => (
        <div className={styles.layoutCommon}>
            <div className={styles.imgSection}>
              <Image src="/images/tabSection/defi-img.png" alt="De-Fi" width={416} height={370} />
            </div>
            <div className={styles.rightSection}>
                <div className={styles.textSection}>
                    Decentralized finance (DeFi) is an emerging peer-to-peer financial system that uses blockchain and 
                    cryptocurrencies to allow people, businesses, or other entities to transact directly with each other. 
                    The key principle behind DeFi is to remove third parties like banks from the financial system, thereby reducing 
                    costs and transaction times.
                    In the U.S., the Federal Reserve and Securities and Exchange Commission (SEC) define the rules for centralized financial institutions like banks and brokerages, 
                    which consumers rely on to access capital and financial services directly. DeFi challenges this centralized financial system by empowering individuals with peer-to-peer
                    transactions.
                </div>
            </div>
        </div>
      )
    
      const renderGameContent = () => (
        <div className={styles.layoutCommon}>
            <div className={styles.imgSection}>
              <Image src="/images/tabSection/game-img.png" alt="Game" width={416} height={382} />
            </div>
            <div className={styles.rightSection}>
                <div className={styles.textSection}>
                    A blockchain-based game is a digital game that integrates blockchain technology to offer features such as true ownership of in-game assets,
                    transparent transactions, and decentralized control. Players can own, trade, and sell assets like tokens or NFTs, while the game’s rules and economy are 
                    often governed by smart contracts.
                </div>
            </div>
        </div>
      )

    const renderContent = () =>{
        switch(activeTab) {
            case 'De-Sci': return renderDeSciContent()
            case 'AI' : return renderAIContent()
            case 'De-Fi': return renderDeFiContent()
            case 'Game': return renderGameContent()
            default: return null
        }
    }

    return(
        <section className={styles.tabSection}>
            <div className={styles.tabButtons}>
                {['De-Sci', 'AI', 'De-Fi', 'Game'].map((tab) => (
                    <button
                        key={tab}
                        className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className={styles.tabContent} key={activeTab}>
                {renderContent()}
            </div>
        </section>
    )
}