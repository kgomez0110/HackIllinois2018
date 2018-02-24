function matching(answers) {
  var matchOutput = [];
  var location, matchingstrings, count;
  var bestcount = 0;

  locations = returnDict();
  var locationkeys = Object.keys(locations);

  locationkeys.forEach((index) => {
    count = 0;
    matchingstrings = locations[index];
    matchingstrings.forEach((answer) => {
      if(answers.indexOf(answer) !== -1) {
        count++;
      }
    })
    if(count > bestcount) {
      bestcount = count;
      matchOutput = [];
      matchOutput.push(index);
    } else if(count === bestcount) {
      bestcount = count;
      matchOutput.push(index);
    }
  })
  return matchOutput;
}
