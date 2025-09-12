var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
  var numberOfPeople = names.length;
  var randomPersonPossition = Math.floor(Math.random() * numberOfPeople); //here we created random number first,
  //then we multiple the random number by "names" it will input the number of item in list because of length we used above
  // then we store that ramdon number in randomPersonPossition

  var randomPerson = names[randomPersonPossition]; //here we used name to get access the list of arreys and then
  // we have randomPersonPossition which will give us a random number to choose a random person

  return randomPerson + " is going to buy lunch today. ";
}

console.log(whosPaying(names));
