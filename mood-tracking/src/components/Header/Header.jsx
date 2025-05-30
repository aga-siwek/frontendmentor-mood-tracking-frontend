import styles from "./Header.module.css"
import Logo from "../common/Logo/Logo.jsx"
function Header () {
    return (
        <div className={styles.header}>
            <Logo />


        </div>
    )
}
export default Header;