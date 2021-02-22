import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CheckedFlagMapService} from '../../checked-flag-map.service';

@Component({
    selector: 'app-types-board',
    templateUrl: './types-board.component.html',
    styleUrls: ['./types-board.component.less']
})
export class TypesBoardComponent implements OnInit {
    typesToWheel: string[];
    id: number;
    @Output() typesEmitter: EventEmitter<string[]> = new EventEmitter<string[]>();


    opacityVal0 = this.checkedFlagMapService.opacityMap.get(0);
    opacityVal1 = this.checkedFlagMapService.opacityMap.get(1);
    opacityVal2 = this.checkedFlagMapService.opacityMap.get(2);
    opacityVal3 = this.checkedFlagMapService.opacityMap.get(3);
    opacityVal4 = this.checkedFlagMapService.opacityMap.get(4);
    opacityVal5 = this.checkedFlagMapService.opacityMap.get(5);
    opacityVal6 = this.checkedFlagMapService.opacityMap.get(6);
    opacityVal7 = this.checkedFlagMapService.opacityMap.get(7);
    opacityVal8 = this.checkedFlagMapService.opacityMap.get(8);

    // opacityVal0 = '22%';

    constructor(private checkedFlagMapService: CheckedFlagMapService) {
        // this.opacityVal0 = this.checkedFlagMapService.opacityMap.get(0);
        // this.opacityVal1 = this.checkedFlagMapService.opacityMap.get(1);
        // this.opacityVal2 = this.checkedFlagMapService.opacityMap.get(2);
        // this.opacityVal3 = this.checkedFlagMapService.opacityMap.get(3);
        // this.opacityVal4 = this.checkedFlagMapService.opacityMap.get(4);
        // this.opacityVal5 = this.checkedFlagMapService.opacityMap.get(5);
        // this.opacityVal6 = this.checkedFlagMapService.opacityMap.get(6);
        // this.opacityVal7 = this.checkedFlagMapService.opacityMap.get(7);
        // this.opacityVal8 = this.checkedFlagMapService.opacityMap.get(8);
        // console.log(this.checkedFlagMapService.opacityMap.get(0));
        // console.log(this.checkedFlagMapService.opacityMap.get(1));
    }

    ngOnInit(): void {
    }

    opacityRefresh() {
        this.opacityVal0 = this.checkedFlagMapService.opacityMap.get(0);
        this.opacityVal1 = this.checkedFlagMapService.opacityMap.get(1);
        this.opacityVal2 = this.checkedFlagMapService.opacityMap.get(2);
        this.opacityVal3 = this.checkedFlagMapService.opacityMap.get(3);
        this.opacityVal4 = this.checkedFlagMapService.opacityMap.get(4);
        this.opacityVal5 = this.checkedFlagMapService.opacityMap.get(5);
        this.opacityVal6 = this.checkedFlagMapService.opacityMap.get(6);
        this.opacityVal7 = this.checkedFlagMapService.opacityMap.get(7);
        this.opacityVal8 = this.checkedFlagMapService.opacityMap.get(8);
    }

    cleanArray(array: Array<string>) {
        while (array.includes(null)) {
            array.sort();
            array.shift();
        }
    }

    checked(event) {
        const target = event.target;
        this.id = Number(target.id);
        const type = target.innerHTML;
        if (this.checkedFlagMapService.checkedFlagMap.get(this.id) === true) {
            this.checkedFlagMapService.checkedFlagMap.set(this.id, false);
            this.checkedFlagMapService.typesMap.set(this.id, null);
            console.log(this.checkedFlagMapService.opacityMap.get(this.id));
            this.checkedFlagMapService.opacityMap.set(this.id, '55%');
            console.log(this.checkedFlagMapService.opacityMap.get(this.id));
            this.typesToWheel = Array.from(this.checkedFlagMapService.typesMap.values());
            this.cleanArray(this.typesToWheel);
            this.typesEmitter.emit(this.typesToWheel);
            this.opacityRefresh();
            // document.getElementById(this.id.toString()).style.opacity = '0.5';
        } else {
            this.checkedFlagMapService.checkedFlagMap.set(this.id, true);
            this.checkedFlagMapService.typesMap.set(this.id, type);
            this.typesToWheel = Array.from(this.checkedFlagMapService.typesMap.values());
            this.cleanArray(this.typesToWheel);
            this.typesEmitter.emit(this.typesToWheel);
            this.checkedFlagMapService.opacityMap.set(this.id, '100%');
            // document.getElementById(this.id.toString()).style.opacity = '1';
            this.opacityRefresh();
        }
    }
}

// array.filter(el => {
//     return el !== null ;
// });
