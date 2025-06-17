import styles from "./AverageMood.module.css"
import veryHappyIcon from "../../../assets/icon-very-sad-white.svg";
import happyIcon from "../../../assets/icon-happy-white.svg";
import neutralIcon from "../../../assets/icon-neutral-white.svg";
import sadIcon from "../../../assets/icon-sad-white.svg";
import verySad from "../../../assets/icon-very-sad-white.svg";
import increaseIcon from "../../../assets/icon-trend-increase.svg"
import decreaseIcon from "../../../assets/icon-trend-decrease.svg"
import equalIcon from "../../../assets/icon-trend-same.svg"
import {ReactSVG} from "react-svg";

function AverageMood({averageMood, prevAverageMood}) {

    const iconSwitch = () => {
        switch (averageMood) {
            case 2:
                return <ReactSVG src={veryHappyIcon} className={styles.feeling_icon_svg} alt="Very Happy color icon"/>
            case 1:
                return <ReactSVG src={happyIcon} className={styles.feeling_icon_svg} alt="Happy color icon"/>
            case 0:
                return <ReactSVG src={neutralIcon} className={styles.feeling_icon_svg} alt="Neutral color icon"/>
            case -1:
                return <ReactSVG src={sadIcon} className={styles.feeling_icon_svg} alt="Sad color icon"/>
            case -2:
                return <ReactSVG src={verySad} className={styles.feeling_icon_svg} alt="Very Sad color icon"/>
        }
    }

    const feelSwitch = () => {
        switch (averageMood) {
            case 2:
                return <p className={styles.card_header_text}>Very Happy</p>
            case 1:
                return <p className={styles.card_header_text}>Happy</p>
            case 0:
                return <p className={styles.card_header_text}>Neutral</p>
            case -1:
                return <p className={styles.card_header_text}>Sad</p>
            case -2:
                return <p className={styles.card_header_text}>Very Sad</p>
        }
    }

    const feelIconChange = () => {
        if (averageMood > prevAverageMood) {
            return <ReactSVG src={increaseIcon} alt="increase trends icon" className={styles.card_body_icon_svg}/>
        } else if (averageMood === prevAverageMood) {
            return <ReactSVG src={equalIcon} alt="equal trends icon" className={styles.card_body_icon_svg}/>
        } else if (averageMood < prevAverageMood) {
            return <ReactSVG src={decreaseIcon} alt="decrease trends icon" className={styles.card_body_icon_svg}/>
        } else {
            return <div>lack of data</div>
        }

    }

    const feelTextChange = () => {
        if (averageMood > prevAverageMood) {
            return <p className={styles.card_body_text}>Increase from the previous 5 check-ins</p>
        } else if (averageMood === prevAverageMood) {
            return <p className={styles.card_body_text}>Same as the previous 5 check-ins</p>
        } else if (averageMood < prevAverageMood) {
            return <p className={styles.card_body_text}>Decrease from the previous 5 check-ins</p>
        } else {
            return <p className={styles.card_body_text}>lack of data</p>
        }

    }

    return (
        <div className={styles.average_mood}>
            <div className={styles.header}>
                <p className={styles.header_text_main}>Average Mood</p>
                <p className={styles.header_text_ext}>(Last 5 check-ins)</p>
            </div>
            <div className={styles.card}>
                <div className={styles.card_header}>
                    {iconSwitch()}
                    {feelSwitch()}
                </div>
                <div className={styles.card_body}>
                    {feelIconChange()}
                    {feelTextChange()}
                </div>
            </div>
        </div>
    )
}

export default AverageMood;