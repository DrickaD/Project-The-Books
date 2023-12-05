import { CategoryFilters } from "./CategoryFilters";
import { PriceFilters } from "./PriceFilters";
import { SearchForm } from "./SearchForm";
import styles from "./style.module.scss";

export const Filters = ({setSearch, cleanFilters, setCategory, min, setMin, max, setMax}) =>{
    return(
        <div className={styles.filterBox}> 
            {/* o filter manda o setSearch pro campo de formulario */}
            <SearchForm setSearch={setSearch}/>
            <CategoryFilters setCategory={setCategory}/>
            <PriceFilters min={min} setMin={setMin} max={max} setMax={setMax}/>
            <button className="btn" onClick={cleanFilters}>Limpar filtros</button>
        </div>
    )
}