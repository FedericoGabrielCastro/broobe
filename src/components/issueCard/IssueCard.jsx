import styles from './IssueCardStyle.module.css'
import { RiDeleteBin2Line } from "react-icons/ri"
import { BiEdit } from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux'
import { openDeleteIssueModalAction } from '../../redux/actions/deleteIssueAction'
import { useNavigate } from 'react-router-dom'

const IssueCard = ({name, description, id}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDeleteIssue = (id) => {
        dispatch(openDeleteIssueModalAction(id))
    }

    const handleEditIssue = (id) => {
        navigate(`/editIssue/${id}`)
    }

    return (
        <div className={styles.issueBox}>   
            <h3>{name}</h3>
            <div className={styles.description}>
                <p>{description}</p>
            </div>
            <div className={styles.optionsIssue}>
                <BiEdit onClick={() => handleEditIssue(id)}/>
                <RiDeleteBin2Line onClick={() => handleDeleteIssue(id)}/>
            </div>
        </div>
    )
}

export default IssueCard