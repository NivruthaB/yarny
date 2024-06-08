import styled from "styled-components";

export const BooksContainer = styled.div`
    padding: 0 0 0 0;
    display: flex;
    flex-direction: column;
    .book-list-cont::-webkit-scrollbar{
        display: none;
    }
`;

export const GenreTitleContainer = styled.div`
    display: flex ;
`

export const GenreTitle = styled.div`
    padding: 10px 20px 10px 10px;
    font-size: var(--sub-heading-font-size);
    font-family: var(--cursive-font-family);
`;

export const BookListContainer = styled.div`
    display: flex;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
`
