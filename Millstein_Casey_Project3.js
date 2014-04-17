// Casey Millstein
// SDI1404
// Project 3


var caseyMillstein
var electricGuitars = ["Les Paul", "SG", "Flying V", "Firebird"]
var acousticGuitars = ["Jumbo", "Small Body", "Square Shoulder", "Mandolin"]


console.log("Time to go to Guitar Center!")
guitarQuestion = window.prompt('What guitar should I get?', 'Gibson/Fender');
var gibsonGuitar = procedureFunction(guitarQuestion);

if (gibsonGuitar) {
    guitarConfirm = window.confirm('Should I get an electric or acoustic?');




// JSON

var jsonGuitar = {
	"guitars": [
		{
			"brand": Gibson,
			"model": Les Paul,
			"type": Electric,
			"cost over $2500.00?": true
		},
		{
			"brand2": Gibson,
			"model": SG,
			"type": Electric,
			"cost over $2500.00?": true

		},
		{
			"brand3": Fender,
			"model": Stratocaster,
			"type": Electric,
			"cost over $2500.00?": true
		},
		{
			"brand4": Yamaha,
			"model": APX500,
			"type": Acoustic,
			"cost over $2500.00?": false
		},
		{
			"brand5": Ibanez,
			"model": Prestige,
			"type": Electric,
			"cost over $2500.00?": false
	]
};