import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GetQuestionService {

    constructor(private httpClient: HttpClient) {
    }
  get(){
        return this.httpClient.get('http://localhost:8080/question');
  }
}
