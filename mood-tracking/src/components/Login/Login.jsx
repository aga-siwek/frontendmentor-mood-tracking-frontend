import styles from "./Login.module.css"
import MyForm from "../common/Form/MyForm.jsx"
import {useContext, useEffect} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

function Login({email, password, handleDataChange}) {
    const {addToken} = useContext(AuthContext);

    useEffect(() => {
        const tryLogin = async () => {
            const success = await addToken({'user_email': email, 'user_password': password});
            if (success) {
                console.log(success);
                console.log(localStorage.getItem("token"))
            } else {
                console.log("login failed");
            }
        };
        if (email && password) {
            tryLogin();
        }
    }, [email, password]);

    return (
        <div className={styles.login_container}>
            <div className={styles.login}>
                <div className={styles.header}>
                    <p className={styles.header_top}>Welcome back!</p>
                    <p className={styles.header_body}> Log in to continue tracking your mood and sleep.</p>
                </div>
                <MyForm formType="login" email={email} password={password} handleDataChange={handleDataChange}/>
            </div>
            <div className={styles.login_form_switch}>
                Haven't got an account? <a href="/sign-up">Sign up </a>.
            </div>
        </div>
    )
}

export default Login;