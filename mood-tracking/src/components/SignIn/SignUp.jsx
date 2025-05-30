import styles from "./SignUp.module.css"
import MyForm from "../common/Form/MyForm.jsx";
function SignUp (email, password, handleDataChange) {
    return (
        <div className={styles.sign_up_container}>
            <div className={styles.sign_up}>
                <div className={styles.header}>
                    <p className={styles.header_top}>Welcome back!</p>
                    <p className={styles.header_body}> Log in to continue tracking your mood and sleep.</p>
                </div>
                <MyForm formType="login" email={email} password={password} handleDataChange={handleDataChange}/>
            </div>
            <div className={styles.sign_up_form_switch}>
                Haven't got an account? <a href="/signup">Sign up </a>.
            </div>
        </div>
    )
}
export default SignUp;