export class Question {

    public id: string;
    public index: number;
    public question: string;
    public possibility: string[];
    public correctAnswer: string;
    public style: string;
    public type: string;
    public level: number;
    public resourceInfo: string;
    public parameter1: string;
    public parameter2: string;

    constructor(id: string, index: number, question: string, possibility: string[], correctAnswer: string, style: string,
                type: string, level: number, resourceInfo: string, parameter1: string, parameter2: string) {
        this.id = id;
        this.index = name;
        this.question = question;
        this.possibility = possibility;
        this.correctAnswer = correctAnswer;
        this.style = style;
        this.type = type;
        this.level = level;
        this.resourceInfo = resourceInfo;
        this.parameter1 = parameter1;
        this.parameter2 = parameter2;
    }
}

