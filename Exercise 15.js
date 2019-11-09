Exercise 15: Logic Challenge - Highest Score

function highestScore(students) {
var listClass = [];
var result = {};
  
  if (students.length === 0) {
    console.log('');
    return result;
  }
for (i = 0; i < students.length; i++) {
    var className = students[i].class;
    if (listClass.includes(className)) {
      continue;
    } 
    else {
      listClass.push(className);
    }
  }
  for (j = 0; j < listClass.length; j++) {
    var objStudents = {};
    var highest = 0;
    for (k = 0; k < students.length; k++) {
      if (listClass[j] === students[k].class && students[k].score > highest) {
        highest = students[k].score;
        objStudents.name = students[k].name;
        objStudents.score = students[k].score;
      }
      result[listClass[j]] = objStudents;
    }
  }
  console.log('');
  return result;
}

console.log(highestScore([{name: 'Dimitri', score: 90, class: 'foxes'}, {name: 'Alexei', score: 85, class: 'wolves'}, {name: 'Sergei', score: 74, class: 'foxes'}, {name: 'Anastasia', score: 78, class: 'wolves'}]));
console.log(highestScore([{name: 'Alexander', score: 100, class: 'foxes'}, {name: 'Alisa', score: 76, class: 'wolves'}, {name: 'Vladimir', score: 92, class: 'foxes'}, {name: 'Albert', score: 71, class: 'wolves'}, {name: 'Viktor', score: 80, class: 'tigers'}]));
console.log(highestScore([]));