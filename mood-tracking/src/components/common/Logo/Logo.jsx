import styles from "./Logo.module.css"
import LogoSvg from "../../../assets/logo.svg"
import {ReactSVG} from "react-svg";
function Logo () {
    return (
        <div className={styles.logo}>
            <ReactSVG src={LogoSvg} alt="Logo" className={styles.logo_svg} />
        </div>
    )
}
export default Logo;