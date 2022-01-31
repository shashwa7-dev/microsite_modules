import styles from './Navbar.module.scss'
import Image from "next/image"

export const Navbar = ({logo_left, logo_right}) => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                {logo_left && <Image
                    priority
                    src={logo_left}
                    alt="left_logo" 
                />}
            </div>
            <div className={styles.logo}>
                {logo_right && <Image
                    priority
                    src={logo_right}
                    alt="right_logo"
                />}
            </div>
          
        </div>
    )
}