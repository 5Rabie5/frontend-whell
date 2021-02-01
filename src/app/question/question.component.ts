import {Component, OnInit} from '@angular/core';
import {GetQuestionService} from '../get-question.service';
import {Question} from './question.model';


@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.less']
})
export class QuestionComponent implements OnInit {

    constructor(private getQuestionService: GetQuestionService) {
    }

     question: Question;

    ngOnInit(): void {

    }

    // getQuestion() {
    //     this.getQuestionService.get().subscribe(data => {
    //         this.question = data;
    //         console.log(data);
    //     });
    // }
    getQuestion(type: string) {
        this.getQuestionService.get(type).subscribe(data => {
            this.question = data;
            console.log(data);
        });
    }

}
