import { SearchResult } from '../domain/search-result';
import { PersonResult } from '../domain/person-result';
import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ThemoviesService {

    private readonly apiUrl = environment.themoviesApiUrl;

    constructor(private http: HttpClient) { }

    fetchSearchMulti(title: string, page: number): Observable<SearchResult> {
        return this.http.get<SearchResult>(this.apiUrl + '/search/multi', { params: { query: title, page, language: 'pt-BR' } });
    }

    fetchPersonPopular(page: number): Observable<PersonResult> {
        return this.http.get<PersonResult>(this.apiUrl + '/person/popular', { params: { page, language: 'pt-BR' } });
    }

    fetchPersonDetails(person_id: number): Observable<PersonResult> {
        return this.http.get<PersonResult>(this.apiUrl + '/person/'+ person_id, { params: { language: 'pt-BR' } });
    }
}