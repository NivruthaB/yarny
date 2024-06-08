import BookList from "../booklist/booklist";
import { BookGenreKeys, BookGenreTitles, BookGenres, IHomePageProps } from "./content.interface";
import { BookListWrapper, ContentContainer } from "./content.styled";


const Content = ({ showMenu, closeMenu }: IHomePageProps) => {
    const genres: BookGenres[] = [
        {
            key: BookGenreKeys.Fantasy,
            title: BookGenreTitles.Fantasy
        },
        {
            key: BookGenreKeys.SciFi,
            title: BookGenreTitles.SciFi
        },
        {
            key: BookGenreKeys.SciFi,
            title: BookGenreTitles.SciFi
        }
    ];

    return (
        <ContentContainer>
            <BookListWrapper>
                {genres.map((genre) => {
                    return (
                        <BookList key={genre.key} genre={genre} />
                    )
                })}
            </BookListWrapper>
        </ContentContainer>
    )
}

export default Content;