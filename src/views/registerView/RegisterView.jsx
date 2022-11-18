import AuthCustomInput from "../../components/authCustonInput/AuthCustomInput";
import styles from "./RegisterViewStyle.module.css";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiUserPlus } from "react-icons/bi";
import AuthSubmitButton from "../../components/authSubmitButton/AuthSubmitButton";
import { useFormik } from "formik";
import { RegisterSchema } from "../../utils/yupValidations/registerSchema";
import { useDispatch, useSelector } from "react-redux";
import { postRegisterUserAction } from "../../redux/actions/postRegisterUserAction";
import Loading from "../../components/loading/Loading";
import { motion } from "framer-motion";

const RegisterView = () => {
    const dispatch = useDispatch();
    const loading = useSelector((store) => store.postRegisterUserReducer);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: RegisterSchema,
        onSubmit: (values) => {
            console.log("register: ", values);
            dispatch(
                postRegisterUserAction({
                    name: values.name,
                    email: values.email,
                    password: values.password,
                })
            );
        },
    });

    const registerInputsData = [
        {
            name: "name",
            type: "text",
            placeHolder: "Nombre",
            icon: <BiUserPlus />,
        },
        {
            name: "email",
            type: "text",
            placeHolder: "Email",
            icon: <MdOutlineEmail />,
        },
        {
            name: "password",
            type: "text",
            placeHolder: "Contraseña",
            icon: <RiLockPasswordLine />,
        },
    ];

    return (
        <>
            <h3>Registrarse</h3>
            <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.registerForm}
                onSubmit={formik.handleSubmit}
            >
                {registerInputsData.map((input, index) => {
                    return (
                        <div key={index}>
                            <AuthCustomInput
                                customIcon={input.icon}
                                id={input.name}
                                name={input.name}
                                type={input.type}
                                value={formik.values + `.${input.name}`}
                                onChange={formik.handleChange}
                                placeholder={input.placeHolder}
                            />
                        </div>
                    );
                })}
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        <p>
                            <Link to="/auth/login">
                                ¿Ya sos usuario? Ingresa{" "}
                            </Link>
                        </p>
                        <AuthSubmitButton textButton="Registrate" />
                    </>
                )}
            </motion.form>
        </>
    );
};

export default RegisterView;
