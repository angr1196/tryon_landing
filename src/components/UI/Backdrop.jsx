import styles from './Backdrop.module.css'

const Backdrop =({onClose, children})=>{

    return(
        <div className={styles.backdrop} onClick={onClose}>
            {children}
        </div>
    )
}

export default Backdrop