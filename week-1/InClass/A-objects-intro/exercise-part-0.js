// /*

// Describe your own laptop as a JavaScript object

// Try to think of as many properties as you can!

// */

let laptop = {
    brand: "Lenovo",
    screenSize: 13,
    isTouchscreen: true,
  };

  let asusLaptop = {
    brand : "Asus ROG",
    screenSize : 27,
    isTouchscreen : false,
    color : "metallic",
    hasCamera : true,
  };
  console.log(asusLaptop);
  console.table(asusLaptop);



  //Methods
  function playMovie (){
    console.log("...playing your movie!")
  }
  //In order to be attached to my Object, I will put it AFTER the properties
  //So the object becomes:
  let asusLaptop = {
    brand : "Asus ROG",
    screenSize : 27,
    isTouchscreen : false,
    color : "metallic",
    hasCamera : true,
    playMovie : function (){
      console.log("...playing your movie!")
    },
    description : function(){
      console.log(`The name of the laptop brand is ${/*asusLaptop*/this.brand} and screen size is ${/*asusLaptop*/this.screenSize}`)
    },
  };

 console.log(asusLaptop.playMovie());