import { Outlet } from "react-router-dom";
import MenuNavbar from "../../components/menuNavbar/MenuNavbar";
import styles from "./IssuesPageStyle.module.css";
import { motion } from "framer-motion";

const IssuesPage = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.issuesPage}
        >
            <MenuNavbar />
            <Outlet />
        </motion.section>
    );
};

export default IssuesPage;
