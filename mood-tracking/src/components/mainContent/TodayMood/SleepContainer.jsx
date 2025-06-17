import styles from "./SleepContainer.module.css"
import {ReactSVG} from "react-svg";
import sleepIcon from "../../../assets/icon-sleep.svg"

function SleepContainer ({sleepTime}) {
    return (
        <div className={styles.sleep_container}>
            <div className={styles.sleep_header}>
                <ReactSVG src={sleepIcon} alt="sleep icon" className={styles.sleep_header_icon}></ReactSVG>
                <p className={styles.sleep_header_text}>Sleep</p>
            </div>
            <div className={styles.sleep_time}>{sleepTime}</div>


        </div>
    )
}
export default SleepContainer;