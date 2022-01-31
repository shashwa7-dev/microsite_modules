import styles from './DisplayNFT.module.scss'
export default function DisplayNFT({ nft }) {
    return (
      <div className={styles.nftdisplay}>
          <div className={styles.nft_vid}>
            <video src={nft.vid_src} autoPlay loop muted playsInline></video>
          </div>
          <div className={styles.nft_projectname}>{nft.project_name}</div>
          <div className={styles.nft_name}>#{nft.nft_name}</div>
      </div>
    );
  }