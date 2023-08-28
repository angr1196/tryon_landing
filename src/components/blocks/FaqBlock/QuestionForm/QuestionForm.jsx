import { memo } from 'react';
import styles from './QuestionForm.module.css'
import QuestionItem from "./QuestionItem/QuestionItem"

const Questionform =({itemsList})=>{

    return(
        <div className={styles.questions}>
            {itemsList.map(item=> <QuestionItem key={item.id} 
            question={item.question} 
            answer={item.answer}/>)}
        </div>
    )
}

export default memo(Questionform);