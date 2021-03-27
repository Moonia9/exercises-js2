/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  const content = document.querySelector("#content");
  arrayOfPeople.forEach(value => {
    const firstHeading = document.createElement("h1");
    firstHeading.textContent = value.name;
    content.appendChild(firstHeading);

    const secondHeading = document.createElement("h2");
    secondHeading.textContent = value.job;
    content.appendChild(secondHeading);
  });
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  const content = document.querySelector("#content");
  const ul = document.createElement("ul");
  shopping.forEach(product => {
    const li = document.createElement("li");
    li.textContent = product;
    ul.appendChild(li);
   
  });
  content.appendChild(ul);
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    1.- For each book, create a <p> element with the book title and author and append it to the page.
    2.- Use a <ul> and <li> to display the books.
    3.- Add an <img> to each book that links to a URL of the book cover.
    4.- Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  //3.
  let firstBook = books[0];
  firstBook.img = "https://miro.medium.com/max/1200/1*Qo27inBKBKY4Q4Pgk5KkbQ.png";
  let secondBook = books[1];
  secondBook.img = "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg";
  let thirdBook = books[2];
  thirdBook.img = 'https://m.media-amazon.com/images/I/41uPjEenkFL._SX260_.jpg';

  //1.
  let content = document.querySelector("#content");
  const h1 = document.createElement("h1");
  h1.textContent = "Book list";
  content.appendChild(h1);

  const flexboxContent = document.createElement("div");
  content.appendChild(flexboxContent);
  //2.
  const ul = document.createElement("ul");
  flexboxContent.appendChild(ul);
  ul.style.display = "flex";
  ul.style.justifyContent = "space-around";

  //1.
  books.forEach(item => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = item.title + " - " + item.author; 
    li.appendChild(p);
    const img = document.createElement("img");
    //style
    img.style.height = "260px";
    img.style.width = "200px";
    img.style.margin = "10px";
    img.src = item.img;
    // or using the SET ATTRIBUTE : img.setAttribute("src", item.url)
    li.append(img);
   //4.
  //  if(item.alreadyRead === true){
  //   item.backgroundColor = "green";
  // } else {
  //   item.backgroundColor = "red";
  // }
   li.style.backgroundColor = item.alreadyRead ? "green" : "red";
   ul.appendChild(li);
  
});
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
