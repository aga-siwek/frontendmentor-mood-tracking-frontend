import styles from "./NewDescription.module.css"
import MyButton from "../common/Button/MyButton.jsx"
import {useFormik} from "formik";
import * as Yup from "yup";
import {useState} from "react";

function NewDescription({description, handleDescriptionAdd, changeProcessLevel}) {
    const [counter, setCounter] = useState(0);

    const MAX_LENGTH = 150;

    const validationSchema = Yup.object({
        description: Yup.string()
            .max(MAX_LENGTH, `Max ${MAX_LENGTH} characters`)
            .required("Description is required"),
    })

    const handleFormSubmit = (values) => {
        console.log("add new description")
        handleDescriptionAdd(values.description)
        changeProcessLevel(4)
    }

    const formik = useFormik({
            initialValues: {
                description,
            },
            validationSchema,
            onSubmit: values => {
                handleFormSubmit(values);
            },
        }
    )


    return (
        <form className={styles.new_container} onSubmit={formik.handleSubmit}>
                <div className={styles.new_title}>
                    <p>Write about your day...</p>
                </div>
                <div className={styles.questionnaire}>
                    <div className={styles.questionnaire_textarea}>
                        <textarea
                            name="description"
                            placeholder="Today, I felt…"
                            rows="4"
                            cols="50"
                            onChange={(e) => {
                                formik.handleChange(e);
                                setCounter((e.target.value).length)
                            }}
                            onBlur={formik.handleBlur}
                            className={styles.form_input}/>
                        <div className={styles.questionnaire_textarea_counter}>{`${counter}/150`}</div>
                        {formik.errors.description && formik.touched.description &&
                            <div className={styles.form_input_error}>{formik.errors.description}</div>}
                    </div>
                    <MyButton formType="continue"/>
                </div>
        </form>

    )
}

export default NewDescription