
import styles from './Header.module.css'
import logo1 from '../../assets/images/small-logo.png'
import logo from '../../assets/images/logo.png'
import burgerIcon from '../../assets/decorations/burgerIcon.png'
import Button from '../UI/Button'



const Header = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.navMobile}>
                <div>
                    <img src={logo1} alt="#" />
                </div>
                <button className={styles.burgerButton} onClick={props.onOpen}>
                    <img src={burgerIcon} alt="#" />
                </button>
            </div>
            <div className={styles.navDesktop}>
                <div className={styles[`nav-logo`]}>
                    <a className={styles[`logo-text`]} href="#">
                        <img src={logo} alt="#" />
                    </a>
                </div>
                <div className={styles[`navbar-items`]}>
                    <a className={styles.item} href="#about">About</a>
                    <a className={styles.item} href="#features">Features</a>
                    <a className={styles.item} href="#tokenomics">Tokenomics</a>
                    <a className={styles.item} href="#roadmap">Roadmap</a>
                    <a className={styles.item} href="#faq">FAQ</a>
                </div>
                <div className={styles.buttons}>
                    <Button buttonText={'Whitepaper'} color={'white'}/>
                    <Button href={'#contactUs'} buttonText={'Contact us'}/>
                </div>
            </div>
        </div>
    )

}
export default Header;