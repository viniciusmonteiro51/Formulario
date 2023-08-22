import styles from "./style.module.css"

export default function Input({type, id, value, placeHolder, onChange}){
    return(
        <>
        <input className={styles.input}
        type={type}
        id={id}
        value={value}
        placeHolder={placeHolder}
        onChange={onChange}
        />
        </>
    )
}