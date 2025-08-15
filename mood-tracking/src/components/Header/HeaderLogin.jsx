import styles from "./HeaderLogin.module.css"
import Logo from "../common/Logo/Logo.jsx"
import Avatar from "../common/Avatar/Avatar.jsx";
import MoreInfo from "../Header/MoreInfo.jsx"
import OptionWindow from "./OptionWindow.jsx";
function HeaderLogin ({handleLogout, handleSettingNavigate}) {
    return (
        <div className={styles.header}>
        <div className={styles.header_logo}>
            <Logo />
        </div>
            <div className={styles.header_avatar}>
                <Avatar />
                <MoreInfo />
                <div className={styles.option_window}>
                    <OptionWindow
                        handleLogout={handleLogout}
                        handleSettingNavigate={handleSettingNavigate} />
                </div>
            </div>
        </div>
    )
}
export default HeaderLogin;