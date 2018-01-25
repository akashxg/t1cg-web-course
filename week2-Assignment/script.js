const videoButton = document.getElementById("videoButton");
const celebrityVideo = document.getElementById("celebrityVideo");
const tableButton = document.getElementById("tableButton");
const movieTable = document.getElementById("movieTable");
const titleInput = document.getElementById("titleInput");
const yearInput = document.getElementById("yearInput");
const trivia = document.getElementById("trivia");
//create celebrityVideo, table Button, movieTable, titleInput, yearInput and trivia variables for DOM manipulation using above code as reference


triviaFunc = () => {
  alert("Please enter the letter for the corresponding answer.");
  const value1 = prompt("What was Shah Rukh Khan's first movie?\nA: Deewana\nB: Kuch Kuch Hota Hai\nC: Dilwale Dulhania Le Jayenge");
  if(value1 === 'A' || value1 === 'a'){
    alert("Correct!");
  } else {
    alert("Incorrect, Please try again.")
    triviaFunc();
  }

  const value2 = prompt("How old is Shah Rukh Khan?\nA: 45\nB: 38\nC: 52" );
  if (value2 === 'C' || value2 === 'c') {
    alert("Correct!");
  } else {
    alert("Incorrect, Please try again.");
    triviaFunc();
  }

  const value3 = prompt("What 2 names are most prevelant in his movies?\nA: Akash\nB: Rahul\nC: Aman\nD: Raj");
  //use value collected from prompt, if else statements, operators, and alerts to handle trivia question
  if (value3 === 'B' || value3 === 'b' || value3 ==== 'D' || value3 === 'd') {
    alert("Correct!");
  } else {
    alert("Incorrect, Please try again");
    triviaFunc();
  }

}

trivia.addEventListener("click", function(){
//call triviaFunc
triviaFunc();
});

videoButton.addEventListener("click", function(){
//toggle celebrityPic and celebrityVideo classes with button functionality
});

tableButton.addEventListener("click", function(){
  const row = movieTable.insertRow(1);
  const cell1 = row.insertCell(0);
  // create variable to insert new cell similar to code above
  cell1.innerHTML = titleInput.value;
  // add yearInput value to cell you just created
  //call resetInputValues function;
});

resetInputValues = () => {
  //define function to reset input values
};
