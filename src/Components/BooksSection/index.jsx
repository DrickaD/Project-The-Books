import { useState } from "react";
import { BooksList } from "./BooksList";
import { Filters } from "./Filters";
import {books} from "../../Data/books";
import styles from "./style.module.scss";

export const BooksSection = () =>{
//cria um estado para o valor do campo de pesquisa de livro
//cria aqui por que ele vai ser usado tanto no booksList como no filter
    const[search, setSearch] = useState("")
    const [category, setCategory] = useState("");
    const [min, setMin]= useState("");
    const [max, setMax]= useState("");

    const booksResult = books.filter(book => {

        const searchFilter =
                        search === "" ? true : 
                        book.name.toLowerCase().includes(search.toLowerCase()) ||
                        book.category.toLowerCase().includes(search.toLowerCase());

        const categoryFilter = category === "" ? true : book.category === category;  
// esse Number(min) converte o valor em numero
        const minPriceFilter = min === "" ? true : book.price > Number(min);
        const maxPriceFilter = max === "" ? true : book.price <= Number(max);

        return searchFilter && categoryFilter && minPriceFilter && maxPriceFilter    
    });

    // const booklist = search ? booksResult : books;

    const cleanFilters = ()=>{
        setSearch("");
        setCategory("");
        setMin("");
        setMax("");
    }

    return (
        <section>
            {/* O formulario de busca esta dentro do filters por isso chama a função manipuladora de estado aqui */}
            <div className="container">
                <div className={styles.flexBox}>
                    <Filters 
                    cleanFilters={cleanFilters} 
                    setSearch ={setSearch} 
                    setCategory={setCategory}
                    min={min}
                    setMin={setMin}
                    max={max}
                    setMax={setMax}
                    /> 
                    <BooksList search={search} booklist={booksResult}/>
                </div>
            </div>
        </section>
    )
}