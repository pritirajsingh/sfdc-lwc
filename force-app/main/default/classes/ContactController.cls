public with sharing class ContactController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        throw new AuraHandledException('Custom Error');
        /* try {
            return [
                SELECT FirstName, LastName, Email FROM Contact
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        } */
    }
    
}
