export class AnswerModel {

    public id: number;
    public name: string;
    public viability: boolean;


    constructor(id: number, name: string, viability: boolean) {
        this.id = id;
        this.name = name;
        this.viability = viability;
    }
}

