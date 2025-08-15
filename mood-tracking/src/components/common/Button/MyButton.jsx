import styles from "./MyButton.module.css"

function MyButton({formType = "general", size="big", onClick="none"}) {
    if (formType === "login") {
        return (
            <button
                type="submit" className={`${styles.button} ${styles[size]}`}>Log in</button>
        )
    } else if (formType === "sign up") {
        return (
            <button type="submit" className={`${styles.button} ${styles[size]}`}>Sign Up</button>
        )
    } else if (formType === "personalize") {
        return (
            <button type="submit" className={`${styles.button} ${styles[size]}`}>Start Tracking</button>
        )
    }else if (formType === "continue") {
        return (
            <button type="submit" className={`${styles.button} ${styles[size]}`}>Continue</button>
        )
    } else if (formType === "submit") {
        return (
            <button type="submit" className={`${styles.button} ${styles[size]}`}>Start Tracking</button>
        )}
    else if (formType === "new log") {
        return (
            <button type="submit" className={`${styles.button} ${styles[size]} ${styles.small_width}`} onClick={onClick}>Log today's mood</button>
        )}
    else {
        return (
            <button type="submit" className={`${styles.button} ${styles[size]}`}>Submit</button>)
    }
}

export default MyButton;


