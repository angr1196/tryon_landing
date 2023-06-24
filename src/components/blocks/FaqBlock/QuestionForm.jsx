import styles from './QuestionForm.module.css'
import QuestionItem from "./QuestionItem"


const Questionform =(props)=>{

    return(
        <div className={styles.questions}>
            {props.itemsList.map(item=> <QuestionItem key={item.id} 
            question={item.question} 
            answer={item.answer}/>)}
        </div>
    )
}

export default Questionform;