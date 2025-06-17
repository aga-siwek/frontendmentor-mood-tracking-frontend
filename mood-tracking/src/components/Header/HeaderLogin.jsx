import styles from "./HeaderLogin.module.css"
import Logo from "../common/Logo/Logo.jsx"
import Avatar from "../common/Avatar/Avatar.jsx";
function HeaderLogin () {
    return (
        <div className={styles.header}>
        <div className={styles.header_logo}>
            <Logo />
        </div>
            <div className={styles.header_avatar}>
            <Avatar />
            </div>
        </div>
    )
}
export default HeaderLogin;