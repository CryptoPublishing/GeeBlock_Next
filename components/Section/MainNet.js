// components/MainNet.js
import styles from "./MainNet.module.css";

export default function MainNet() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div>
          <p className={styles.text}> GeeBlock MainNet</p>
          <p className={styles.text}>
            The GEEBLOCK MainNet is a Layer 1 network managed by a
            decentralized, multinational team. It is a top-tier blockchain
            designed with the goals of high speed, reliable tokenomics, and
            integration with various industries.
          </p>
          <p className={styles.text}>
            Contribute to the decentralized economy with your unique dApp
            project. Innovation is made possible through your team. GEEBLOCK
            allows anyone to use the blockchain under the same conditions
            without requiring permission.
          </p>
        </div>
        <div>사진</div>
      </div>
    </div>
  );
}
