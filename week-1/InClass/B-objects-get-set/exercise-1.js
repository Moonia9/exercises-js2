/*
    Console.log the values of each property of "kitten"
*/

var kitten = {
    ageMonths: 3,
    isFemale: true,
    furColour: "brown"
};

// YOUR CODE HERE
console.log(kitten.ageMonths);
console.log(kitten.isFemale);
console.log(kitten.furColour);

//OR
console.log(kitten["ageMonths"]);
console.log(kitten["isFemale"]);
console.log(kitten["furColour"]);

//If I want to add another property
kitten.eyeColour = "green";
console.log(kitten);