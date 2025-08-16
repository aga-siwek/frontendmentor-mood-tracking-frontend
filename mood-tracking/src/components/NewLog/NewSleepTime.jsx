import styles from "./NewSleepTime.module.css"
import MyButton from "../common/Button/MyButton.jsx";
import {useFormik} from 'formik';
import * as Yup from "yup";

function NewSleepTime({sleepTime, handleSleepAdd, changeProcessLevel}) {
    const validationSchema = Yup.object({
        sleepTime: Yup.string().required("Time of sleep is required"),
    })

    const handleFormSubmit = (values) => {
        console.log("add new sleep time")
        handleSleepAdd(Number(values.sleepTime))
    }

    const formik = useFormik({
            initialValues: {
                sleepTime,
            },
            validationSchema,
            onSubmit: values => {
                handleFormSubmit(values);
                changeProcessLevel(0)
            },
        }
    )

    return (
        <form className={styles.new_container} onSubmit={formik.handleSubmit}>
            <div className={styles.new_title}>
                <p>How many hours did you sleep last night?</p>
            </div>

            <div className={styles.questionnaire}>
                <div className={formik.values.sleepTime === "4"
                    ? `${styles.form_input_element} ${styles.checked}`
                    : `${styles.form_input_element}`}>
                    <div className={styles.input_name}>
                        <input
                            type="radio"
                            id="9+hours"
                            name="sleepTime"
                            value="4"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={styles.form_input}/>
                        {formik.errors.sleepTime && formik.touched.sleepTime &&
                            <div className={styles.form_input_error}>{formik.errors.sleepTime}</div>}
                        <label htmlFor="9+hours" className={styles.form_input_radio_text}>
                            <div className={styles.form_input_radio}></div>
                            <div className={styles.form_input_text}>9+ hours</div>

                        </label>
                    </div>
                </div>
                <div className={formik.values.sleepTime === "3"
                    ? `${styles.form_input_element} ${styles.checked}`
                    : `${styles.form_input_element}`}>
                    <div className={styles.input_name}>
                        <input
                            type="radio"
                            id="8hours"
                            name="sleepTime"
                            value="3"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={styles.form_input}/>
                        {formik.errors.sleepTime && formik.touched.sleepTime &&
                            <div className={styles.form_input_error}>{formik.errors.sleepTime}</div>}
                        <label htmlFor="8hours" className={styles.form_input_radio_text}>
                            <div className={styles.form_input_radio}></div>
                            <div className={styles.form_input_text}>7-8 hours</div>
                        </label>
                    </div>
                </div>

                <div className={formik.values.sleepTime === "2"
                    ? `${styles.form_input_element} ${styles.checked}`
                    : `${styles.form_input_element}`}>
                    <div className={styles.input_name}>

                        <input
                            type="radio"
                            id="6hours"
                            name="sleepTime"
                            value="2"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={styles.form_input}/>
                        {formik.errors.sleepTime && formik.touched.sleepTime &&
                            <div className={styles.form_input_error}>{formik.errors.sleepTime}</div>}
                        <label htmlFor="6hours" className={styles.form_input_radio_text}>
                            <div className={styles.form_input_radio}></div>
                            <div className={styles.form_input_text}>5-6 hours</div>
                        </label>
                    </div>
                </div>
                <div className={formik.values.sleepTime === "1"
                    ? `${styles.form_input_element} ${styles.checked}`
                    : `${styles.form_input_element}`}>
                    <div className={styles.input_name}>
                        <input
                            type="radio"
                            id="4hours"
                            name="sleepTime"
                            value="1"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={styles.form_input}/>
                        {formik.errors.sleepTime && formik.touched.sleepTime &&
                            <div className={styles.form_input_error}>{formik.errors.sleepTime}</div>}
                        <label htmlFor="4hours" className={styles.form_input_radio_text}>
                            <div className={styles.form_input_radio}></div>
                            <div className={styles.form_input_text}>3-4 hours</div>

                        </label>
                    </div>
                </div>

                <div className={formik.values.sleepTime === "0"
                    ? `${styles.form_input_element} ${styles.checked}`
                    : `${styles.form_input_element}`}>
                    <div className={styles.input_name}>
                        <input
                            type="radio"
                            id="2hours"
                            name="sleepTime"
                            value="0"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={styles.form_input}/>
                        {formik.errors.sleepTime && formik.touched.sleepTime &&
                            <div className={styles.form_input_error}>{formik.errors.sleepTime}</div>}
                        <label htmlFor="2hours" className={styles.form_input_radio_text}>
                            <div className={styles.form_input_radio}></div>
                            <div className={styles.form_input_text}>0-2 hours</div>
                        </label>
                    </div>
                </div>
                <MyButton/>
            </div>
        </form>)
}

export default NewSleepTime;