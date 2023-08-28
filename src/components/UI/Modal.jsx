import { createPortal } from 'react-dom'
import Backdrop from './Backdrop'


const portalElement = document.getElementById('overlays');

const Modal = ({ children }) => {
    return (
        <>
            {createPortal(<Backdrop onClose={props.onClose} >{children}</Backdrop>, portalElement)}
        </>
    )
}

export default Modal;