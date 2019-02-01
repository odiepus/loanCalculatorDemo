var x = Math.floor(Math.random() * 10);
var y = Math.floor(Math.random() * 10);

window.onload = load;

function load(){
  document.getElementById("op1").innerHTML = x;
  document.getElementById("op2").innerHTML = y;
}



document.getElementById("submission").addEventListener("click", addFunc);

function addFunc(e){
  var sum = x + y;
  var userAnswer = document.getElementById("answer").value;

  console.log(userAnswer);

  document.getElementById("userAnswer").innerHTML = userAnswer;
  
  if (sum == userAnswer){
    document.getElementById("correctAnswer").innerHTML = sum + " Correct!!!";
  }
  else{
    document.getElementById("correctAnswer").innerHTML = sum + " Incorrect.";
  }

  e.preventDefault();
}

document.getElementById("next").addEventListener("click", nextProblem);

function nextProblem(){
  var buttonText = document.getElementById("next").innerText;

  if(buttonText == "Next"){
    window.location.reload();
    document.getElementById("answer").value = "";
  }
}