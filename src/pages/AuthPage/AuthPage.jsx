import { Outlet } from "react-router-dom"
import styles from "./AuthPageStyle.module.css"
import broobe from "../../assets/logoBroobe.png"
import {motion } from "framer-motion"

const AuthPage = () => {

    return (
        <motion.section initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={styles.authPage}>
            <div className={styles.authBox}>
            <img src={broobe} alt="logo" className={styles.broobeLogo}/>
            <div className={styles.outletBox}>
                <Outlet/>
            </div>
            </div>
        </motion.section>
    )
}

export default AuthPage