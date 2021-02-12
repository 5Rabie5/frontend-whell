import {Component} from '@angular/core';
// import {NgxWheelComponent, TextAlignment, TextOrientation} from 'ngx-wheel';
// import {GetQuestionService} from './get-question.service';
// import {Question} from './question/question.model';
// import {AnswerModel} from './question/answer.model';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    showQuestion: boolean;
    constructor() {
    }
}
