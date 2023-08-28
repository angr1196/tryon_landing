import { memo } from 'react'
import styles from './BurgerNav.module.css'
import closeIcon from '../../../assets/decorations/closeIcon.png'
import logo2 from '../../../assets/images/small-logo.png'
import Button from '../../UI/Button'

const BurgerNav = ({onClose}) => {

    return (
        <div className={styles.wrapp}>
            <div className={styles.container}>
                <div className={styles.closeBlock}>
                    <img className={styles.burgerLogo} src={logo2} alt="burger menu icon" />

                    <button className={styles.closeButton} onClick={onClose}>
                        <img src={closeIcon} alt="close menu icon" />
                    </button>
                </div>

                <nav className={styles.navBlock}>
                    <a href="#about" onClick={onClose}>About</a>
                    <a href="#features" onClick={onClose}>Features</a>
                    <a href="#tokenomics" onClick={onClose}>Tokenomics</a>
                    <a href="#roadmap" onClick={onClose}>Roadmap</a>
                    <a href="#faq" onClick={onClose}>FAQ</a>
                </nav>

                <div className={styles.buttonsBlock}>
                    <div className={styles.whiteButton}>
                        <Button color={'white'}>Whitepaper</Button>
                    </div>

                    <div>
                        <Button href={'#contactUs'} onClick={onClose} >Contact Us</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(BurgerNav);