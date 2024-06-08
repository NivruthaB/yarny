export enum BookGenreKeys {
    Fantasy = 'fantasy',
    SciFi = 'scifi'
}

export enum BookGenreTitles {
    Fantasy = 'Fantasy',
    SciFi = "Sci-Fi"
}

export interface BookGenres {
    key: BookGenreKeys;
    title: BookGenreTitles;
}

export interface IHomePageProps {
    showMenu: boolean;
    closeMenu: () => void;
}
