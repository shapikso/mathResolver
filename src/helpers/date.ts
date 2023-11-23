export class NormaliseDate {
    date: Date;
    constructor(date: string) {
        this.date = new Date(date);
    }
    monthDayYear = () => `${this.date.getMonth()+1}/${this.date.getDate()}/${this.date.getFullYear()}`;
}