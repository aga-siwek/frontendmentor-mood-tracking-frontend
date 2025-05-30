import styles from "./MyButton.module.css"

function MyButton({formType = "general", size="big"}) {
    if (formType === "login") {
        return (
            <button
                type="submit" className={`${styles.button} ${styles[size]}`}>Log in</button>
        )
    } else if (formType === "sign up") {
        return (
            <button type="submit" className={`${styles.button} ${styles[size]}`}>Sign Up</button>
        )
    } else {
        return (
            <button type="submit" className={`${styles.button} ${styles[size]}`}>Submit</button>)
    }
}

export default MyButton;