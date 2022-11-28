export class SearchResult {
    page: number;
    total_pages: number;
    total_results: number;
    results: Results;

    constructor(page: number, results: Results, total_pages: number, total_results: number) {
        this.page = page;
        this.results = results;
        this.total_pages = total_pages;
        this.total_results = total_results;
    }

}

export class Results {
    id: number;
    title: string;
    adult: boolean;
    overview: string;
    media_type: string;
    poster_path: string;
    profile_path: string;
    release_date: string;
    first_air_date: string;

    constructor(id: number, title: string, adult: boolean, overview: string, media_type: string, poster_path: string, profile_path: string, release_date: string, first_air_date: string) {
        this.id = id;
        this.title = title;
        this.adult = adult;
        this.overview = overview;
        this.media_type = media_type;
        this.poster_path = poster_path;
        this.profile_path = profile_path;
        this.release_date = release_date;
        this.first_air_date = first_air_date;
    }

}