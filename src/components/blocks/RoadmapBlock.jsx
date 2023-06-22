import styles from './RoadmapBlock.module.css'
import decor1 from '../../assets/decorations/decor1.png'


const RoadmapBlock = () => {


    return (
        <div id='roadmap'className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    roadmap
                </div>
                <div className={styles.periodBlock}>
                    <div className={styles.periodItem}>
                        <div className={styles.periodTitle}>
                            q1 2023
                        </div>
                        <ul className={styles.periodList}>
                            <li>Early investment stageCore platform</li>
                            <li>Architecture Development</li>
                            <li>Design UX/UI</li>
                            <li>Test ecosystem</li>
                        </ul>
                    </div>
                    <div className={styles.periodItem}>
                        <div className={styles.periodTitle}>
                            q2 2023
                        </div>
                        <ul className={styles.periodList}>
                            <li>Testnet MVP Preparation</li>
                            <li>FMT Strategic sale</li>
                            <li>Business development strategy</li>
                        </ul>
                    </div>
                    <div className={styles.periodItem}>
                        <div className={styles.periodTitle}>
                            q3 2023
                        </div>
                        <ul className={styles.periodList}>
                            <li>Load/Penetration testing</li>
                            <li>Testnet tuning/development</li>
                            <li>Business Development for influencers</li>
                            <li>FMT Launchpads</li>
                            <li>Brand integration</li>
                        </ul>
                    </div>
                    <div className={styles.periodItem}>
                        <div className={styles.periodTitle}>
                            q4 2023
                        </div>
                        <ul className={styles.periodList}>
                            <li>Market rollout preparation</li>
                            <li>Offline marketing campaigns</li>
                            <li>Promotional campaign for public</li>
                        </ul>
                    </div>

                </div>
                <div className={styles.rmLineBlock}>
                    <div>
                        <img className={styles.rmZebra} src={decor1} alt="#" />
                    </div>
                    <div className={styles.rmLine}>

                    </div>

                </div>


            </div>

        </div>
    )

}

export default RoadmapBlock;