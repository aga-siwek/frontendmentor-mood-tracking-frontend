import styles from "./Title.module.css"
import TodayDate from "./TodayDate.jsx";

function Title() {
    const userName = localStorage.getItem("userName")

    return (
        <div className={styles.title}>
            <p className={styles.title_hello}>Hello, {userName}!</p>
            <p className={styles.title_header}>How are you feeling today?</p>
            <TodayDate/>
        </div>
    )
}

export default Title;