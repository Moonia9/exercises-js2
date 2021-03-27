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
   document.querySelector(".buttons .btn-primary").style.backgroundColor = "#ffa500";
   document.querySelector(".buttons .btn-secondary").style.backgroundColor = "black";
   document.querySelector(".buttons .btn-secondary").style.color = "white";
});

//Orange button
document.querySelector("#orangeBtn").addEventListener("click", () => {
   document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
   document.querySelector(".buttons .btn-primary").style.backgroundColor = "#5751fd";
   document.querySelector(".buttons .btn-secondary").style.backgroundColor = "#31b0d5";
   document.querySelector(".buttons .btn-secondary").style.color = "white";
});

//Green button
document.querySelector("#greenBtn").addEventListener("click", () => {
   document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";
   document.querySelector(".buttons .btn-primary").style.backgroundColor = "black";
   document.querySelector(".buttons .btn-secondary").style.backgroundColor = "#8c9c08";
});

//Part 2

const submitButton = document.getElementsByTagName("form").addEventListener("click", () => {
   
})