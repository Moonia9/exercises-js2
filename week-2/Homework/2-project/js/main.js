//Part 1
//Blue button
document.querySelector("#blueBtn").addEventListener("click", () => {
   document.querySelector(".jumbotron").style.backgroundColor = "#588fbd";
})
//OR
// const blueButton = document.querySelector("#blueBtn");
// blueButton.addEventListener("click", backgroundColorChange);

// function backgroundColorChange () {
//    const jumbotronColor = document.querySelector(".jumbotron");
//    jumbotronColor.style.backgroundColor = "#588fbd";
// }
document.querySelector("#blueBtn").addEventListener("click", () => {
   document.querySelector(".jumbotron .btn-primary").style.backgroundColor = "#ffa500";
   document.querySelector(".jumbotron .btn-secondary").style.backgroundColor = "black";
   document.querySelector(".jumbotron .btn-secondary").style.color = "white";
});

//Orange button
document.querySelector("#orangeBtn").addEventListener("click", () => {
   document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
   document.querySelector(".jumbotron .btn-primary").style.backgroundColor = "#5751fd";
   document.querySelector(".jumbotron .btn-secondary").style.backgroundColor = "#31b0d5";
   document.querySelector(".jumbotron .btn-secondary").style.color = "white";
});

//Green button
document.querySelector("#greenBtn").addEventListener("click", () => {
   document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";
   document.querySelector(".jumbotron .btn-primary").style.backgroundColor = "black";
   document.querySelector(".jumbotron .btn-secondary").style.backgroundColor = "#8c9c08";
});


// function changeColor (jumboBackground, primaryBackground, secondaryBackground, secondaryColor = "white") {
// }

//Part 2

document.querySelector('button[type="submit"]').addEventListener("click", (e) => {
   e.preventDefault() //we prevent the default action
   // console.log(e.target.textContent);
   // console.log(email.value.length > 0);
   // console.log(name.value.length > 0);
   // console.log(description.value.length > 0);

   const email = document.querySelector("#exampleInputEmail1");
   const name = document.querySelector("#example-text-input");
   const description = document.querySelector("#exampleTextarea");

   const isEmailValid = email.value.length > 0 ? "" : "red" && email.value.length.includes("@");
   const isNameValid =  name.value.length > 0;
   const isDescriptionValid = description.value.length > 0;

   email.style.backgroundColor = isEmailValid  ? "" : "red";
   name.style.backgroundColor = isNameValid ? "" : "red";
   description.style.backgroundColor = isDescriptionValid ? "" : "red";

   if(isDescriptionValid && isNameValid && isNameValid){
      alert("Thank you for filling out the form");
      email.value = "";
      name.value = "";
      description.value = "";
   }
   
   
})