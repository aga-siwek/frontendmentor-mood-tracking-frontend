import styles from "./ChartColumn.module.css"
import veryHappyIcon from "../../../assets/icon-very-happy-white.svg"
import happyIcon from "../../../assets/icon-happy-white.svg";
import neutralIcon from "../../../assets/icon-neutral-white.svg";
import sadIcon from "../../../assets/icon-sad-white.svg";
import verySadIcon from "../../../assets/icon-very-sad-white.svg";
import {ReactSVG} from "react-svg";
import ColumnInfo from "./ColumnInfo.jsx";

function ChartColumn({
                         createdAtYear,
                         createdAtMonth,
                         createdAtDay,
                         description,
                         mood,
                         feels,
                         sleepTime
                     }) {
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]

    let moodIcon
    let moodClass
    let sleepClass

    const showMonth = () => {
        return (months[createdAtMonth - 1])
    }
    const showDay = () => {
        if (createdAtDay < 10) {
            return ("0" + createdAtDay)
        }
        return createdAtDay
    }

    const showMood = () => {
        switch (mood) {
            case -2:
                moodIcon = verySadIcon;
                moodClass = "very_sad_color";
                break;
            case -1:
                moodIcon = sadIcon;
                moodClass = "sad_color";
                break;
            case 0:
                moodIcon = neutralIcon;
                moodClass = "neutral_color";
                break;
            case 1:
                moodIcon = happyIcon;
                moodClass = "happy_color";
                break;
            case 2:
                moodIcon = veryHappyIcon;
                moodClass = "very_happy_color";
                break;
        }
    }

    const showSleepTime = () => {
        switch (sleepTime) {
            case 0:
                sleepClass = "column_2h"
                break;
            case 1:
                sleepClass = "column_4h"
                break;
            case 2:
                sleepClass = "column_6h"
                break;
            case 3:
                sleepClass = "column_8h"
                break;
            case 4:
                sleepClass = "column_9h"
                break;
        }
    }

    showMood()
    showSleepTime()
    return (
        <div className={styles.column_container}>
            <div className={`${styles[sleepClass]} ${styles.column}`}>
                <div
                    className={`${styles.column_icon} ${styles[moodClass]} ${styles.column_content} ${styles.column_info_parent}`}>
                    <ReactSVG className={styles.mood_icon} src={moodIcon} alt="mood icon"/>
                    <div className={styles.column_info}><ColumnInfo description={description} mood={mood} feels={feels} sleepTime={sleepTime}  /></div>
                </div>

            </div>
            <div className={styles.chart_label}>
                <div className={styles.chart_label_month}> {showMonth()}</div>
                <div className={styles.chart_label_day}> {showDay()}</div>
            </div>

        </div>
    )
}

export default ChartColumn;