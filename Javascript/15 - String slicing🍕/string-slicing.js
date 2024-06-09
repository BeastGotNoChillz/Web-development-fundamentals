// String Slicing = Creating a substring from a portion of
//                  another string. Eg, string.slice(start,end);

const fullName = "Aditya Bam";

// let firstName = fullName.slice(0, 6);
// let lastName = fullName.slice(7, 10);
// let firstCharacter = fullName.slice(0, 1);
// let secondCharacter = fullName.slice(1, 2);
// let lastCharacter = fullName.slice(-1);
// let secondlastCharacter = fullName.slice(-2);
    /*
    console.log(firstName);
    console.log(lastName);
    console.log(firstCharacter);
    console.log(secondCharacter);
    console.log(lastCharacter);
    console.log(secondCharacter);
    */

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
    /*
    console.log(firstName);
    console.log(lastName);
    */

const email = "adityabam069@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") +1);

    console.log(username);
    console.log(extension);