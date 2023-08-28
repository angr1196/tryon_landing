import { memo } from 'react';
import styles from './DescriptionBlock.module.css'
import image2 from '../../../assets/images/image2.png'
import Button from '../../UI/Button';

const DescriptionBlock = () => {

    return (
        <section id='features' className={styles.container}>
            <div className={styles.content}>
                <div className={styles.description}>
                    <h2 className={styles.descriptionTitle}>What<br />is Tryon</h2>

                    <div className={styles.descriptionText}>
                        TRYON is a web3 social platform that connects brands, creators,
                        and shoppers through the distribution of original content. It enables
                        every user to participate in the fashion world and earn crypto
                        through their activities.
                    </div>

                    <Button>Read more</Button>
                </div>

                <img className={styles.image} src={image2} alt="decorarion" />
            </div>
        </section>
    )
}

export default memo(DescriptionBlock);