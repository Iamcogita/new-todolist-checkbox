type AllowedFirstNames = "Alex" | "David" | "Marina" | "Lily";


interface Person {
    firstName: AllowedFirstNames;
    lastName?: string;
    birthDate: Date | string | number;
}


function printPerson(person: Person) {
    console.log("first name", person.firstName);

    if (typeof person.birthDate === "number") {
        //....
    } else     if (typeof person.birthDate === "string") {
        //....
    } else {
        person.birthDate.toISOString()
    }
    
    // console.log('birthday', typeof person.birthDate === "string"? person.birthDate : person.birthDate.toISOString())
}






printPerson({firstName: "David", birthDate: "10-10-2202" });