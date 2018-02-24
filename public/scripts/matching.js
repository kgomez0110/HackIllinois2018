function matching(answers) {
  var matchOutput = [];
  var location, matchingstrings, best;
  var bestcount = 0;

  locations = returnDict();
  console.log(locations);

  
  if(answers.length !== locations.keys[0].length) {
    console.log('Something wrong with answers and location array.');
  } else {
    locations.keys.forEach((index) => {
      count = 0;
      location = locations.keys[index];
      matchingstrings = locations[index];
      matchingstrings.forEach((answer) => {
        if(answers.indexOf(answer) !== -1) {
          count++;
        }
      })
      if(count > bestcount) {
        matchOutput = [];
        matchOutput.push(location);
      }
      if(count === bestcount) {
        matchOutput.push(location);
      }
    })
  }

  return matchOutput;
}
