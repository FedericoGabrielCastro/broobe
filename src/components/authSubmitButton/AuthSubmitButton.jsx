import styles from "./AuthSubmitButton.module.css";
import { motion } from "framer-motion";

const AuthSubmitButton = ({ textButton }) => {
    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            type="submit"
            className={styles.submitAuthButton}
        >
            {textButton}
        </motion.button>
    );
};

export default AuthSubmitButton;
