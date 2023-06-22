
import styles from './BurgerNav.module.css'
import closeIcon from '../../assets/decorations/closeIcon.png'
import logo2 from '../../assets/images/small-logo.png'
import Modal from '../UI/Modal'
import Button from '../UI/Button'

const BurgerNav = (props) => {

    return (
        <Modal onClose={props.onClose}>
            <div className={styles.container}>
                <div className={styles.closeBlock}>
                    <img clasName={styles.burgerLogo} src={logo2} alt="" />
                    <button className={styles.closeButton} onClick={props.onClose}>
                        <img src={closeIcon} alt="" />
                    </button>

                </div>
                <div className={styles.navBlock}>
                    <a href="#about">About</a>
                    <a href="#features">Features</a>
                    <a href="#tokenomics">Tokenomics</a>
                    <a href="#roadmap">Roadmap</a>
                    <a href="#faq">FAQ</a>
                </div>
                <div className={styles.buttonsBlock}>
                    <div className={styles.whiteButton}>
                        <Button color={'white'} buttonText={"Whitepaper"} />
                    </div>
                    <div>
                        <Button buttonText={"Contact Us"} />
                    </div>


                </div>

            </div>
        </Modal>
    )
}

export default BurgerNav;