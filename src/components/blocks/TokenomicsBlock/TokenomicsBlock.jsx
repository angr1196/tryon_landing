import Button from '../../UI/Button';
import styles from './TokenomicsBlock.module.css'
import diagram from '../../../assets/images/image4.png'
import tokenomics1 from '../../../assets/decorations/tokenomics1.png'
import tokenomics2 from '../../../assets/decorations/tokenomics2.png'
import tokenomics3 from '../../../assets/decorations/tokenomics3.png'
import tokenomics4 from '../../../assets/decorations/tokenomics4.png'
import tokenomics5 from '../../../assets/decorations/tokenomics5.png'
import tokenomics6 from '../../../assets/decorations/tokenomics6.png'
import tokenomics8 from '../../../assets/decorations/tokenomics8.png'
import tokenomics9 from '../../../assets/decorations/tokenomics9.png'
import tokenomics10 from '../../../assets/decorations/tokenomics10.png'
import image3 from '../../../assets/images/image3.png'

const TokenomicsBlock = () => {

    return (
        <section id='tokenomics' className={styles.tokenomicsSection}>
            <div className={styles.bg}>
                <img className={styles.decor1} src={tokenomics1} alt="" />
                <img className={styles.decor2} src={tokenomics2} alt="" />
                <img className={styles.decor3} src={tokenomics3} alt="" />
                <img className={styles.decor4} src={tokenomics3} alt="" />
                <img className={styles.decor5} src={tokenomics4} alt="" />
                <img className={styles.decor6} src={tokenomics5} alt="" />
                <img className={styles.decor7} src={tokenomics6} alt="" />
                <img className={styles.decor8} src={tokenomics2} alt="" />

                <img className={styles.decor9} src={tokenomics8} alt="" />
                <img className={styles.decor10} src={tokenomics9} alt="" />
                <img className={styles.decor11} src={tokenomics10} alt="" />
            </div>

            <div className={styles.content}>
                <h2 className={styles.title}>
                    tokenomics
                </h2>

                <div className={styles.topBlock}>
                    <div className={styles.topBlockDescription}>
                        <h3 className={styles.paragraphTitle}>
                            Fashion <br /> Mannequin Token
                        </h3>
                        <div className={styles.topBlockText}>
                            The TRYON tokenomics model is designed to provide a fair
                            and stable economy. It operates on a single-token system
                            with the limited supply Fashion Mannequin Token (ticker
                            symbol FMT) serving as the only utility and governance
                            token
                        </div>
                       <Button buttonText={'Read more'}/>
                    </div>
                    <div className={styles.topImageWrapper}>
                        <img className={styles.topBlockImage} src={image3} alt="#" />
                    </div>
                </div>

                <div className={styles.bottomBlock}>

                    <div className={styles.bottomBlockDescription}>
                        <h3 className={styles.paragraphTitle}>
                            FMT Distribution
                        </h3>
                        <div className={styles.bottomBlockText}>
                            FMT is distributed via a vesting system to promote stability
                            and prevent market manipulation. The specific vesting terms
                            such as duration and release rate may vary, but the overall
                            goal is to ensure its value reflects platform usage and
                            adoption.
                        </div>
                        <Button buttonText={'Read more'}/>
                    </div>
                    <div className={styles.bottomImageWrapper}>
                        <img className={styles.bottomBlockImage} src={diagram} alt="#" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TokenomicsBlock;