import styles from "./UserNameForm.module.css"
import MyButton from "../Button/MyButton.jsx";
import {useFormik} from 'formik';
import * as Yup from "yup";

function UserNameForm({name, handleUserNameChange}) {
    const validationSchema = Yup.object({
        name: Yup.string(),
    })

    const handleFormSubmit = (values) => {
        console.log("personalize form");
        console.log(values)
        handleUserNameChange(values)
    }

    const formik = useFormik({
            initialValues: {
                name,
            },
            validationSchema,
            onSubmit: values => {
                handleFormSubmit(values);
            },
        }
    )

    return (
        <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.form_input}>
                <div className={styles.form_input_element}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={styles.form_input_text}/>
                </div>
            </div>
            <MyButton formType="personalize"/>
        </form>
    )
}

export default UserNameForm;