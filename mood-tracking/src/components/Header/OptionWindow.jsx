import styles from "./OptionWindow.module.css"
import {ReactSVG} from "react-svg";
import iconSetting from "../../assets/icon-settings.svg"
import iconLogOut from "../../assets/icon-logout.svg"

function OptionWindow({
                          handleLogout,
                          handleSettingNavigate
                      }) {
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");

    return (
        <div className={styles.option_window}>
            <div className={styles.personal_information}>
                <p className={styles.personal_information_name}>{userName}</p>
                <p className={styles.personal_information_email}>{userEmail}</p>
            </div>
            <hr className={styles.line}/>
            <div className={styles.options}>

                <div className={styles.option} onClick={handleSettingNavigate}>
                    <ReactSVG src={iconSetting} alt="setting icon" className={styles.option_icon}/>
                    <p className={styles.option_text}>Setting</p>
                </div>
                <div className={styles.option} onClick={handleLogout}>
                    <ReactSVG src={iconLogOut} alt="logOut icon" className={styles.option_icon}/>
                    <p className={styles.option_text}>LogOut</p>
                </div>
            </div>
        </div>
    )
}

export default OptionWindow;