import {Component, ViewChild,} from '@angular/core';
import {NgxWheelComponent, TextAlignment, TextOrientation} from 'ngx-wheel';
import {GetQuestionService} from './get-question.service';
import {Question} from './question/question.model';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {

    hideQuestion = false;
    question = {} as Question;

    constructor(private getQuestionService: GetQuestionService) {
    }

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
        this.reset();
        this.hideQuestion = false;
        this.idToLandOn = Math.floor(Math.random() * 5) + 1;
        // console.log(' land ' + this.des[this.idToLandOn]);
        // console.log(' land nm' + this.idToLandOn);
        await new Promise(resolve => setTimeout(resolve, 0));
        this.wheel.spin(this.idToLandOn);
        this.getQuestion(this.des[this.idToLandOn]);
        // this.getQuestionService.get(this.des[this.idToLandOn]);
    }

    // async spin(prize) {
    //     this.idToLandOn = prize;
    //     await new Promise(resolve => setTimeout(resolve, 0));
    //     this.wheel.spin();
    // }

    getQuestion(type: string) {
        this.getQuestionService.get(type).subscribe(data => {
            this.question = data;
            console.log(this.question.type);
        });
    }
}
