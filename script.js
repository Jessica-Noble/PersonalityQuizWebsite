/*Add your JavaScript here*/

/*stores the scores for each end output */
var morningScore = 0;
var nightScore = 0;

/*stores overall question count*/
var questionCount = 0;

/*stores our buttons*/
var restart = document.getElementById("restart")

var q1a1 = document.getElementById("q1a1")
var q1an2 = document.getElementById("q1an2")

var q2a1 = document.getElementById("q2a1")
var q1a2 = document.getElementById("q2a2")

var q3a1 = document.getElementById("q3a1")
var q1a2 = document.getElementById("q3a2")

/*Listens for click of buttons and will call function when clicked*/

restart.addEventListener("click",restartquiz);

q1a1.addEventListener("click",morning);
q1a1.addEventListener("click",grey1);
q1an2.addEventListener("click",night);
q1an2.addEventListener("click",grey1);

q2a1.addEventListener("click",night);
q2a1.addEventListener("click",grey2);
q2a2.addEventListener("click",morning);
q2a2.addEventListener("click",grey2);

q3a1.addEventListener("click",morning);
q3a1.addEventListener("click",grey3);
q3a2.addEventListener("click",night);
q3a2.addEventListener("click",grey3);

/*functions*/

function grey1(){
  q1a1.style.color = "rgb(53, 156, 122)";
  q1an2.style.color = "rgb(53, 156, 122)";  
  q1a1.disabled = true;
  q1an2.disabled = true;
}

function grey2(){
  q2a1.style.color = "rgb(53, 156, 122)";
  q2a2.style.color = "rgb(53, 156, 122)";

  q2a1.disabled = true;
  q2a2.disabled = true;
}

function grey3(){
  q3a1.style.color = "rgb(53, 156, 122)";
  q3a2.style.color = "rgb(53, 156, 122)";

  q3a1.disabled = true;
  q3a2.disabled = true;
}

function morning(){
  morningScore+=1;
  questionCount+=1
  console.log("questionCount="+questionCount+" morningScore="+morningScore+" nightScore="+nightScore)
  if (questionCount ==3){
    console.log("The quiz is done");
    updateResult();
  }
}

function night(){
  nightScore+=1
  questionCount+=1
  console.log("questionCount="+questionCount+" morningScore="+morningScore+" nightScore="+nightScore)
  if (questionCount ==3){
    console.log("The quiz is done")
    updateResult()
    }
  }

function updateResult (){
  if (morningScore>nightScore){
    console.log("you are a morning person")
    document.getElementById("result").innerHTML = "You are a morning person";

  }
  else{
    console.log("you are a night person")
    document.getElementById("result").innerHTML = "You are a night person";
  }
}
function restartquiz (){
  document.getElementById("result").innerHTML = "You are a...";
  questionCount = 0;
  morningScore = 0;
  nightScore = 0;
  q1a1.style.color = "#FFFFFF";
  q1an2.style.color = "#FFFFFF";

  q1a1.disabled =false;
  q1an2.disabled =false;

  q2a1.style.color = "#FFFFFF";
  q2a2.style.color = "#FFFFFF";

  q2a1.disabled = false;
  q2a2.disabled = false;

  q3a1.style.color = "#FFFFFF";
  q3a2.style.color = "#FFFFFF";

  q3a1.disabled = false;
  q3a2.disabled = false;

}
