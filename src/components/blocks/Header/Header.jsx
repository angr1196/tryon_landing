import { memo } from 'react'
import styles from './Header.module.css'
import logo1 from '../../../assets/images/small-logo.png'
import logo from '../../../assets/images/logo.png'
import burgerIcon from '../../../assets/decorations/burgerIcon.png'
import Button from '../../UI/Button'
import BurgerNav from './BurgerNav'
import Backdrop from '../../UI/Backdrop'

const Header = ({ onOpen, onClose, navIsOpen }) => {

    return (
        <div className={styles.container}>
            <div className={styles.navMobile}>
                <div>
                    <img src={logo1} alt="tryon logo" />
                </div>

                <button className={styles.burgerButton} onClick={onOpen}>
                    <img src={burgerIcon} alt="burger menu icon" />
                </button>

                {navIsOpen && <Backdrop onClose={onClose}><BurgerNav onClose={onClose} /></Backdrop>}
            </div>

            <div className={styles.navDesktop}>
                <div className={styles.navLogo}>
                    <a className={styles.logoText} href="#">
                        <img src={logo} alt="tryon logo" />
                    </a>
                </div>

                <nav className={styles.navbarItems}>
                    <a className={styles.item} href="#about">About</a>
                    <a className={styles.item} href="#features">Features</a>
                    <a className={styles.item} href="#tokenomics">Tokenomics</a>
                    <a className={styles.item} href="#roadmap">Roadmap</a>
                    <a className={styles.item} href="#faq">FAQ</a>
                </nav>

                <div className={styles.buttons}>
                    <Button color={'white'}> Whitepaper</Button>
                    <Button href={'#contactUs'}>Contact us</Button>
                </div>
            </div>
        </div>
    )

}
export default memo(Header);