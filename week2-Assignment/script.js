const videoButton = document.getElementById("videoButton");
const celebrityVideo = document.getElementById("celebrityVideo");
const tableButton = document.getElementById("tableButton");
const movieTable = document.getElementById("movieTable");
const titleInput = document.getElementById("titleInput");
const yearInput = document.getElementById("yearInput");
const trivia = document.getElementById("trivia");

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
  if (value3 === 'B' || value3 === 'b' || value3 ==== 'D' || value3 === 'd') {
    alert("Correct!");
  } else {
    alert("Incorrect, Please try again");
    triviaFunc();
  }

}

trivia.addEventListener("click", function(){
  triviaFunc();
});

videoButton.addEventListener("click", function(){
  const srkImage = document.getElementById("celebrityPic")
  srkImage.classList.toggle("displayClass");
});

tableButton.addEventListener("click", function(){
  const row = movieTable.insertRow(1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerHTML = titleInput.value;
  cell2.innerHTML = yearInput.value;
  resetInputValues();
});

resetInputValues = () => {
  titleInput.value = null;
  yearInput.value = null;
};
