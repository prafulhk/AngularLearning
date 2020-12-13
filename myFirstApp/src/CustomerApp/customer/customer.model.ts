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
        //Vaidation for customer code
        var validationCollectionForCode=[];
        validationCollectionForCode.push(Validators.required);
        validationCollectionForCode.push(Validators.pattern("^[0-9]{4,4}$"))//main and max 4 digits only
        this.formCustomerGroup.addControl('customerCodeControl',new FormControl('',Validators.compose(validationCollectionForCode)));
        //Vaidation for customer name
        var validationCollectionForName=[];
        validationCollectionForName.push(Validators.required);
        validationCollectionForName.push(Validators.pattern("[A-Za-z\\s]*"))//only charecters allowed
        this.formCustomerGroup.addControl('customerNameControl',new FormControl('',Validators.compose(validationCollectionForName)));


    }
}