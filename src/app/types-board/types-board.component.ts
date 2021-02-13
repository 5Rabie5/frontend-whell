import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-types-board',
    templateUrl: './types-board.component.html',
    styleUrls: ['./types-board.component.less']
})
export class TypesBoardComponent implements OnInit {
    colorVal: any;
    shadowVal: any;
    transformVal: any;
    checkedFlag = [false, true, true, true, true, true, true, false, false, false];
    types = ['العهد الجديد', 'المختلف', 'أول من', 'العهد القديم', 'تيبيكون', 'معاني'];
    id: number;
    @Output() typesEmitter: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

    cleanArray(array: Array<any>) {
        array.filter(el => {
            return el != null && el !== '';
        });
    }

    checked(event) {
        const target = event.target;
        this.id = Number(target.id);
        const type = target.innerHTML;
        console.log(this.id);
        console.log(this.checkedFlag[this.id]);
        if (this.checkedFlag[this.id]) {
            this.checkedFlag[this.id] = false;
            this.types.forEach((element, index) => {
                if (element === type) {
                    delete this.types[index];
                }
            });
            this.cleanArray(this.types);
            this.typesEmitter.emit(this.types);
        } else {
            this.checkedFlag[this.id] = true;
            this.types.push(type);
            this.cleanArray(this.types);
        }
        console.log(this.types);
    }
}

// this.colorVal = '#64b5f6';
// this.shadowVal = '0 5px #666';
// this.transformVal = 'translateY(4px)';
// const type = id.nodeValue;
//  || event.currentTarget;
