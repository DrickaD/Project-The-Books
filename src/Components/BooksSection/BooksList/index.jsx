import { BookCard } from "./BookCard"
import styles from "./style.module.scss";

export const BooksList = ({search, booklist}) =>{
    return(
        <div className={ styles.booksListBox}>
            <span className="paragraph bold">Livros listados: {booklist.length} </span>
            {search ? <p>Resultados de busca para: {search} </p> : null}
            {booklist.length > 0 ? ( 
                <ul className= {styles.booksList}>
                    {booklist.map(book =>(
                    <BookCard  key={book.id} book={book}/>
                    ))}
                </ul>
                ): (
                    <p className="paragraph">Nenhum resultado encontrado</p>
                )}
            
        </div>
    )
}