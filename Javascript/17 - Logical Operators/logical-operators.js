// Logical Operators = Used to combine or manipulate boolean
//                     values (true or false)

//          AND = &&
//          OR = ||
//          NOT = !

// let temperature = 40;

/*
if(temperature > 0 && temperature <= 30){
    console.log("The weather is good.");        ('&&')
}
else{
    console.log("The weather is bad.");
}
*/
 
/*
if(temperature <= 0 || temperature > 30){       ('||')
    console.log("The weather is bad.");
}
else{
    console.log("The weather is good.");
}
*/

const isHot = true;

if(!isHot){
    console.log("It is cold.");
}
else{
    console.log("It is hot.");
}