import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CheckedFlagMapService {
    checkedFlag = [true, true, true, true, true, true, false, false, false];
    types = ['العهد الجديد', 'المختلف', 'أول من', 'العهد القديم', 'تيبيكون', 'معاني', '', '', ''];
    checkedFlagMap = new Map<number, boolean>();
    typesMap = new Map<number, string>();
    i = -1;
    ii = -1;

    constructor() {
        this.fromArrayToMap();
        this.fromArrayToMapTypes();
    }

    fromArrayToMap() {
        this.checkedFlag.forEach((el) => {
            ++this.ii;
            this.checkedFlagMap.set(this.ii, this.checkedFlag[this.ii]);
        });
    }

    fromArrayToMapTypes() {
        this.types.forEach((el) => {
            ++this.i;
            this.typesMap.set(this.i, this.types[this.i]);
        });
    }
}
