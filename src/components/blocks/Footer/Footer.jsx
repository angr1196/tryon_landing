import { memo } from 'react';
import footerLogo from '../../../assets/images/footerLogo.png'
import styles from './Footer.module.css'

const Footer = () => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logoBlock}>
                    <img className={styles.logoBlockImage} src={footerLogo} alt="tryon logo" />

                    <div className={styles.logoBlockText}>
                    &#169; TRYON. All rights reseved.
                    </div>
                </div>
                
                <div className={styles.refBlock}>
                    <a href="#">White paper</a>
                    <a href="#">Privacy</a>
                </div>

                <div className={styles.contactsBlock}>
                    <a className={styles.phone} href="tel:+44090932953">+44 090 932 953</a>
                    <a className={styles.mail} href="mailto:tryon@gmail.com">tryon@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default memo(Footer);