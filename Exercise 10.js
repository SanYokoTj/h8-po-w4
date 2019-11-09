Exercise 10: Logic Challenge - Change Me!

function changeMe(arr) {
var person = {};
var dataPerson = '';

for (i = 0; i < arr.length; i++) {
  console.log(i + 1 + '.' + arr[i][0] + ' ' + arr[i][1] + ' :');
  person.firstName = arr[i][0];
	person.lastName = arr[i][1];
	person.gender = arr[i][2];
	if (arr[i][3] === undefined || arr[i][3] > 2019) {
    person.age = 'Invalid Birth Year';
		} 
    else {
      person.age = 2018 - arr[i][3];
		}
		console.log(person);
	}

	if (arr[0] === undefined) {
		console.log('');
	}
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
changeMe([]);