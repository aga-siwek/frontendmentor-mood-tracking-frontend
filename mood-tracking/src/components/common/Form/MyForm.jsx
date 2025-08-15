import styles from "./MyForm.module.css"
import {useFormik} from 'formik';
import MyButton from "../Button/MyButton.jsx"
import * as Yup from "yup";


function MyForm({formType, email="", password="", handleDataChange}) {
    const validationSchema = Yup.object({
        email: Yup.string().email().required("Email is required"),
        password: Yup.string()
            .min(6, "Password should have minimum 6 characters ")
            .required("password must be at least 6 characters"),
    })


    const handleFormSubmit = (values) => {
        if (formType === "login") {
           handleDataChange(values)
        } else if (formType === "sign up") {
            console.log("values from singup")
            console.log(values)
            handleDataChange(values)
            console.log("sign up");
        } else {
            console.log(formType);
            console.log("test");
        }
    }

    const formik = useFormik({
            initialValues: {
                email,
                password,
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
                    <label htmlFor="email">Email adress</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={styles.form_input_text}/>
                    {formik.errors.email && formik.touched.email &&
                        <div className={styles.form_input_error}>{formik.errors.email}</div>}
                </div>
                <div className={styles.form_input_element}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        className={styles.form_input_text}
                        onBlur={formik.handleBlur}/>
                    {formik.errors.password && formik.touched.password &&
                        <div className={styles.form_input_error}>{formik.errors.password}</div>}
                </div>
            </div>
            <MyButton formType={formType}/>
        </form>
    )
}

export default MyForm;