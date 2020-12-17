import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FN from '@salesforce/schema/Contact.FirstName';
import LN from '@salesforce/schema/Contact.LastName';
import EMAIL from '@salesforce/schema/Contact.Email';

export default class ContactCreator extends LightningElement {
    objectApiName = CONTACT_OBJECT;
    fields = [FN, LN, EMAIL];

    handleSuccess(event){
        console.log("handle Success :: "+event.detail.id);
        const successMsg = new ShowToastEvent({
            title : "Contacted Created",
            message: `Record ID: ${event.detail.id} Created`,
            variant : "success"
        });

        console.log("Dispatching Custom Event");

        this.dispatchEvent(successMsg);
        console.log("Dispatched Custom Event");
    }
}