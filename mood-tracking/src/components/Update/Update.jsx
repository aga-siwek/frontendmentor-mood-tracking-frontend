import styles from "./Update.module.css"
import UserNameForm from "../common/Form/UserNameForm.jsx";

function Update({name, handleUserNameChange}) {
    return (
        <div className={styles.personalize}>
            <div className={styles.header}>
                <p className={styles.header_top}>Personalize your experience</p>
                <p className={styles.header_body}>Add your name and a profile picture to make Mood yours.</p>
            </div>
            <UserNameForm name={name} handleUserNameChange={handleUserNameChange}/>
        </div>
    )
}

export default Update;