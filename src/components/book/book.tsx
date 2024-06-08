import { useState } from "react";
import { IBookProps } from "./book.interface";
import { BookContainer, BookCover } from "./book.styled";
import BookDetails from "../book-details/book-details";

const Book = ({ title, isbn }: IBookProps) => {
    const [showBookDetails, setShowBookDetails] = useState(false);
    return (
        <BookContainer>
            <BookCover
                transition={{ duration: 0.75, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
                src={`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`}
                alt={`${title} Book Cover`}
                onClick={() => setShowBookDetails(true)}
            />
            {
                showBookDetails === true &&
                <BookDetails
                    setShowBookDetails={setShowBookDetails}
                    isbn={isbn}
                    title={title}
                />
            }
        </BookContainer>
    )
}

export default Book;