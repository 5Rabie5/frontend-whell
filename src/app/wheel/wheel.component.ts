import {ChangeDetectionStrategy, Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {GetQuestionService} from '../get-question.service';
import {NgxWheelComponent, TextAlignment, TextOrientation} from 'ngx-wheel';
import {Question} from './question/question.model';
import {QuestionComponent} from './question/question.component';
import {TypesBoardComponent} from './types-board/types-board.component';

@Component({
    selector: 'app-wheel',
    templateUrl: './wheel.component.html',
    styleUrls: ['./wheel.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WheelComponent implements OnInit {

    @ViewChild(NgxWheelComponent, {static: false}) wheel;
    @ViewChild(QuestionComponent) questionComponent: QuestionComponent;
    @ViewChild(TypesBoardComponent) typesBoardComponent: TypesBoardComponent;
    visibility = [true, true, true, true];
    question: Question;
    totalPoint = 0;
    point: number;
    showQuestion2 = false;
    ttype: string;
    index: string;
    typesArray = [0, 1, 2, 3, 4, 5];
    idToLandOn: number;
    items: any[];
    textOrientation: TextOrientation = TextOrientation.HORIZONTAL;
    textAlignment: TextAlignment = TextAlignment.OUTER;
     des = ['العهد الجديد', 'المختلف', 'أول من ', 'العهد القديم', 'تيبيكون', 'معاني'];
     des2 = [];
    i = this.des.length;
    // seed = [...Array(this.i).keys()];

    constructor(private getQuestionService: GetQuestionService) {

    }

    ngOnInit(): void {

        // this.typesBoardComponent.typesEmitter.subscribe((data3: string[]) => {
        //     // this.showQuestion = true;
        //     this.des = data3;
        // });
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

    generateNumArray(num: number) {
        this.typesArray = Array.from(Array(num).keys());
        console.log(this.typesArray);
    }

    wheelRefresh() {
        console.log(this.des);
        const colors = ['#0063B2FF', '#9CC3D5FF', '#FDD835'];
        // const colors = ['#FFF59D', '#FFEE58', '#FDD835'];
        this.generateNumArray(this.des.length);
        this.items = this.typesArray.map((value) => ({
            fillStyle: colors[value % 3],
            text: this.des[value],
            id: value,
            textFillStyle: 'black',
            textFontSize: '16'
        }));
    }

    changeTypes(types: string[]) {
        this.des = types;
    }

    reset() {
        this.wheel.reset();

    }

    before() {
        //     alert('Your wheel is about to spin')
    }


    after() {
        // this.questionComponent.totalPoint = 100;
        this.showQuestion2 = true;
        // this.questionComponent.qqq();
        // this.questionComponent.totalPoint = 88;
    }

    async spin() {
        this.point = 0;
        this.visibility = [true, true, true, true];
        this.showQuestion2 = false;
        this.reset();
        this.idToLandOn = Math.floor(Math.random() * (this.i - 1)) + 1;
        await new Promise(resolve => setTimeout(resolve, 0));
        this.wheel.spin(this.idToLandOn);
        this.ttype = this.des[this.idToLandOn];
        // this.getQuestion(this.ttype);
        // console.log(this.questionComponent.question);
        this.getQuestionService.myMethod(this.ttype);
        this.getQuestionService.get().subscribe((data2: Question) => {
            // this.showQuestion = true;
            this.question = data2;
            console.log('from qq' + this.question);
        });

    }

    check(question: Question, answerId: number) {
        if (Number(question.correctAnswer) !== answerId) {
            this.visibility[answerId - 1] = false;
        } else {

            this.point = this.visibility.filter(x => x === true).length * 25;
            this.totalPoint = this.totalPoint + this.point;
            this.showQuestion2 = false;
        }
    }

    // getQuestion(type: string) {
    //     this.getQuestionService.get().subscribe((data: Question) => {
    //         this.question = data;
    //     });
    //
    // }

    // async spin() {
    //     this.idToLandOn = 3;
    //     await new Promise(resolve => setTimeout(resolve, 0));
    //     this.wheel.spin();
    // }


    done() {

    }
}
