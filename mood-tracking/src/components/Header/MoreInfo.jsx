import styles from "./MoreInfo.module.css"
import arrow from "../../assets/icon-dropdown-arrow.svg"
import {ReactSVG} from "react-svg";
function MoreInfo () {
    return (
        <div className={styles.more_info}>
            <ReactSVG src={arrow} alt="arrow" />


        </div>
    )
}
export default MoreInfo;