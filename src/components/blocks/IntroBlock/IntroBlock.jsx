import styles from './IntroBlock.module.css'
import image from '../../../assets/images/image1.png'



const IntroBlock = () => {

    return (

        <section id='about' className={styles.container}>
            <div className={styles.bg}>
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    first truly wear-to-earn project
                </h1>
                <img className={styles.image} src={image} alt="#" />
            </div>
        </section>
    )
}


export default IntroBlock;