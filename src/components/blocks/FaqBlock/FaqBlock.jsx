import { memo } from 'react';
import Button from '../../UI/Button';
import styles from './FaqBlock.module.css'
import Questionform from './QuestionForm/QuestionForm';
import { FAQList } from './FaqBlockConfig';

const FaqBlock = () => {

    return (
        <section id='faq' className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>FAQ</h2>

                <div className={styles.questions}>
                    <Questionform itemsList={FAQList} />
                </div>

                <div className={styles.btn}>
                    <Button>Show more</Button>
                </div>
            </div>
        </section>
    )
}

export default memo(FaqBlock);