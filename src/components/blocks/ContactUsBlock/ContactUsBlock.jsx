import { memo } from 'react';
import styles from './ContactUsBlock.module.css'
import image5 from '../../../assets/images/image5.png'
import Button from '../../UI/Button';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import classNames from 'classnames';



const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


export const contactUsFormSchema = yup.object().shape({
    contactName: yup.string().required("Please, enter your name"),
    contactEmail: yup.string().required("Please, enter your email").matches(emailRegex, "Email required"),
    contactMessage: yup.string().required("Please, enter your message")

});

const ContactUsBlock = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(contactUsFormSchema),
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <section id='contactUs' className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contactBlock}>
                    <h2 className={styles.contactTitle}>contact us</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm} action="">
                        <div >
                            <input {...register("contactName")}
                                className={classNames(styles.contactInput, styles.inputName)}
                                type="text" placeholder="Name*" />
                            {!!errors.contactName && (<div className={styles.error}>{errors.contactName.message}</div>)}
                        </div>

                        <div >
                            <input {...register("contactEmail")}
                                className={classNames(styles.contactInput, styles.inputEmail)}
                                type="text" placeholder="Email*" />
                            {!!errors.contactEmail && (<div className={styles.error}>{errors.contactEmail.message}</div>)}
                        </div>

                        <div >
                            <textarea {...register("contactMessage")}
                                className={classNames(styles.contactInput, styles.inputMessage)}
                                placeholder="Your message*" />
                            {!!errors.contactMessage && (<div className={styles.error}>{errors.contactMessage.message}</div> )}
                        </div>

                        <div className={styles.contactButton}>
                            <Button>Send</Button>
                        </div>
                    </form>
                </div>

                <img className={styles.contactImage} src={image5} alt="decorarion" />
            </div>
        </section>
    )
}

export default memo(ContactUsBlock);