import {Component, ViewChild, } from '@angular/core';
import {NgxWheelComponent, TextAlignment, TextOrientation} from 'ngx-wheel';
import {GetQuestionService} from './get-question.service';
import {Question} from './question/question.model';
import {AnswerModel} from './question/answer.model';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {

    constructor(private getQuestionService: GetQuestionService) {
    }


    hideQuestion = false;
    question = {} as Question;
    answer = {} as AnswerModel;
    visibility = [true, true, true, true];
    i = 0;
    totalPoint = 0;
    point = 0;
    @ViewChild(NgxWheelComponent, {static: false}) wheel;

    seed = [...Array(6).keys()];
    typesArray = [0, 1, 2, 3, 4, 5];
    idToLandOn: number;
    items: any[];
    textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
    textAlignment: TextAlignment = TextAlignment.OUTER;
    const;
    des = ['العهد الجديد', 'المختلف', 'أول من ', 'العهد القديم', 'تيبيكون', 'معاني'];

    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit(): void {

        const colors = ['#0063B2FF', '#9CC3D5FF', '#FDD835'];
        // const colors = ['#FFF59D', '#FFEE58', '#FDD835'];


        this.items = this.typesArray.map((value) => ({
            fillStyle: colors[value % 3],
            text: this.des[value],
            id: value,
            textFillStyle: 'black',
            textFontSize: '16'
        }));
    }

    reset() {
        this.wheel.reset();
    }

    before() {

//     alert('Your wheel is about to spin')
    }


    after() {
        this.hideQuestion = true;
    }

    async random() {
        this.point = 0;
        this.visibility = [true, true, true, true];
        this.reset();
        this.hideQuestion = false;
        this.idToLandOn = Math.floor(Math.random() * 5) + 1;
        await new Promise(resolve => setTimeout(resolve, 0));
        this.wheel.spin(this.idToLandOn);
        this.getQuestion(this.des[this.idToLandOn]);

    }

    // async spin(prize) {
    //     this.idToLandOn = prize;
    //     await new Promise(resolve => setTimeout(resolve, 0));
    //     this.wheel.spin();
    // }

    getQuestion(type: string) {
        this.getQuestionService.get(type).subscribe(data => {
            this.question = data;

        });
    }


    check(question: Question, answerId: number) {
        if (Number(question.correctAnswer) !== answerId) {
            this.visibility[answerId - 1] = false;
        } else {

            this.point = this.visibility.filter(x => x === true).length * 25;
            this.totalPoint = this.totalPoint + this.point;
            this.hideQuestion = false;
        }
    }
}
