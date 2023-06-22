import styles from './DescriptionBlock.module.css'
import image2 from '../../assets/images/image2.png'
import Button from '../UI/Button';


const DescriptionBlock = () => {

    return (
        <div id='features' className={styles.container}>
            <div className={styles.content}>
                <div className={styles.description}>
                    <div className={styles.descriptionTitle}>
                        What
                        <br />
                        is Tryon
                    </div>
                    <div className={styles.descriptionText}>
                        TRYON is a web3 social platform that connects brands, creators,
                        and shoppers through the distribution of original content. It enables
                        every user to participate in the fashion world and earn crypto
                        through their activities.
                    </div>
                    <Button buttonText={'Read more'}/>
                </div>
                <img className={styles.image} src={image2} alt="#" />
            </div>
        </div>
    )
}

export default DescriptionBlock;