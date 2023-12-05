import { useState } from "react";
import { MdSearch } from "react-icons/md";
import styles from "./style.module.scss";

export const SearchForm = ({setSearch}) =>{
    //o formulario recebe a função manipuladora de estado desde o filter até chegar aqui, passa por 3 componentes como props
    //criar um estado para o valor do input que será digitado
    const [value, setValue] = useState("");
// essa função de submit serve pra previnir a ação padrão do formulario e para limpar o input
// depois da pesquisa 
    const submit =(e)=>{
        e.preventDefault();
        setSearch(value);

        setValue("")
    }

    return(

        <form className= {styles.form} onSubmit={submit}>
            {/* capiturar o que o usuário digita no estado value */}
            {/* o value é o valor atual do estado e o onchange captura o valor do input pelo e(evento) */}
            <input 
            className="input-medium"
            type="text" value={value} 
            onChange={(e)=> setValue(e.target.value)} 
            required 
            placeholder="Pesquisar..."
            />
            <button
            className="btn" 
            type="submit">
                <MdSearch size={21}/> 
            </button>
        </form>
    )
}