import styles from "./Avatar.module.css"
import placeholder from "../../../assets/avatar-placeholder.svg"
import {ReactSVG} from "react-svg";

function Avatar() {
    return (
        <div className={styles.avatar}>
            <ReactSVG src={placeholder} alt="Avatar" className={styles.avatar}/>
        </div>
    )
}

export default Avatar;