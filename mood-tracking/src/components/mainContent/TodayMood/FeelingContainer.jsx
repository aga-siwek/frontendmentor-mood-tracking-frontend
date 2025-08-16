import styles from "./FeelingContainer.module.css"
import quote from "../../../assets/icon-quote.svg"
import {ReactSVG} from "react-svg";
import veryHappyIcon from "../../../assets/icon-very-happy-color.svg"
import happyIcon from "../../../assets/icon-happy-color.svg"
import neutralIcon from "../../../assets/icon-neutral-color.svg"
import sadIcon from "../../../assets/icon-sad-color.svg"
import verySad from "../../../assets/icon-very-sad-color.svg"
import QuoteContainer from "./QuoteContainer.jsx";

function FeelingContainer({mood, feels}) {
    const iconSwitch = () => {
        switch (mood) {
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
        switch (mood) {
            case 2:
                return "Very Happy"
            case 1:
                return "Happy"
            case 0:
                return "Neutral"
            case -1:
                return "Sad"
            case -2:
                return "Very Sad"
        }
    }

    return (
        <div className={styles.feeling_container}>
            <div className={styles.feeling_content}>
                <div className={styles.feeling_header}>
                    <div className={styles.feeling_header_top}>I’m feeling</div>
                    <div className={styles.feeling_header_bottom}>{feelSwitch()}</div>
                </div>
                <div className={styles.feeling_icon}> {iconSwitch()}
                </div>
                <div className={styles.feeling_quote}>
                    <div className={styles.quote_icon}>
                        <ReactSVG src={quote} className={styles.quote_icon_svg}></ReactSVG>
                    </div>
                    <QuoteContainer mood={mood} feels={feels}/>
                </div>
            </div>
        </div>
    )
}

export default FeelingContainer;