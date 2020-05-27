import { LightningElement, track } from 'lwc';

export default class Expense extends LightningElement {

    @track firstName;
    @track lastName;
    @track phone;
    @track isPersonalSection = true;
    @track isExpenseSection = false;
    @track isSummarySection = false;
    @track expenses = [];

    get expensetypes() {
        return [
            { label: 'Cell Phone', value: 'Cell Phone' },
            { label: 'Commute', value: 'Commute' }
        ];
    }

    get lastthreemonths() {
        return [
            { label: 'April', value: 'April' },
            { label: 'March', value: 'March' },
            { label: 'Feb', value: 'Feb' },
        ];
    }

    moveToExpenseSection(){
        this.isPersonalSection = false;
        this.isExpenseSection = true;
    }

    moveToPreviousSection(){
        this.isPersonalSection = true;
        this.isExpenseSection = false;
    }

    moveToSummarySection(){
        this.isSummarySection = true;
        this.isPersonalSection = false;
    }
}