import { useEffect, useRef, useState } from "react";
import { IBook, IBookListProps } from "./booklist.interface";
import { BookListContainer, BooksContainer, GenreTitle, GenreTitleContainer } from "./booklist.styled"
import Book from "../book/book";
import { useScroll, useSpring } from "framer-motion";
import { ProgressLine } from "../progress-line/progress-line";

const BookList = ({ genre }: IBookListProps) => {
    const containerRef = useRef(null);
    const [books, setBooks] = useState(
        [
            {
                title: 'Game of Thrones',
                isbn: '9780553588484'
            },
            {
                title: 'Fantastic Mr. Fox',
                isbn: '9780140328721'
            },
            {
                title: 'The Art Of Community',
                isbn: '0596156715'
            },
            {
                title: 'Animal Stories',
                isbn: '9781603095020'
            },
            {
                title: 'Game of Thrones',
                isbn: '9780553588484'
            },
            {
                title: 'Fantastic Mr. Fox',
                isbn: '9780140328721'
            },
            {
                title: 'The Art Of Community',
                isbn: '0596156715'
            },
            {
                title: 'Animal Stories',
                isbn: '9781603095020'
            },
            {
                title: 'Game of Thrones',
                isbn: '9780553588484'
            },
            {
                title: 'Fantastic Mr. Fox',
                isbn: '9780140328721'
            },
            {
                title: 'The Art Of Community',
                isbn: '0596156715'
            },
            {
                title: 'Animal Stories',
                isbn: '9781603095020'
            }
        ] as IBook[]
    );

    useEffect(() => {
        // fetchBooks();
    });

    const { scrollXProgress } = useScroll({
        container: containerRef
    });

    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <BooksContainer>
            <GenreTitleContainer>
                <GenreTitle>{genre.title}
                    <ProgressLine scaleX={scaleX}></ProgressLine>
                </GenreTitle>
            </GenreTitleContainer>
            <BookListContainer className="book-list-cont" ref={containerRef}>
                {books.map((book) => {
                    return (
                        <Book key={book.isbn} title={book.title} isbn={book.isbn} />
                    )
                })}
            </BookListContainer>
        </BooksContainer>
    )
}

export default BookList;