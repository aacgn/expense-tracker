export class Transaction {
    public id: number;
    public text: string;
    public amount: number;

    constructor(text: string, amount: number) {
        this.id = Math.floor(Math.random() * 10000000);
        this.text =text;
        this.amount = amount;
    }
}