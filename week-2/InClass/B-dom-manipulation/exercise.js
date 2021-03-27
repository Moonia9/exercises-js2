/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
//1.
const pElements = document.querySelectorAll("p")
//pElements.forEach(p => p.style.fonSize = "10px")
console.log(pElements);

//2.

const firstDivElement = document.querySelector(".site-header");
console.log(firstDivElement);


//3.
const jumbotronElement = document.querySelector(".jumbotron-text");
console.log(jumbotronElement);


//4.
const pElementsContainedPrimaryContent = document.querySelectorAll(".primary-content p");
console.log(pElementsContainedPrimaryContent);


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const myButton = document.querySelector("#alertBtn");
myButton.addEventListener("click", greetPopUp);

function greetPopUp(){
    alert("Thanks for visiting Bikes for Refugees!");
}
//OR writing it in one line 
// document.querySelector("#alertBtn").addEventListener("click", () => alert("Thanks for visiting Bikes for Refugees!)); */


/*Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const btnChangeColor = document.querySelector("#bgrChangeBtn");
btnChangeColor.addEventListener("click", changeColorBtn);

function changeColorBtn() {
    let body = document.querySelector("body");
    btnChangeColor.style.backgroundColor = "lightGrey";
    body.style.backgroundColor = "lightPink";
    //or just writing document.body.style.backgroundColor = "lightPink";
}
//OR writing it in one line
/* document.querySelector("#bgrChangeBtn").addEventListener("click" , changeColorBtn) */


/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
const btnAddsAParagraph = document.querySelector("#addTextBtn");
btnAddsAParagraph.addEventListener("click", addedAParagraph);

function addedAParagraph () {
   const p = document.createElement("p");
   p.textContent = "Add some text’ button, a new paragraph should be added inside the section that says LEARN MORE";
   document.querySelector("#mainArticles").appendChild(p);
}


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

document.querySelector("#largerLinksBtn").addEventListener("click", () => {
    document.querySelectorAll("a").forEach(a => a.style.fontSize = "50px");
})


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

document.querySelector("#addArticleBtn").addEventListener("click", addedAnotherParagraph);

function addedAnotherParagraph () {
   const p = document.createElement("p");
   const input = document.querySelector(".form-control.addArticle")
   p.textContent = input.value
   document.querySelector("#mainArticles").appendChild(p);
   input.value = "";
}


/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
const btnChangeMultiColor = document.querySelector("#bgrChangeBtn");
btnChangeMultiColor.addEventListener("click", changeMultiColor);

const colors = ["lightGrey", "pink", "green", "grey", "purple"];
// function changeMultiColor() {
//     const currentColor = document.body.style.backgroundColor;
//     const indexCurrent = colors.findIndex(c => c === currentColor)
//     const nextColor = colors[indexCurrent + 1] || colors[0]
//     document.body.style.backgroundColor = nextColor;
    
// }
let i = 0;
const changeBtn = document.querySelector("#bgrChangeBt");
changeBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = colors[i];
    i < colors.length - 1 ? i++ : i = 0
});