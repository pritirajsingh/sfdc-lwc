import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import FN from '@salesforce/schema/Contact.FirstName';
import LN from '@salesforce/schema/Contact.LastName';
import EMAIL from '@salesforce/schema/Contact.Email';
import { reduceErrors } from 'c/ldsUtils';

export default class ContactList extends LightningElement {
    columns = [
        {label: 'First Name', fieldName: FN.fieldApiName, type: 'text'},
        {label: 'Last Name', fieldName: LN.fieldApiName, type: 'text'},
        {label: 'Email', fieldName: EMAIL.fieldApiName, type: 'text'}
    ]
    @wire(getContacts)
    contacts;
    get errors(){
        return (this.contacts.error) ? reduceErrors(this.contacts.error) : [];
    }
}