import styles from './EditIssueView.module.css'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editIssueAction } from '../../redux/actions/editIssueAction'
import { motion } from "framer-motion"

const EditIssueView = () => {

    const dispatch = useDispatch()
    let { id } = useParams()

    const formik = useFormik({
        // TODO: get para conseguir la informacion que tenia la tarjeta.
        initialValues: {
            name: "",
            description: ""
        },
        onSubmit: values => {
            dispatch(editIssueAction({
                id: id,
                name: values.name,
                description: values.description
            }))
        }
    })

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={styles.editPage}>
            <h3>Editar issue</h3>
            <form className={styles.editForm} onSubmit={formik.handleSubmit}>
                <div className={styles.subInput}>
                    <input 
                        name="name"
                        id="name"
                        type="text"
                        values={formik.values.name}
                        onChange={formik.handleChange}
                        className={styles.editInput}
                    />
                </div>
                <div className={styles.subInput}>
                    
                    <textarea 
                        name="description"
                        id="description"
                        type="textarea"
                        values={formik.values.description}
                        onChange={formik.handleChange}
                        className={styles.editInputArea}
                    />
                </div>
                <button className={styles.submitForm} type="submit"> Confirmar </button>
            </form>
        </motion.div>
    )
}

export default EditIssueView