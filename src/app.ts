const firstName = "James";
const secondName = "Gomez";

const fullName = `${firstName} ${secondName}`;

type Person = {
    firstName: string;
    secondName: string;
    dateOfBirth?: Date;
};

const person : Person = {
    firstName: 'James',
    secondName: 'Gomez',
    dateOfBirth: new Date(1997, 7, 9)
};

// Arrow functions
const sayHelloToPerson = (p: Person) => {
    // Body of method
    // DRY
    console.log(`Hello ${p.firstName} ${p.secondName}`)
};

sayHelloToPerson(person);

class PersonGreeter {
   constructor(private firstName: string, private secondName: string, private dateOfBirth: string){}
};