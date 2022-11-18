import { useDispatch } from 'react-redux'
import styles from './CreateIssueViewStyle.module.css'
import { useFormik } from "formik"
import { MdOutlineEmail} from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import { CreateIssueSchema } from '../../utils/yupValidations/createIssueSchema'
import { createIssueAction } from '../../redux/actions/createIssueAction'
import UUID from "uuid-int"
import { motion } from "framer-motion"

const CreateIssueView = () => {

    const dispatch = useDispatch()

    const generator = UUID(0)
    const uuid = generator.uuid()

    const formik = useFormik({
        initialValues: {
            title: "",
            description: ""
        },
        validationSchema: CreateIssueSchema,
        onSubmit: values => {
            dispatch(createIssueAction({
                id: uuid,
                title: values.title,
                description: values.description,
            }))
        }
    })

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={styles.createPage}>
            <h1> Crear una nueva issue</h1>
            <form className={styles.createForm} onSubmit={formik.handleSubmit}>
                <input 
                    className={styles.createinput} 
                    id="title"
                    name="title"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    placeholder="Titulo"
                    />
                <textarea 
                    id="description"
                    name="description"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    placeholder="Descripcion" 
                    className={styles.createinputArea} />
                <button type='submit' className={styles.submitForm}>Crear issue</button>
            </form>
        </motion.div>
    )
}

export default CreateIssueView