import styles from "./AverageTime.module.css"
import increaseIcon from "../../../assets/icon-trend-increase-white.svg";
import equalIcon from "../../../assets/icon-trend-same-white.svg";
import decreaseIcon from "../../../assets/icon-trend-decrease-white.svg";
import {ReactSVG} from "react-svg";
import sleepIcon from "../../../assets/icon-sleep-white.svg"

function AverageTime({averageSleepTime, prevAverageSleepTime}) {
    const sleepIconChange = () => {
        if (averageSleepTime > prevAverageSleepTime) {
            return <ReactSVG src={increaseIcon} alt="increase trends icon" className={styles.card_body_icon_svg}/>
        } else if (averageSleepTime === prevAverageSleepTime) {
            return <ReactSVG src={equalIcon} alt="equal trends icon" className={styles.card_body_icon_svg}/>
        } else if (averageSleepTime < prevAverageSleepTime) {
            return <ReactSVG src={decreaseIcon} alt="decrease trends icon" className={styles.card_body_icon_svg}/>
        } else {
            return <ReactSVG src={equalIcon} alt="equal trends icon" className={styles.card_body_icon_svg}/>
        }

    }

    const sleepTextChange = () => {
        if (averageSleepTime > prevAverageSleepTime) {
            return <p className={styles.card_body_text}>Increase from the previous 5 check-ins</p>
        } else if (averageSleepTime === prevAverageSleepTime) {
            return <p className={styles.card_body_text}>Same as the previous 5 check-ins</p>
        } else if (averageSleepTime < prevAverageSleepTime) {
            return <p className={styles.card_body_text}>Decrease from the previous 5 check-ins</p>
        } else {
            return <p className={styles.card_body_text}>lack of data</p>
        }

    }

    const sleepTimeSwitch = () => {
        switch (averageSleepTime) {
            case 0:
                return <p className={styles.card_header_text}>0-2 hours</p>
            case 1:
                return <p className={styles.card_header_text}>3-4 hours</p>
            case 2:
                return <p className={styles.card_header_text}>5-6 hours</p>
            case 3:
                return <p className={styles.card_header_text}>7-8 hours</p>
            case 4:
                return <p className={styles.card_header_text}>9+ hours</p>
        }
    }


    return (
        <div className={styles.average_time}>
            <div className={styles.header}>
                <p className={styles.header_text_main}>Average Time</p>
                <p className={styles.header_text_ext}>(Last 5 check-ins)</p>
            </div>
            <div className={styles.card}>
                <div className={styles.card_header}>
                    <ReactSVG src={sleepIcon} alt="sleep icon" className={styles.sleep_icon_svg}/>
                    {sleepTimeSwitch()}
                </div>
                <div className={styles.card_body}>
                    {sleepIconChange()}
                    {sleepTextChange()}
                </div>

            </div>
        </div>
    )
}

export default AverageTime