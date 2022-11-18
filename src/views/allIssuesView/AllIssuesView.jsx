import IssueCard from "../../components/issueCard/IssueCard";
import styles from "./AllIssuesViewStyle.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIssuesAction } from "../../redux/actions/getIssuesAction";
import Loading from "../../components/loading/Loading";
import { GiUnbalanced } from "react-icons/gi";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import {
    closeDeleteIssueModalAction,
    deleteIssueAction,
} from "../../redux/actions/deleteIssueAction";
import { motion } from "framer-motion";

const AllIssuesView = () => {
    const dispatch = useDispatch();
    const issues = useSelector((store) => store.getIssuesReducer.issues);
    const loading = useSelector((store) => store.getIssuesReducer.loading);
    const deleteModal = useSelector((store) => store.deleteIssueReducer.modal);
    const deleteId = useSelector((store) => store.deleteIssueReducer.id);

    const handleCloseModal = () => {
        dispatch(closeDeleteIssueModalAction());
    };

    const handleConfirmDelete = () => {
        console.log(deleteId);
        dispatch(
            deleteIssueAction({
                id: deleteId,
            })
        );
    };

    useEffect(() => {
        dispatch(getIssuesAction());
    }, [dispatch]);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.allIssuesView}
            >
                <h1> Todas nuestras issues</h1>
                <Link to="/createIssue">+ Crear nueva issue + </Link>
                {loading ? (
                    <Loading />
                ) : (
                    <div>
                        <div className={styles.issuesContent}>
                            {issues.length === 0 ? (
                                <div className={styles.noIssues}>
                                    <p>Nada por hacer...</p>
                                    <GiUnbalanced />
                                </div>
                            ) : (
                                issues.map((issue) => {
                                    return (
                                        <div key={issue.id}>
                                            <IssueCard
                                                name={issue.name}
                                                description={issue.description}
                                                id={issue.id}
                                            />
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                )}
            </motion.div>
            {deleteModal ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={styles.modalLogout}
                >
                    <div className={styles.cardLogout}>
                        <h2>¿Borrar Issue?</h2>
                        <div className={styles.buttonModal}>
                            <button onClick={handleConfirmDelete}>
                                <AiOutlineCheck />
                            </button>
                            <button onClick={handleCloseModal}>
                                {" "}
                                <GrClose />
                            </button>
                        </div>
                    </div>
                </motion.div>
            ) : null}
        </>
    );
};

export default AllIssuesView;
