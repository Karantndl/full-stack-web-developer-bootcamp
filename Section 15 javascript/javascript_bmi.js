function bmiCalculator(weight, height) {
  var calculation = weight / (height * height);

  if (calculation < 18.5) {
    console.log(
      "Your BMI is " + Math.round(calculation) + ", so you are underweight.",
    );
  } else if (calculation > 18.5 && calculation < 24.9) {
    console.log(
      "Your BIM is " + Math.round(calculation) + ", so you have normal weight",
    );
  } else {
    console.log(
      "Your BMI is " + Math.round(calculation) + ", so you are overweight",
    );
  }
  return calculation;
}

var bmi = bmiCalculator(65, 1.8);

