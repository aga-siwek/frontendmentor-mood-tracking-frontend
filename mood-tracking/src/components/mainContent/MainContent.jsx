import styles from "./MainContent.module.css"
import FeelingContainer  from "./TodayMood/FeelingContainer.jsx";
import ReflectionContainer from "./TodayMood/ReflectionContainer.jsx";
import SleepContainer from "./TodayMood/SleepContainer.jsx";
import TodayMoodButton from "./TodayMood/TodayMood.jsx";
import Average from "./Average/Average.jsx"




import Title from "./Title/Title.jsx";
import TodayMood from "./TodayMood/TodayMood.jsx";

function MainContent ({
                          userName,
                          mood,
                          feels,
                          sleepTime,
                          averageMood,
                          averageSleepTime,
                          prevAverageMood,
                          prevAverageSleepTime}) {
    console.log("from main content");
    console.log(userName)
    return (
        <div className={styles.main_content}>
            <Title userName={userName} />
            <TodayMood mood={mood} feels={feels} sleepTime={sleepTime}/>
            <Average
                averageMood={averageMood}
                averageSleepTime={averageSleepTime}
                prevAverageMood = {prevAverageMood}
                prevAverageSleepTime = {prevAverageSleepTime}/>
        </div>
    )
}
export default MainContent;