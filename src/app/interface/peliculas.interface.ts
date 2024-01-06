
export interface PeliculasResponse {
    dates:         Dates;
    page:          number;
    results:       Movie[];
    total_pages:   number;
    total_results: number;
}


export interface busquedaPeli {
    page:          number;
    results:       ResultBusqueda[];
    total_pages:   number;
    total_results: number;
}



export interface Dates {
    maximum: string;
    minimum: string;
}

export interface Movie {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
    media_type?:        string;
}





export enum OriginalLanguage {
    En = "en",
    Ja = "ja",
    No = "no",
    Tl = "tl",
}




export interface ResultBusqueda {
    id:   number;
    name: string;
}

// lista




export interface Lista {
    created_by:     string;
    description:    string;
    favorite_count: number;
    id:             number;
    iso_639_1:      string;
    item_count:     number;
    items:          Movie[];
    name:           string;
    page:           number;
    poster_path:    null;
    total_pages:    number;
    total_results:  number;
}

