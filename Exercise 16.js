Exercise 16: Logic Challenge - Graduates

function graduates(students) {
var listClass = [];
var school = {};

for (i = 0; i < students.length; i++) { 
  var studentClass = students[i].class;
  if (listClass.includes(studentClass)) {
} 
else {
listClass.push(studentClass);
}
}

for (j = 0; j < listClass.length; j++) {
  var schoolKey = listClass[j];
  school[schoolKey] = [];
  }
  for (var key in school) {
	  for (k = 0; k < students.length; k++) {
		  var studentClass = students[k].class;
		  var studentScore = students[k].score;
		  if (studentScore > 75) {
			  if (studentClass === key) {
				  school[key].push(students[k]);
				}
				}
				}
			}
			for (var key in school) {
				for (l = 0; l < school[key].length; l++) {
					delete school[key][l].class;
					}
					}
					return school;
				}

console.log(graduates([{name: 'Dimitri', score: 90, class: 'foxes'}, {name: 'Alexei', score: 85, class: 'wolves'}, {name: 'Sergei', score: 74, class: 'foxes'}, {name: 'Anastasia', score: 78, class: 'wolves'}]));
console.log(graduates([{name: 'Alexander', score: 100, class: 'foxes'}, {name: 'Alisa', score: 76, class: 'wolves'}, {name: 'Vladimir', score: 92, class: 'foxes'}, {name: 'Albert', score: 71, class: 'wolves'}, { name: 'Viktor', score: 80, class: 'tigers'}]));
console.log(graduates([]));