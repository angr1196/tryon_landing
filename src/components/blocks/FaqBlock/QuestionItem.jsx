
import styles from './QuestionItem.module.css'
import buttonPlus from '../../../assets/decorations/buttonPlus.png'
import buttonMinus from '../../../assets/decorations/buttonMinus.png'
import { useState } from 'react'

const QuestionItem = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const openHandler = () => {
        setIsOpen(true);
    }

    const closeHandler = () => {
        setIsOpen(false);
    }


    const openButton = (
        <button className={styles.btn} onClick={openHandler}>
            <img src={buttonPlus} alt="#" />
        </button>);

    const closeButton = (
        <button className={styles.btn} onClick={closeHandler}>
            <img src={buttonMinus} alt="#" />
        </button>);

    return (
        <div className={styles.questionWrapper}>
            <div className={styles.question}>
                <div className={styles.questionText}>
                    {props.question}
                </div>
                {isOpen ? closeButton : openButton}
            </div>
            {isOpen && <div className={styles.answer}>{props.answer}</div>}
        </div>
    )
}

export default QuestionItem;