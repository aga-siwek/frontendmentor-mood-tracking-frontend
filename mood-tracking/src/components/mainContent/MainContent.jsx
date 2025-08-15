import styles from "./MainContent.module.css"
import FeelingContainer from "./TodayMood/FeelingContainer.jsx";
import ReflectionContainer from "./TodayMood/ReflectionContainer.jsx";
import SleepContainer from "./TodayMood/SleepContainer.jsx";
import TodayMoodButton from "./TodayMood/TodayMood.jsx";
import Average from "./Average/Average.jsx"
import Button from "../common/Button/MyButton.jsx"


import Title from "./Title/Title.jsx";
import TodayMood from "./TodayMood/TodayMood.jsx";
import Statistics from "./Statistics/Statistics.jsx";
import {useEffect} from "react";
import MyButton from "../common/Button/MyButton.jsx";


function MainContent({
                         userName = "unknown",
                         mood,
                         feels,
                         sleepTime,
                         averageMood,
                         averageSleepTime,
                         prevAverageMood,
                         prevAverageSleepTime,
                         handleAverageMoodChange,
                         handleAverageSleepChange,
                         logs,
                         addedToday,
                         checkTodayLog,
                         showLogAdd,
                         myUserName
                     }) {

    const todayDate = new Date()


    let lastLog
    if (logs) {
        if (logs.length > 0) {
            lastLog = logs[logs.length - 1];
        }
    }
    handleAverageMoodChange()
    handleAverageSleepChange()

    useEffect(() => {
        if (logs) {
            if (logs.length > 0) {
                if (
                    Number(todayDate.getDate()) == Number(lastLog.created_at_day) &&
                    Number(todayDate.getMonth() + 1) == Number(lastLog.created_at_month) &&
                    Number(todayDate.getFullYear()) == Number(lastLog.created_at_year)
                ) {
                    console.log("after if in main")
                    checkTodayLog(true)

                } else {
                    console.log("not today date")
                    checkTodayLog(false)
                }
            }
        }
    }, [logs])

    const showTodayLog = () => {
        if (addedToday) {
            return (
                <TodayMood mood={mood} feels={feels} sleepTime={sleepTime}/>)
        } else {
            return <MyButton formType="new log" onClick={showLogAdd}/>
        }
    }

    return (
        <div className={styles.main_content}>
            <Title myUserName={myUserName}/>
            {showTodayLog()}
            <div className={styles.previous_date}>
                <Average
                    averageMood={averageMood}
                    averageSleepTime={averageSleepTime}
                    prevAverageMood={prevAverageMood}
                    prevAverageSleepTime={prevAverageSleepTime}/>
                <Statistics logs={logs}/>
            </div>
        </div>

    )
}

export default MainContent;