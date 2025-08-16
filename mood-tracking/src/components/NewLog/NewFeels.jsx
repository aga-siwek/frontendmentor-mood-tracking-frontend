import styles from "./NewFeels.module.css"
import * as Yup from "yup";
import {useFormik} from 'formik';
import MyButton from "../common/Button/MyButton.jsx";

function NewFeels({feelsList, feels, handleFeelsAdd, changeProcessLevel}) {
    console.log(feelsList)


    const validationSchema = Yup.object({
        feels: Yup.array()
            .min(1, "Select min 1 hobby")
            .required("This field is required"),
    })

    const handleFormSubmit = (values) => {
        console.log("add new feels")
        handleFeelsAdd(values.feels)
        changeProcessLevel(3)
    }

    const formik = useFormik({
            initialValues: {
                feels: [],
            },
            validationSchema,
            onSubmit: values => {
                handleFormSubmit(values);
            },
        }
    )

    return (
        <div className={styles.new_container}>
            <div className={styles.new_title}>
                <p className={styles.title_text}>How did you feel?</p>
                <p className={styles.title_body}>Select up to three tags:</p>
            </div>

            <form className={styles.questionnaire} onSubmit={formik.handleSubmit}>
                <div className={styles.form_inputs}>
                    {feelsList.map((feel) => (
                        <div className={styles.form_input_element} key={feel}>
                            <input
                                type="checkbox"
                                id={feel}
                                name="feels"
                                value={feel}
                                onBlur={formik.handleBlur}
                                className={styles.form_input}
                                onChange={(e) => {
                                    const {checked, value} = e.target;
                                    if (checked) {
                                        formik.setFieldValue("feels", [
                                            ...formik.values.feels,
                                            value,
                                        ]);
                                    } else {
                                        formik.setFieldValue(
                                            "feels",
                                            formik.values.feels.filter((v) => v !== value)
                                        );
                                    }
                                }}
                                checked={formik.values.feels.includes(feel)}
                            />
                            <label htmlFor={feel} className={styles.form_input_label}>
                                <div className={styles.form_input_label_checkbox}>&#10004;</div>
                                <div className={styles.form_input_label_text}>{feel}</div>
                            </label>
                        </div>
                    ))}
                </div>
                {formik.errors.feels && formik.touched.feels &&
                    <div className={styles.form_input_error}>{formik.errors.feels}</div>}
                <MyButton formType="continue"/>
            </form>

        </div>)
}

export default NewFeels;