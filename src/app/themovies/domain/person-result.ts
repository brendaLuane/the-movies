export class PersonResult {
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
    adult: boolean;
    profile_path: string;
    name: string;
    popularity: number;
    known_for: KnownFor;

    constructor(id: number, adult: boolean, profile_path: string, name: string, popularity: number, known_for: KnownFor) {
        this.id = id;
        this.adult = adult;
        this.profile_path = profile_path;
        this.name = name;
        this.popularity = popularity;
        this.known_for = known_for;
    }

}

export class KnownFor {

    id: number;
    title: string;
    name: string;

    constructor(id: number, title: string, name: string){
        this.id = id;
        this.title = title;
        this.name = name;
    }
}