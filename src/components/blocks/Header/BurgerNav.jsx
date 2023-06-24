
import styles from './BurgerNav.module.css'
import closeIcon from '../../../assets/decorations/closeIcon.png'
import logo2 from '../../../assets/images/small-logo.png'
import Button from '../../UI/Button'

const BurgerNav = (props) => {

    return (
        <div className={styles.wrapp}>
            <div className={styles.container}>
                <div className={styles.closeBlock}>
                    <img clasName={styles.burgerLogo} src={logo2} alt="" />
                    <button className={styles.closeButton} onClick={props.onClose}>
                        <img src={closeIcon} alt="" />
                    </button>
                </div>
                <nav className={styles.navBlock}>
                    <a href="#about" onClick={props.onClose}>About</a>
                    <a href="#features" onClick={props.onClose}>Features</a>
                    <a href="#tokenomics" onClick={props.onClose}>Tokenomics</a>
                    <a href="#roadmap" onClick={props.onClose}>Roadmap</a>
                    <a href="#faq" onClick={props.onClose}>FAQ</a>
                </nav>
                <div className={styles.buttonsBlock}>
                    <div className={styles.whiteButton}>
                        <Button color={'white'} buttonText={"Whitepaper"} />
                    </div>
                    <div>
                        <Button href={'#contactUs'} buttonText={"Contact Us"} onClick={props.onClose} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerNav;