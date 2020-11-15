console.log("Welcome to the Address Book !");
const firstNameRegex=new RegExp("^[A-Z][a-z]{2,}");
const lastNameRegex=new RegExp("^[A-Z][a-z]{2,}");
const addressRegex=new RegExp("[a-z]{4,}");
const cityRegex=new RegExp("[a-z]{4,}");
const stateRegex=new RegExp("[a-z]{4,}");
const zipRegex=new RegExp("^[0-9]{6}$");
const phoneRegex=new RegExp("[0-9]{2}[\\s][0-9]{10}");
const emailRegex=new RegExp("^[a-z0-9A-Z]+(([\\.+-][a-z0-9]{1,})?)+@[a-z0-9A-Z]+\\.([a-z]{2,6})+((\\.[a-zA-Z]{2,6})?)$");

const prompt=require('prompt-sync')();
let contactArray=new Array();
class Contact{
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }
    toString(){
        return "First Name: "+this.firstName+", Last Name: "+this.lastName+
        ", Address: "+this.address+", City: "+this.city+", State: "+this.state+
        ", Zip: "+this.zip+", Phone Number "+this.phoneNumber+", Email: "+this.email;
    }
    set firstName(firstName){
        if(firstNameRegex.test(firstName))
            this._firstName=firstName;
        else throw "Invalid first name ";
    }
    get firstName(){
        return this._firstName;
    }
    set lastName(lastName){
        if(lastNameRegex.test(lastName))
            this._lastName=lastName;
        else throw "Invalid last name";
    }
    get lastName(){
        return this._lastName;
    }
    set address(address){
        if(addressRegex.test(address))
            this._address=address;
        else throw "Invalid address";
    }
    get address(){
        return this._address;
    }
    set city(city){
        if(cityRegex.test(city))
            this._city=city;
        else throw "Invalid city name";
    }
    get city(){
        return this._city;
    }
    set state(state){
        if(stateRegex.test(state))
            this._state=state;
        else throw "Invalid state";
    }
    get state(){
        return this._state;
    }
    set zip(zip){
        if(zipRegex.test(zip))
            this._zip=zip;
        else throw "Invalid zip code";
    }
    get zip(){
        return this._zip;
    }
    set phoneNumber(phoneNumber){
        if(phoneRegex.test(phoneNumber))
            this._phoneNumber=phoneNumber;
        else throw "Invalid phone number";
    }
    get phoneNumber(){
        return this._phoneNumber;
    }
    set email(email){
        if(emailRegex.test(email))
            this._email=email;
        else throw "Invalid email";
    }
    get email(){
        return this._email;
    }
    
}

function findContact(firstName,lastName){
    let contactFound=null;
    contactArray.forEach(contact=>{
        if(contact.firstName==firstName && contact.lastName==lastName)
            contactFound=contact;
    });
    return contactFound;
}
function editContact(firstName,lastName){
    contact=findContact(firstName,lastName);
    console.log("contact found"+contact);

    console.log("1.Edit address");
    console.log("2.Edit city");
    console.log("3.Edit state");
    console.log("4.Edit zip");
    console.log("5.Edit phone number");
    console.log("6.Edit email");
    let choice=parseInt(prompt("Choose any field "));
    switch(choice){
        case 1: address=prompt("Enter address for updation- ");
                contact.address=address;
                break;
        case 2: city=prompt("Enter city for updation- ");
                contact.city=city;
                break;
        case 3: state=prompt("Enter state for updation- ");
                contact.state=state;
                break;
        case 4: zip=prompt("Enter zip for updation- ");
                contact.zip=zip;
                break;
        case 5: phoneNumber=prompt("Enter phone number for updation- ");
                contact.phoneNumber=phoneNumber;
                break;
        case 6: email=prompt("Enter email for updation- ");
                contact.email=email;
                break;
        default: console.log("No updation !");
    }
}
function deleteContact(firstName,lastName){
    let index = contactArray.findIndex(contact => contact._firstName == firstName && contact._lastName == lastName);
    if (index != -1) {
        contactArray.splice(index, 1);
        console.log("After deleting: " + firstName + " " + lastName);
        console.log(contactArray);
    }
}

function getNumberOfContacts(){
    return contactArray.reduce(count=> count+1,0);
}

function addContact(contact){
    if(findContact(contact.firstName,contact.lastName)==null)
        contactArray.push(contact);
    else throw "Contact already exits !";
}

function getContactForCity(city){
    return contactArray.filter(contact=> contact.city==city);
}

function getContactForState(state){
    return contactArray.filter(contact=> contact.state==state);
}

function countForCity(city){
    contactListForCity=contactArray.filter(contact=> contact.city==city);
    return contactListForCity.reduce(count=> count+1,0);
}
function countForState(state){
    contactListForState=contactArray.filter(contact=> contact.state==state);
    return contactListForState.reduce(count=> count+1,0);
}

function sortByContactName(){
    contactArray.sort((contact1, contact2) => contact1.firstName.localeCompare(contact2.firstName));
}

function sortByCityName(){
    contactArray.sort((contact1, contact2) => contact1.city.localeCompare(contact2.city));
}
function sortByStateName(){
    contactArray.sort((contact1, contact2) => contact1.state.localeCompare(contact2.state));
}
function sortByZipCode(){
    contactArray.sort((contact1, contact2) => contact1.zip-contact2.zip);
}

try{
    let contact1=new Contact("Kashif","Ansari","Chowk","Lucknow","Uttar Pradesh",226003,"91 9598252500","matrixkashif@gmail.com");
    let contact2=new Contact("Ahmed","Kidwai","Balaganj","Lucknow","Uttar Pradesh",226016,"91 8417888618","esakidwai@gmail.com");
    let contact3=new Contact("Pragadeesh","Raja","Mathikhere","Bengaluru","Karnataka",526024,"91 9876543210","rajapraga@gmail.com");
    let contact4=new Contact("Vaishali","Verma","Marathahalli","Bengaluru","Karnataka",526015,"91 9900887766","vsiim@gmail.com");
    let contact5=new Contact("Chitra","Kushwaha","Chandni Chowk","Delhi","New Delhi",760024,"91 9985858500","aryakushwaha@gmail.com");

    addContact(contact1);
    addContact(contact2);
    addContact(contact3);
    addContact(contact4);
    addContact(contact5);

}catch(exception){
    console.log(exception)
}
// console.log(contactArray);

try {
    viewContacts("state");
    viewContacts("city");
}catch(exception){
    console.log(exception)
}

function viewContacts(field) {
    let fieldContactMap = new Map();
    switch (field) {
        case "city":
            fieldContactMap = viewByCity();
            console.log("All contacts by city: ");
            console.log(fieldContactMap);
            break;
        case "state":
            fieldContactMap = viewByState();
            console.log("All contacts by state : ");
            console.log(fieldContactMap);
            break;
        default:
            throw "View Field : " + field + " is Invalid!";
    }
}
function viewByCity() {
    let cityMap = new Map();
    contactArray.forEach(contact => {
        if (cityMap.has(contact.city)) {
            cityMap.get(contact.city).push(contact);
        }
        else {
            cityMap.set(contact.city, [contact]);
        }
    });
    return cityMap;
}
function viewByState() {
    let stateMap = new Map();
    contactArray.forEach(contact => {
        if (stateMap.has(contact.state)) {
            stateMap.get(contact.state).push(contact);
        }
        else {
            stateMap.set(contact.state, [contact]);
        }
    });
    return stateMap;
}

// editContact("Kashif","Ansari");
// console.log(contactArray);
// deleteContact("Ahmed","Kidwai");
// console.log("Total Number of Contacts in the Address Book: "+getNumberOfContacts());
// console.log("Contacts for a particular city-");
// console.log(getContactForCity("Bengaluru"));
// console.log("Contacts for a particular State-");
// console.log(getContactForState("Uttar Pradesh"));
// console.log("Number of persons in Lucknow city is "+countForCity("Lucknow"));
// console.log("Number of persons  in Karnataka state is "+countForState("Karnataka"));
// sortByContactName();
// console.log("After sorting by name: ");

sortByZipCode();
console.log("After sorting by zip code: ");
console.log(contactArray);

sortByCityName();
console.log("After sorting by city name: ");
console.log(contactArray);

sortByStateName();
console.log("After sorting by state name: ");
console.log(contactArray);