import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Question} from './question/question.model';

@Injectable({
    providedIn: 'root'
})
export class GetQuestionService {

    constructor(private httpClient: HttpClient) {
    }
  // get(){
  //       return this.httpClient.get('http://localhost:8080/question');
  // }
    get(type: string){
        return this.httpClient.get<Question>('http://localhost:8080/question' + '/' + type);
    }
}
