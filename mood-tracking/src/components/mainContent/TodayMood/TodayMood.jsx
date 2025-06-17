import styles from "./TodayMood.module.css"
import FeelingContainer from "./FeelingContainer.jsx";
import ReflectionContainer from "./ReflectionContainer.jsx";
import SleepContainer from "./SleepContainer.jsx";
function TodayMood ({mood, feels, sleepTime}) {
    return (
        <div className={styles.today_mood}>
            <FeelingContainer mood={mood} feels={feels} />
            <SleepContainer sleepTime={sleepTime} />
            <ReflectionContainer mood={mood} feels={feels} />
        </div>
    )
}
export default TodayMood;