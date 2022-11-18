import styles from "./AuthCustomInputStyle.module.css"

const AuthCustomInput = ({
    customIcon,
    id,
    name,
    type,
    onChange,
    placeholder
}) => {

    return (
       <div className={styles.inputWrapped}>
            {customIcon}
            <input 
                className={styles.authInput}
                id={id}
                name={name}
                type={type}
                onChange={onChange}
                placeholder={placeholder}
            />
       </div>
    )
}

export default AuthCustomInput