import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { IBookDetailsProps } from "./book-details.interface";
import { Author, BookDetailsDialog, ContentWrapper, Description, DescriptionContainer, Ratings, Title, TitleBar } from "./book-details.styled";
import { Icon } from "../navbar/navbar.styled";
import { BookCover } from "../book/book.styled";
import StarRatings from 'react-star-ratings';

const BookDetails = ({ isbn, title, setShowBookDetails }: IBookDetailsProps) => {

    const description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`;
    const bookDetails = {
        title: title,
        year: 2000,
        authors: ['George R R Martin'],
        description: description,
        rating: 3.803,
        numberOfRatings: 834
    }

    return (
        <BookDetailsDialog
            initial={{
                opacity: 0,
                scale: 0.75,
            }}
            animate={{
                opacity: 0.95,
                scale: 1,
                transition: {
                    ease: "easeOut",
                    duration: 0.3,
                },
            }}
            exit={{
                opacity: 0,
                scale: 0.75,
                transition: {
                    ease: "easeIn",
                    duration: 0.3,
                },
            }}>
            <TitleBar>
                <div></div>
                <Icon icon={faTimes} onClick={() => setShowBookDetails(false)} />
            </TitleBar>
            <ContentWrapper>
                <BookCover
                    src={`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`}
                    alt={`${bookDetails.title} Book Cover`}
                    style={{
                        width: '300px',
                        height: '300px'
                    }}
                />
                <DescriptionContainer>
                    <Title>{`${bookDetails.title} (${bookDetails.year})`}</Title>
                    <Author>
                        {bookDetails.authors.map((author) => {
                            return (<span>{author}</span>)
                        })}
                    </Author>
                    <Ratings>
                        <StarRatings
                            starRatedColor="var(--icon-color)"
                            rating={bookDetails.rating}
                            starDimension="25px"
                            starSpacing="10px"
                        />
                        <div style={{
                            paddingLeft: '10px'
                        }}>
                            {`(${bookDetails.numberOfRatings})`}
                        </div>
                    </Ratings>
                    <Description>{bookDetails.description}</Description>
                </DescriptionContainer>
            </ContentWrapper>
        </BookDetailsDialog>
    )
}

export default BookDetails;