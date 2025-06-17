import styles from "./Title.module.css"
import TodayDate from "./TodayDate.jsx";

function Title({userName}) {
    console.log("from title");
    console.log(userName);
    return (

        <div className={styles.title}>
            <div className={styles.title_hello}>Hello, {userName}!</div>
            <div className={styles.title_header}>How are you feeling today?</div>
            <TodayDate/>
        </div>

    )
}

export default Title;