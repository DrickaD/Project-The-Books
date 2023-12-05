import { PriceInput } from "./PriceImput";
import styles from "./style.module.scss";

export const PriceFilters =({min, setMin, max, setMax})=>{
    return(
        <div className={styles.priceFilters}>
           <h2 className="title2">Filtrar por preço</h2>
            
           <PriceInput id ="min" label= "Mínimo (R$)" value={min} setValue={setMin} placeholder={25}/>

           <PriceInput id ="max" label= "Máximo (R$)" value={max} setValue={setMax} placeholder={100}/>

        </div>
    )
}