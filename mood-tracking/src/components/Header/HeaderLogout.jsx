import styles from "./HeaderLogout.module.css"
import Logo from "../common/Logo/Logo.jsx"
import Avatar from "../common/Avatar/Avatar.jsx";
function HeaderLogout () {
    return (
        <div className={styles.header}>
            <Logo />
        </div>
    )
}
export default HeaderLogout;