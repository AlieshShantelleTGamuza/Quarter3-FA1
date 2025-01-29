var nickname = "Karen";
var heightInInches = 62;
var weightInKg = 50;


var feet = Math.floor(heightInInches / 12);
var inches = heightInInches % 12;

var weightInLbs = (weightInKg * 2.20462);

alert("Name: " + nickname + "\nHeight: " + feet + "\'" + inches + "\"\nWeight: " + weightInLbs + " lbs");