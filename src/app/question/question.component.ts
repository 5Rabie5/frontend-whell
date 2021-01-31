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

    question: any;

    ngOnInit(): void {
        this.getQuestionService.get().subscribe(data => {
            this.question = data;
            console.log(data);
        });
    }

}
