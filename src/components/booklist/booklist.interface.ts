import { BookGenres } from "../content/content.interface";

export interface IBookListProps {
    genre: BookGenres;
}

export interface IBook {
    title: string;
    isbn: string;
}