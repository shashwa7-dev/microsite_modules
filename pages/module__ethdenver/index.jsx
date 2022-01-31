import Layout from "../../components/Layout/Layout"
import Image from "next/image"
import eth_denver from '../../public/assets/ethdenver/eth_denver.svg'
import polygon_logo from '../../public/assets/ethdenver/polygon_logo.svg'
import logo from '../../public/assets/logo.svg'
import styles from './index.module.scss'
export default function LandingPage() {
    return (
        <div className={styles.container}>
        <Layout left_logo={polygon_logo} right_logo={eth_denver} footer_logo={logo}>
            <h1>Landing Page</h1>
        </Layout>
        </div>
    )
}