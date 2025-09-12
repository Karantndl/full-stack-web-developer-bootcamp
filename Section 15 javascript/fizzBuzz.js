var outPut = [];
var count = 1;

function fizzBuzz() {
  while (count <= 100) {
    //used while loop to run it till 100
    outPut.push(count); // while loop will check if the count is less thn 100
    count += 1; //then it will excute the code inside curly bracket else it will run the code below

    if (count % 3 === 0 && count % 5 === 0) {
      var fizBuz = "fizzBuzz";
      outPut.push(fizBuz);
      count += 1;
    }

    if (count % 3 === 0) {
      var fizz = "fizz";
      outPut.push(fizz);
      count += 1;
    }

    if (count % 5 === 0) {
      var buzz = " buzz";
      outPut.push(buzz);
      count += 1; // this is very important else we wont be able to
      // exit the loop as it will incriment the count to 2
    }
  }

  console.log(outPut);
}

fizzBuzz();
