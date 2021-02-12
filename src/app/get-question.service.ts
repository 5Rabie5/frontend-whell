import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Question} from './wheel/question/question.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GetQuestionService {
    question = {} as Question;
    type: string;
    myMethod$: Observable<any>;
    private myMethodSubject = new Subject<any>();

    constructor(private httpClient: HttpClient) {
        this.myMethod$ = this.myMethodSubject.asObservable();
    }


    myMethod(data) {
        // console.log('from servisc' + data); // I have data! Let's return it so subscribers can use it!
        // we can do stuff with data if we want
        this.type = data;
        this.myMethodSubject.next(data);
    }

    // get(){
    //       return this.httpClient.get('http://localhost:8080/question');
    // }
    get() {
                return this.httpClient.get<Question>('http://localhost:8080/question' + '/' + this.type);
    }

    get2() {
        return this.httpClient.get<Question>('http://localhost:8080/question');
    }
}

