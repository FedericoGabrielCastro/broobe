import AuthCustomInput from "../../components/authCustonInput/AuthCustomInput"
import styles from "./LoginViewStyle.module.css"
import { Link } from "react-router-dom"
import { MdOutlineEmail} from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import AuthSubmitButton from "../../components/authSubmitButton/AuthSubmitButton"
import { useFormik } from "formik"
import { LoginSchema } from "../../utils/yupValidations/loginSchema"
import Loading from "../../components/loading/Loading"
import { useDispatch, useSelector } from "react-redux"
import { postLoginUserAction } from "../../redux/actions/postLoginUserAction"
import { motion } from "framer-motion"

const LoginView = () => {

    const dispatch = useDispatch()
    const loading = useSelector(store => store.postLoginUserReducer)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            dispatch(postLoginUserAction({
                email: values.email,
                password: values.password
            }))
        }
    })

    const loginInputsData = [
        {name: "email", type:"text", placeHolder: "Email", icon: <MdOutlineEmail />},
        {name: "password", type:"text", placeHolder: "Contraseña" ,icon: <RiLockPasswordLine />},
    ]

    return (
      <>
        <h3>Inicia session</h3>
        <motion.span initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={styles.textPresentation}> ¡Creamos soluciones efectivas y a medida de las necesidades de tu negocio! </motion.span>
        <motion.form className={styles.loginForm} onSubmit={formik.handleSubmit} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} >
            {
                loginInputsData.map((input, index) => {
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
                    )
                })
            }
            {
                loading ? <Loading /> :
                <>
                    <p><Link to="/auth/register">¿No tenes cuenta? Registrate </Link></p>
                    <AuthSubmitButton textButton="Iniciar session"/>
                </>
            }
        </motion.form>
      </>
    )
}

export default LoginView