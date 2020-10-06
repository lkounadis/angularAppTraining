export interface SearchMovieResults {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface SearchMovieResultListResponse {
    Search: Array<SearchMovieResults>;
    totalResults: string;
    Response: string;
}
