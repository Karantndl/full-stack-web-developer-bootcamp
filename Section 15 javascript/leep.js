function leepYear(years) {
  if (years % 4 !== 0) {
    console.log("Not leap year.");
  } else if (years % 100 !== 0) {
    console.log("Leap year.");
  } else if (years % 400 !== 0) {
    console.log("Not leap year.");
  } else {
    console.log("Leap year.");
  }
}

leepYear(1989);
