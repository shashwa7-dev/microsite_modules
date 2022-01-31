import styles from './layout.module.scss'
import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'
import { Navbar } from '../Navbar/Navbar'

export default function Layout({ children, siteTitle='hello!', left_logo, right_logo, footer_logo})
{
    return(
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.header}>
        <Navbar logo_left={left_logo} logo_right={right_logo} />
      </div>
      <main>{children}</main>
      <div className={styles.footer}>
        <span className={styles.footer_text}>Powered by</span>
        <div className={styles.footer_icon}><Image src={footer_logo} alt="footer_logo"/></div>
      </div>
     </div>
    )
}