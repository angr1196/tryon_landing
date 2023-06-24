import Button from '../../UI/Button';
import styles from './FaqBlock.module.css'
import Questionform from './QuestionForm';


const FAQList = [
    {
        id: 1,
        question: 'What is TRYON?',
        answer: 'FMT is distributed via a vesting system to promote stability and prevent market manipulation. The specific vesting terms such as duration and release rate may vary, but the overall goal is to ensure its value reflects platform usage and adoption.'
    },
    {
        id: 2,
        question: 'How can I join beta?',
        answer: 'To join the TRYON beta launch, you need to sign up on the TRYON website or follow TRYON\'s social media accounts to stay updated on when the beta launch is happening. Once the beta is available, you can apply to become a beta tester by filling out a form on the TRYON website. The TRYON team will review the applications and select a limited number of beta testers to participate in the program. As a beta tester, you will have early access to the app and be able to provide feedback to help improve the app before the official launch.'
    },
    {
        id: 3,
        question: 'When will TRYON be launched?',
        answer: 'TRYON is currently under development and a launch date has not yet been announced. However, the team is working hard to bring the platform to users as soon as possible.'
    },
    {
        id: 4,
        question: 'What platforms will TRYON be available on (iOS, Android, web, etc.)?',
        answer: 'TRYON will be available on both iOS and Android platforms. The platform will also have a web-based Business version.'
    },
    {
        id: 5,
        question: 'How do I sign up to use TRYON once it\'s launched?',
        answer: 'Once TRYON is launched, you can download the app from the App Store or Google Play and sign up for an account. You will need to provide some basic personal information and create a username and password to get started.'
    },
    {
        id: 6,
        question: 'Is TRYON free to use?',
        answer: 'TRYON is free to download and use for both reviewers and users. However, there are some optional paid inner services available. These services include inner targeting ads and the ability to create and pay for review contracts, ads, and analytics. Also, there are transaction fees associated with cryptocurrency transfers.'
    }]

const FaqBlock = () => {

    return (
        <section id='faq' className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    FAQ
                </h2>
                <div className={styles.questions}>
                    <Questionform itemsList={FAQList} />
                </div>
                <div className={styles.btn}>
                    <Button buttonText={'Show more'} />
                </div>
            </div>
        </section>
    )
}

export default FaqBlock;