import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";


@Component({
    templateUrl: "./EditCalculationDialog.html",
    styleUrls: ["./EditCalculationDialog.scss"]
})
export class EditCalculationDialog {
    percentage: number = 0;
    calcPercentage (event: any) {
        console.log("calcPercentage", event.target.value);
        let percent = event.target.value;
        this.data.openRollPrice = this.data.price * ( 1 - ((percent ?? 100) / 100));
    }
    constructor(@Inject(MAT_DIALOG_DATA) public data: { price: number, profit: number, openRollPrice: number }) {

    }   

}