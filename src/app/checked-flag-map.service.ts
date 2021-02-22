import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CheckedFlagMapService {
    checkedFlag = [true, true, true, true, true, true, false, false, false];
    types = ['العهد الجديد', 'المختلف', 'أول من', 'العهد القديم', 'تيبيكون', 'معاني', '', '', ''];
    opacityArr = ['100%', '100%', '100%', '100%', '100%', '100%', '55%', '55%', '55%'];
    checkedFlagMap = new Map<number, boolean>();
    typesMap = new Map<number, string>();
    opacityMap = new Map<number, string>();
    i = -1;
    ii = -1;
    iii = -1;
    constructor() {
        this.fromArrayToMap();
        this.fromArrayToMapTypes();
        this.fromArrayToMapOpacity();
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

    fromArrayToMapOpacity() {
        this.opacityArr.forEach((el) => {
            ++this.iii;
            this.opacityMap.set(this.iii, this.opacityArr[this.iii]);
        });
    }
}
