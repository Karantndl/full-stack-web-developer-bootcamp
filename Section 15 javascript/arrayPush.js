var outPut = [];
var count = 1;

function fizzBuzz() {
  outPut.push(count);
  count += 1;

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
    count += 1;
  }

  console.log(outPut);
}
