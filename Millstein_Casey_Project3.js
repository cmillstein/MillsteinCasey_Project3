// Casey Millstein
// SDI1404
// Project 3


// Arrays
var electricGuitars = ["Les Paul", "SG", "Flying V", "Firebird"];
var acousticGuitars = ["Jumbo", "Small Body", "Square Shoulder", "Mandolin"];

function procedureFunction(result) {
    if(result === 'yes') {
        return electricGuitars;
    } else {
        return null;
    }
}

function getElementString(indexOfArray, Array) {
    var elementString =  Array[indexOfArray];
    return elementString;
}

var index = 2;

var resultString =  getElementString(index, electricGuitars);



console.log("The element with index " + index + " is : " + resultString);

console.log("Its time to go look for a new guitar!");
guitarQuestion = window.prompt('Should I get an electric guitar?', 'yes/no');

if(guitarQuestion === 'null') {
    console.log('Selected not to buy an electric guitar');
} else {
   for(var i=0; i < guitarQuestion.length; i++) {
       console.log("Selection " + i + " " + electricGuitars[i]); 
   } 
}


var buyElectric = procedureFunction(guitarQuestion);
if (buyElectric) {
    guitarConfirm = window.confirm('Should I get an Acoustic guitar?');
}
else
{
window.prompt("You can't buy the Guitar without money");
}

if (guitarQuestion === true){
	console.log("Lets go get that electric guitar!");
}

// Number Function and math
function calculateTax(initialPrice,taxAdded){
    return initialPrice * taxAdded;
}

// JSON

jsonGuitar = {
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

// Nested loops

if(jsonGuitar.hasOwnProperty('guitars')){
    if(jsonGuitar.guitars.length > 0) {
        console.log('The number of guitars in the given set is: ' + jsonGuitar.guitars.length );
    }
} else {
    console.log("The data format is not correct.");
}


//takes in JSON, returns boolean
function booleanFunction(data){
    return (data.type == "Electric");
}

//Checking for electric guitars and displaying them
var electricGuitarSet = [];
function getElectricGuitars(dataSet) {

    for(var j=0; j < dataSet.guitars.length; j++) {
        var isElectric = booleanFunction(dataSet.guitars[j]);
        if(isElectric) {
            electricGuitarSet.push(dataSet.guitars[j]);
            console.log('Adding element: ' + dataSet.guitars[j]);
        } else {
            console.log('This is not an electric guitar');
        }
    }
    
    //Display the electric guitars 
    var guitarIterator = 0;
    while(guitarIterator < electricGuitarSet.length) {
        
        console.log('Guitar model : ' + electricGuitarSet[guitarIterator].model + '\n');
        
        guitarIterator++;
    }
    
}
getElectricGuitars(jsonGuitar);



//input is an array and string, output is an array
function returnOnlyOneModel(model,input){
    var output = [];
    for(var i = 0; i < input.length;i++){
        console.log('Checking for matching model ' + input[i].model);
        if(input[i].model === model){
            //add it to our array
            output.push(input[i]);
        }
    }
    return output;
}

var output = returnOnlyOneModel('Stratocaster', jsonGuitar.guitars);

for(var k=0; k < output.length; k++) {
    console.log("Guitar model :: " + output[k].model);
}
