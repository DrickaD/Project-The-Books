import {categories} from"../../../../Data/categories.js"
import styles from "./style.module.scss";

export const CategoryFilters =({setCategory})=>{
    return(
        <div className={styles.categoryFilters}>
            <h2 className="title2">Filtrar por categoria</h2>
            <ul>
                {categories.map(category => (
                    <li 
                    key={category.id} className={`"paragraph" ${styles.li}`}
                    onClick={()=> setCategory(category.name)}>
                        {category.name}
                    </li>

                ))}
            </ul>

        </div>
    )
}