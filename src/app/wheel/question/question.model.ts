export class Question {

    public id: string;
    public index: string;
    public question: string;
    public possibility1: string;
    public possibility2: string;
    public possibility3: string;
    public possibility4: string;
    public correctAnswer: string;
    public style: string;
    public type: string;
    public level: string;
    public resourceInfo: string;
    public parameter1: string;
    public parameter2: string;

    constructor(id: string, index: string, question: string, possibility1: string, possibility2: string, possibility3: string,
                possibility4: string, correctAnswer: string, style: string, type: string, level: string, resourceInfo: string,
                parameter1: string, parameter2: string) {
        this.id = id;
        this.index = index;
        this.question = question;
        this.possibility1 = possibility1;
        this.possibility2 = possibility2;
        this.possibility3 = possibility3;
        this.possibility4 = possibility4;
        this.correctAnswer = correctAnswer;
        this.style = style;
        this.type = type;
        this.level = level;
        this.resourceInfo = resourceInfo;
        this.parameter1 = parameter1;
        this.parameter2 = parameter2;
    }
}

