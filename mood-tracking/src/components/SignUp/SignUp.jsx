import styles from "./SignUp.module.css"
import MyForm from "../common/Form/MyForm.jsx";
function SignUp ({email, password, handleDataChange}) {
    return (
        <div className={styles.sign_up_container}>
            <div className={styles.sign_up}>
                <div className={styles.header}>
                    <p className={styles.header_top}>Create an account</p>
                    <p className={styles.header_body}> Join to track your daily mood and sleep with ease.</p>
                </div>
                <MyForm formType="sign up" email={email} password={password} handleDataChange={handleDataChange}/>
            </div>
            {/*<div className={styles.sign_up_form_switch}>*/}
            {/*    Already got an account? <a href="/login">Log in</a>.*/}
            {/*</div>*/}
        </div>
    )
}
export default SignUp;