import styles from './Button.module.css'

const Button = (props) => {

    return (
        <div >
            <a className={props.color === 'white' ? styles.btnWhite : styles.btn} href={props.href}>
                {props.buttonText}
            </a>

        </div>


    )
};

export default Button;