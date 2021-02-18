import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CheckedFlagMapService} from '../../checked-flag-map.service';

@Component({
    selector: 'app-types-board',
    templateUrl: './types-board.component.html',
    styleUrls: ['./types-board.component.less']
})
export class TypesBoardComponent implements OnInit {
    colorVal: any;
    shadowVal: any;
    transformVal: any;
    typesToWheel: string[];
    id: number;
    @Output() typesEmitter: EventEmitter<string[]> = new EventEmitter<string[]>();

    constructor(private checkedFlagMapService: CheckedFlagMapService) {
    }

    ngOnInit(): void {
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
            this.typesToWheel = Array.from(this.checkedFlagMapService.typesMap.values());
            this.cleanArray(this.typesToWheel);
            this.typesEmitter.emit(this.typesToWheel);
        } else {
            this.checkedFlagMapService.checkedFlagMap.set(this.id, true);
            this.checkedFlagMapService.typesMap.set(this.id, type);
            this.typesToWheel = Array.from(this.checkedFlagMapService.typesMap.values());
            this.cleanArray(this.typesToWheel);
            this.typesEmitter.emit(this.typesToWheel);
        }
    }
}

// array.filter(el => {
//     return el !== null ;
// });
