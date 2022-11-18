import styles from './MenuNavbarStyle.module.css'
import { BiLogOut } from "react-icons/bi"
import broobre from "../../assets/logoBroobe.png"
import { GrClose } from 'react-icons/gr'
import { AiOutlineCheck } from "react-icons/ai"
import { useState } from 'react'
import { motion } from "framer-motion"

const MenuNavbar = () => {

    const [modal, setModal] = useState(false)

    const handleOpenModal = () => {
        setModal(true)
    }

    const handleCloseModal = () => {
        setModal(false)
    }

    const handleCloseSession = () => {
        localStorage.removeItem("bearer")
        setModal(false)
        window.location.href = "/auth"
    }

    return (
        <>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={styles.menuNavbar}>
                <img src={broobre} alt='logo' className={styles.logoBroobe} />
                <div className={styles.buttonLogout} onClick={handleOpenModal}>
                    <BiLogOut className={styles.iconLogout}/>
                    <span className={styles.logoutText}>Cerrar sesion</span>
                </div>
            </motion.div>
                {
                    modal ? 
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={styles.modalLogout}>
                            <div className={styles.cardLogout}>
                                <h2>¿Cerrar session?</h2>
                                <div className={styles.buttonModal}>
                                    <button onClick={handleCloseSession}><AiOutlineCheck /></button>
                                    <button onClick={handleCloseModal}>  <GrClose /></button>    
                                </div> 
                            </div>
                        </motion.div>
                    : null
                }
        </>
    )
}

export default MenuNavbar