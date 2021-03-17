/*
    The following code contains syntax errors - try and fix them!

    Once you fix them, run this file, it should output the correct values!
*/

var phone = {
    brand:'iPhone',
    model : 'iPhone X',
    launchYear: 2017,
    isUnlocked: true,
    appInstalled : ["zoom", "vscode", "slack"],
    techSpecs : {
        memory : 12,
        colour : "white"
    }
};

var phoneBrand = phone.brand;
var phoneLaunchYear = phone["launchYear"];
console.log(typeof phone.appInstalled); //object
console.log(typeof phone.techSpecs); //object

// DO NOT MODIFY BELOW THIS LINE

console.log(phoneBrand);
console.log(phoneLaunchYear);

// it should output:
// iPhone
// 2017