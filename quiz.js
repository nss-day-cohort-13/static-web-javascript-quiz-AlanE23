console.log("Begin Program");

var prince // symbol used to create the tree, specified by the user

var willisT // height of the tree, specified by the user

var space = " "; // var for space to left of symbol chose

var planet // planet will be equal to the number of spaces needed

var numP // numP will be equal to the number of symbols needed

var buttonPress = document.getElementById("buttonID");

function submit () {
  var prince = document.getElementById("bSymbol").value;

  var willisT = document.getElementById("bHeight").value;

  console.log("symbol", prince);
  console.log("height", willisT);
}



for (var i = 1; i <= willisT; i++) {

  // assigning a value to planet, height of tree - i
  planet = willisT - i;

  // assigning a value to numP, proportional to i, always odd for symmetry
  numP = (2 * i) - 1;

  console.log("",space.repeat(planet) + prince.repeat(numP) + "\n");
}


console.log("End Program");


// empty movement() variable that becomes a function

// "pass" arguement inside a function