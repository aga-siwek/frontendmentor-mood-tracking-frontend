import styles from "./SleepContainer.module.css"
import {ReactSVG} from "react-svg";
import sleepIcon from "../../../assets/icon-sleep.svg"

function SleepContainer ({sleepTime}) {
    const sleepTimeSwitch = () => {
        switch (sleepTime) {
            case 0:
                return "0-2 hours"
            case 1:
                return "3-4 hours"
            case 2:
                return "5-6 hours"
            case 3:
                return "7-8 hours"
            case 4:
                return "9+ hours"
        }
    }
    return (
        <div className={styles.sleep_container}>
            <div className={styles.sleep_header}>
                <ReactSVG src={sleepIcon} alt="sleep icon" className={styles.sleep_header_icon}></ReactSVG>
                <p className={styles.sleep_header_text}>Sleep</p>
            </div>
            <div className={styles.sleep_time}>{sleepTimeSwitch()}</div>


        </div>
    )
}
export default SleepContainer;