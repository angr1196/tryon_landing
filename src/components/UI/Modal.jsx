import styles from './Modal.module.css'
import React from 'react'
import  ReactDOM  from 'react-dom'


const Backdrop = (props) => {
    return (
        <div onClick={props.onClose} className={styles.backdrop}></div>
    )
}

const ModalWindow = (props) => {
    return (
        <div className={styles.modal}>
            {props.children}
        </div>
    )

}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
return(
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
    </React.Fragment>
)

}

export default Modal;