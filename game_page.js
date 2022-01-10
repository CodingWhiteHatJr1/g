Books = localStorage.getItem("player-1");
Reading = localStorage.getItem("player-2");

Books_score = 0;
Reading_score = 0;

document.getElementById("Books").innerHTML = Jason + " : ";
document.getElementById("Reading").innerHTML = Piper + " : ";

document.getElementById("Books_score").innerHTML = Jason_score;
document.getElementById("Reading_score").innerHTML = Piper_score;

document.getElementById("Question_turn").innerHTML = "Question turn : " + Jason;
document.getElementById("Answer_turn").innerHTML = "Answer turn : " + Piper;

function send()
{
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);
question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
input_box = "<br>Answer: <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-warning' onclick='check()'>Check</button>";
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";

}