import styles from "./style.module.scss";

export const PriceInput = ({id,label,value, setValue, placeholder}) =>{
    return(
    <div className={styles.inputBox}>
        <label className="label"
        htmlFor={id}>{label}</label>

        <input 
        placeholder={placeholder}
        className="input-small"
        type= "number" 
        name={id}
        id={id}
        value={value}
        onChange={(e)=> setValue(e.target.value)}
        min="1"
        />
    </div>
    )
}