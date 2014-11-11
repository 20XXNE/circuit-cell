//magnets
var questions_magnets = [];
questions_magnets[0] = "How are magnetic fields created?";
questions_magnets[1] = "Which one is a magnet?";
questions_magnets[2] = "What are magnets made of?";
questions_magnets[3] = "Why is the Earth a magnet?";

var answers_magnets = [];
answers_magnets[0] = ["electrons flow in different directions.", "electrons flow from the north pole to the south pole.", "electrons flow like an ocean.", "magnet electrons have different qualities than normal materials."];
answers_magnets[1] = ["the earth", "a cat", "a plastic ruler", "your phone"];
answers_magnets[2] = ["iron", "steel", "both a and b", "electricity"];
answers_magnets[3] = ["the inner core is a magnet", "the inner core is solid metal", "the outer core has liquid iron in it", "the inner core has liquid iron in it"];

var correct_magnets = [];
correct_magnets[0] = 1;
correct_magnets[1] = 0;
correct_magnets[2] = 2;
correct_magnets[3] = 3;

//electricity 
var questions_electricity = [];
questions_electricity[0] = "What makes electricity?";
questions_electricity[1] = "Which is an example of electricity we can see?";
questions_electricity[2] = "How many types of currents are there?";
questions_electricity[3] = "What is the difference between CONDUCTORS and INSULATORS?";
questions_electricity[4] = "What is the formula for finding POWER?";

var answers_electricity = [];
answers_electricity[0] = ["friction", "the charges of protons and electrons", "the flow of electrons", "protons and neutrons"];
answers_electricity[1] = ["lightning", "a light bulb", "an outlet", "a chocolate bar"];
answers_electricity[2] = ["4", "2", "6", "1"];
answers_electricity[3] = ["insulators protect, conductors do not", "conductors make music, insulators keep the music out", "insulators trap heat, conductors do not", "insulators are for movies, conductors are for music"];
answers_electricity[4] = ["e=mc^2", "x^2+2x+4", "p = cv", "3.14159"];
    
var correct_electricity = [];
correct_electricity[0] = 2;
correct_electricity[1] = 0;
correct_electricity[2] = 1;
correct_electricity[3] = 0;
correct_electricity[4] = 2;

//circuits
var questions_circuits = [];
questions_circuits[0] = "What is a circuit?";
questions_circuits[1] = "What do circuits need to work?";
questions_circuits[2] = "What does a printed circuit board do?";
questions_circuits[3] = "What is the difference between PASSIVE and ACTIVE components?";
questions_circuits[4] = "Which one needs a circuit?";

var correct_circuits = [];
correct_circuits[0] = 3;
correct_circuits[1] = 1;
correct_circuits[2] = 0;
correct_circuits[3] = 3;
correct_circuits[4] = 2;
var totalCorrect = 0;
function questionCheck(radio, subject, quesNum){
    var radioGroup = document.getElementsByName(radio), i;
    for (i = 0; i < radioGroup.length; ++i) {
            if (radio[i].checked == true) {
                var answer = radio[i].value;
                console.log(answer);
            }
        //break;
    }
    if (answer == subject[quesNum]){
        //jquery...
        totalCorrect++;
        console.log(totalCorrect);
    }
    else {
        //jquery
    }
}
