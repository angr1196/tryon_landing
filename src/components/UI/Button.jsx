import styles from './Button.module.css'

const Button = ({color, href, onClick, children}) => {

    return (
        <div >
            <a className={color === 'white' ? styles.btnWhite : styles.btn} href={href} 
            onClick={onClick}>
                {children}
            </a>
        </div>
    )
};

export default Button;