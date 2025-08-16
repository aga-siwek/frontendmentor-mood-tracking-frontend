import styles from "./NewLog.module.css"

import NewFeels from "./NewFeels.jsx";
import NewDescription from "./NewDescription.jsx";
import NewMood from "./NewMood.jsx";
import NewSleepTime from "./NewSleepTime.jsx";
import Process from "./Process.jsx";
import {useState} from "react";

function NewLog({
                    mood,
                    feels,
                    sleepTime,
                    description,
                    handleMoodAdd,
                    handleFeelsAdd,
                    handleSleepAdd,
                    handleDescriptionAdd,
                    hideLogAdd,
                    feelsList
                }) {
    const [processLevel, setProcessLevel] = useState(1);

    const changeProcessLevel = (value) => {
        setProcessLevel(value);
    }
    const showQuestionnaire = () => {
        if (processLevel === 1) {
            return <NewMood
                mood={mood}
                handleMoodAdd={handleMoodAdd}
                changeProcessLevel={changeProcessLevel}/>
        }
        if (processLevel === 2) {
            return <NewFeels
                feelsList={feelsList}
                feels={{feels}}
                handleFeelsAdd={handleFeelsAdd}
                changeProcessLevel={changeProcessLevel}/>
        }
        if (processLevel === 3) {
            return <NewDescription
                description={description}
                handleDescriptionAdd={handleDescriptionAdd}
                changeProcessLevel={changeProcessLevel}/>
        }
        if (processLevel === 4) {
            return <NewSleepTime
                sleepTime={sleepTime}
                handleSleepAdd={handleSleepAdd}
                changeProcessLevel={changeProcessLevel}/>
        }
    }
    return (
        <div className={styles.new_log_container}>
            <div className={styles.close}>x</div>
            <div className={styles.content}>
                <div className={styles.main_title}>Log your mood</div>
                <Process
                    processLevel={processLevel}/>
                <div className={styles.new_log}>
                    <div className={styles.new_log_questionnaire}>
                        {showQuestionnaire()}
                    </div>
                </div>
            </div>
        </div>)
}

export default NewLog;