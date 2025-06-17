import styles from "./Personalize.module.css"
import UserNameForm from "../common/Form/UserNameForm.jsx";

function Personalize({name, handleUserNameChange}) {
    return (
        <div className={styles.personalize}>
            <div className={styles.header}>
                <p className={styles.header_top}>Update your profile</p>
                <p className={styles.header_body}>Personalize your account with your name and photo.</p>
            </div>
            <UserNameForm name={name} handleUserNameChange={handleUserNameChange}/>
        </div>
    )
}

export default Personalize;