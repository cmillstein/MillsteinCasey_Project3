// Casey Millstein
// SDI1404
// Project 3


// Arrays
var electricGuitars = ["Les Paul", "SG", "Flying V", "Firebird"];
var acousticGuitars = ["Jumbo", "Small Body", "Square Shoulder", "Mandolin"];


console.log("Its time to go look for a new guitar!");
guitarQuestion = window.prompt('Should I get an electric guitar?', 'yes/no');
var buyElectric = procedureFunction(guitarQuestion);
if (buyElectric) {
    guitarConfirm = window.confirm('Do you have enough money for a Gibson?');
}
if (guitarQuestion === true){
	console.log("Lets go get that electric guitar!");
	
}

// JSON

var jsonGuitar = {
	"guitars": [
		{
			"brand": "Gibson",
			"model": "Les Paul",
			"type": "Electric",
			"cost over $2500.00?": true
		},
		{
			"brand2": "Gibson",
			"model": "SG",
			"type": "Electric",
			"cost over $2500.00?": true

		},
		{
			"brand3": "Fender",
			"model": "Stratocaster",
			"type": "Electric",
			"cost over $2500.00?": true
		},
		{
			"brand4": "Yamaha",
			"model": "APX500",
			"type": "Acoustic",
			"cost over $2500.00?": false
		},
		{
			"brand5": "Ibanez",
			"model": "Prestige",
			"type": "Electric",
			"cost over $2500.00?": false
		}
	]
};

//takes in JSON, returns boolean
function booleanFunction(data){
    return (data.type == "Electric");
}
//input is an array and string, output is an array
function returnOnlyOneModel(model,input){
    var output = [];
    for(var i = 0; i < input.length;i++){
        if(input[i].model == model){
            //add it to our array
            output.push(input[i]);
        }
    }
    return output;
}

