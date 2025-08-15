import styles from "./NewMood.module.css"
import {useFormik} from 'formik';
import * as Yup from "yup";
import MyButton from "../common/Button/MyButton.jsx";
import {ReactSVG} from "react-svg";
import veryHappyIcon from "../../assets/icon-very-happy-color.svg"
import HappyIcon from "../../assets/icon-happy-color.svg"
import neutralIcon from "../../assets/icon-neutral-color.svg"
import sadIcon from "../../assets/icon-sad-color.svg"
import verySadIcon from "../../assets/icon-very-sad-color.svg"


function NewMood({mood, handleMoodAdd, changeProcessLevel}) {

    const validationSchema = Yup.object({
        mood: Yup.string().required("Mood is required"),
    })

    const handleFormSubmit = (values) => {
        console.log("add new mood")
        handleMoodAdd(Number(values.mood))
        changeProcessLevel(2)
    }

    const formik = useFormik({
            initialValues: {
                mood,
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
                <p>How was your mood today?</p>
            </div>

            <div className={styles.questionnaire}>
                <div className={formik.values.mood==="veryHappy"
                    ?`${styles.form_input_element} ${styles.checked}`
                    :`${styles.form_input_element}`}>
                    <div className={styles.input_name}>
                        <input
                            type="radio"
                            id="veryHappy"
                            name="mood"
                            value="2"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={styles.form_input}/>
                        {formik.errors.mood && formik.touched.mood &&
                            <div className={styles.form_input_error}>{formik.errors.mood}</div>}
                        <label htmlFor="veryHappy" className={styles.form_input_radio_text}>
                            <div className={styles.form_input_radio}></div>
                            <div className={styles.form_input_text}>Very Happy</div>

                        </label>
                    </div>
                    <div><ReactSVG className={styles.moodIcon} src={veryHappyIcon} alt="very happy icon"/></div>
                </div>
                <div className={formik.values.mood==="happy"
                    ?`${styles.form_input_element} ${styles.checked}`
                    :`${styles.form_input_element}`}>
                    <div className={styles.input_name}>
                        <input
                            type="radio"
                            id="happy"
                            name="mood"
                            value="1"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={styles.form_input}/>
                        {formik.errors.mood && formik.touched.mood &&
                            <div className={styles.form_input_error}>{formik.errors.mood}</div>}
                        <label htmlFor="happy" className={styles.form_input_radio_text}>
                            <div className={styles.form_input_radio}></div>
                            <div className={styles.form_input_text}>Happy</div>
                        </label>
                    </div>
                    <ReactSVG className={styles.moodIcon} src={HappyIcon} alt="Happy icon"/>
                </div>

                <div className={formik.values.mood==="neutral"
                    ?`${styles.form_input_element} ${styles.checked}`
                    :`${styles.form_input_element}`}>
                    <div className={styles.input_name}>

                        <input
                            type="radio"
                            id="neutral"
                            name="mood"
                            value="0"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={styles.form_input}/>
                        {formik.errors.mood && formik.touched.mood &&
                            <div className={styles.form_input_error}>{formik.errors.mood}</div>}
                        <label htmlFor="neutral" className={styles.form_input_radio_text}>
                            <div className={styles.form_input_radio}></div>
                            <div className={styles.form_input_text}>Neutral</div>
                        </label>
                    </div>
                    <ReactSVG className={styles.moodIcon} src={neutralIcon} alt="neutral icon"/>
                </div>
                <div className={formik.values.mood==="sad"
                    ?`${styles.form_input_element} ${styles.checked}`
                    :`${styles.form_input_element}`}>
                    <div className={styles.input_name}>
                        <input
                            type="radio"
                            id="sad"
                            name="mood"
                            value="-1"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={styles.form_input}/>
                        {formik.errors.mood && formik.touched.mood &&
                            <div className={styles.form_input_error}>{formik.errors.mood}</div>}
                        <label htmlFor="sad" className={styles.form_input_radio_text}>
                            <div className={styles.form_input_radio}></div>
                            <div className={styles.form_input_text}>Sad</div>

                        </label>
                    </div>
                    <ReactSVG className={styles.moodIcon} src={sadIcon} alt="sad icon"/>
                </div>

                <div className={formik.values.mood==="verySad"
                    ?`${styles.form_input_element} ${styles.checked}`
                    :`${styles.form_input_element}`}>
                    <div className={styles.input_name}>
                        <input
                            type="radio"
                            id="verySad"
                            name="mood"
                            value="-2"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={styles.form_input}/>
                        {formik.errors.mood && formik.touched.mood &&
                            <div className={styles.form_input_error}>{formik.errors.mood}</div>}
                        <label htmlFor="verySad" className={styles.form_input_radio_text}>
                            <div className={styles.form_input_radio}></div>
                            <div className={styles.form_input_text}>Very Sad</div>
                        </label>
                    </div>
                    <ReactSVG className={styles.moodIcon} src={verySadIcon} alt="very sad icon"/>

                </div>
                <MyButton formType="continue"/>
            </div>
        </form>)
}

export default NewMood;