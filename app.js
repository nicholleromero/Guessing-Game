  var userName = prompt("Where am I from?");
  if(userName.toLowerCase() === "Portland".toLowerCase()){
    document.getElementById("newUser").innerHTML = userName+"<img src=http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=115001147 width=30>";
    document.getElementById("newUser").style.color = "green";
  } else {
    document.getElementById("newUser").innerHTML = userName+"<img src=http://data.whicdn.com/images/103774031/superthumb.jpg width=30>";
    document.getElementById("newUser").style.color = "red";
  };

  var place = prompt("What's my favorite animal?");
  if(place.toLowerCase() === "Elephant".toLowerCase()){
    document.getElementById("homeTown").innerHTML = place+"<img src=http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=115001147 width=30>";
    document.getElementById("homeTown").style.color = "green";
  } else {
    document.getElementById("homeTown").innerHTML = place+"<img src=http://data.whicdn.com/images/103774031/superthumb.jpg width=30>";
    document.getElementById("homeTown").style.color = "red";
  };

  var animal = prompt("What is my favorite sport?");
  if (animal.toLowerCase() === "Skiing".toLowerCase()) {
    document.getElementById("favAnimal").innerHTML = animal+"<img src=http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=115001147 width=30>";
    document.getElementById("favAnimal").style.color = "green";
  } else {
    document.getElementById("favAnimal").innerHTML = animal+"<img src=http://data.whicdn.com/images/103774031/superthumb.jpg width=30>";
    document.getElementById("favAnimal").style.color = "red";
  };


/*
  document.getElementById("newUser").innerHTML = userName;
  document.getElementById("homeTown").innerHTML = place;
  document.getElementById("favAnimal").innerHTML = animal;

var score = 0;
var animal = prompt("Are sloths one of my favorite animals?");
if ((animal == "Yes") || (animal == "yes")) {
  alert("You know me too well.");
  score++;
}
else {
  alert("Sounds like you don't know me very well.");
};
var colorado = prompt("Did I live in Colorado for five years?")
if ((colorado == "Yes") || (colorado == "yes")) {
  alert("That is correct.");
  score++;
}
else {
  alert("I did live in Colorado for 5 years.");
};
var sport = prompt("Is my favorite sport tennis?")
if ((sport == "Yes") || (sport == "yes")) {
  alert("That's wrong, it's skiing.");
  score++;
}
else {
  alert("You know me all too well.");
};
alert("Thanks for playing!");


do {
var guess = prompt("Guess the number that I am currenly thinking of. It is beween 1 and 10.")
if (guess == 9) {
  alert("Woa! Mind Reader!");
  score++;
}
else if (guess < 9) {
  alert("Too low! Try again.");
}
else  {
  alert("Too high! Guess again.");
}
} while (guess != 9);
alert(username + ", the number of questions you got correct is: " + score + ".")
*/
