console.log("Welcome to the Address Book !");
const firstNameRegex=new RegExp("^[A-Z][a-z]{2,}");
const lastNameRegex=new RegExp("^[A-Z][a-z]{2,}");
const addressRegex=new RegExp("[a-z]{4,}");
const cityRegex=new RegExp("[a-z]{4,}");
const stateRegex=new RegExp("[a-z]{4,}");
const zipRegex=new RegExp("^[0-9]{6}$");
const phoneRegex=new RegExp("[0-9]{2}[\\s][0-9]{10}");
const emailRegex=new RegExp("^[a-z0-9A-Z]+(([\\.+-][a-z0-9]{1,})?)+@[a-z0-9A-Z]+\\.([a-z]{2,6})+((\\.[a-zA-Z]{2,6})?)$");

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
        else throw "invalid first name ";
    }
    get firstName(){
        return this._firstName;
    }
    set lastName(lastName){
        if(lastNameRegex.test(lastName))
            this._lastName=lastName;
        else throw "invalid last name";
    }
    get lastName(){
        return this._lastName;
    }
    set address(address){
        if(addressRegex.test(address))
            this._address=address;
        else throw "invalid address";
    }
    get address(){
        return this._address;
    }
    set city(city){
        if(cityRegex.test(city))
            this._city=city;
        else throw "invalid city name";
    }
    get city(){
        return this._city;
    }
    set state(state){
        if(stateRegex.test(state))
            this._state=state;
        else throw "invalid state";
    }
    get state(){
        return this._state;
    }
    set zip(zip){
        if(zipRegex.test(zip))
            this._zip=zip;
        else throw "invalid zip code";
    }
    get zip(){
        return this._zip;
    }
    set phoneNumber(phoneNumber){
        if(phoneRegex.test(phoneNumber))
            this._phoneNumber=phoneNumber;
        else throw "invalid phone number";
    }
    get phoneNumber(){
        return this._phoneNumber;
    }
    set email(email){
        if(emailRegex.test(email))
            this._email=email;
        else throw "invalid email";
    }
    get email(){
        return this._email;
    }
    
}
contact=new Contact("Kashif","Ansari","Chowk","Lucknow","Uttar Pradesh",226003,"91 9598252500","matrixkashif@gmail.com");
console.log(contact.toString());