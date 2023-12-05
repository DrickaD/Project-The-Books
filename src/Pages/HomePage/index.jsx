import { BooksSection } from "../../Components/BooksSection"
import { DefaultTemplate } from "../../Components/DefaultTemplate"
import { TitleSection } from "../../Components/TitleSection"

export const HomePage =() =>{
    return(
        <DefaultTemplate>
            <TitleSection/>
            <BooksSection/>
        </DefaultTemplate>
    )
}