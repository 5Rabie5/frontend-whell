import {Component, OnInit, OnChanges, AfterViewInit, AfterContentChecked, NgZone} from '@angular/core';
import {GetQuestionService} from '../../get-question.service';
import {Question} from './question.model';
import {ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent implements OnInit {

    visibility = [true, true, true, true];

    question = {} as Question;
    totalPoint = 0;
    point: number;
    showQuestion = true;
    ttype: string;
    index: string;

    // @Output() dataEvent = new EventEmitter<Question>();

    constructor(private getQuestionService: GetQuestionService) {
    }

    ngOnInit(): void {
        // this.question = this.getQuestionService.question;
        // console.log(' init new         ' + this.question.question);
        this.qqq();
        this.qqq();
    }

    // ngAfterContentChecked() {
    //     this.aaa();
    //     this.qqq();
    // }
    // ngOnChanges() {
    //     // this.question = this.getQuestionService.question;
    //     this.qqq();
    //     console.log(' on on change       ');
    // }


    qqq() {
        this.getQuestionService.get().subscribe((data2: Question) => {
            // this.showQuestion = true;
            this.question = data2;
            console.log('from qq' +  this.question);
        });

    }


    check(question: Question, answerId: number) {
        if (Number(question.correctAnswer) !== answerId) {
            this.visibility[answerId - 1] = false;
        } else {

            this.point = this.visibility.filter(x => x === true).length * 25;
            this.totalPoint = this.totalPoint + this.point;
            this.showQuestion = false;
        }
    }

}
