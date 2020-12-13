import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class Customer {
    customerCode: string = "123";
    customerName: String = "Praf";
    customerNumber: Number = 0;

    formCustomerGroup :FormGroup;
    constructor()
    {
        var formBuilder=new FormBuilder();
        this.formCustomerGroup=formBuilder.group({});
        this.formCustomerGroup.addControl('customerNameControl',new FormControl('',Validators.required) )
        var validationCollection=[];
        validationCollection.push(Validators.required);
        validationCollection.push(Validators.pattern("^[0-9]{4,4}$"))
        this.formCustomerGroup.addControl('customerCodeControl',new FormControl('',Validators.compose(validationCollection)));


    }
}