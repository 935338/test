

function triangle() {

	var a1 = parseInt(prompt("Enter the frist angle"));
	
	if (a1>0 && a1<179) {
		var a2 = parseInt(prompt("Enter the second angle"));
		var a3 = 180 - (a1+a2);		
		alert("The third angle is" + " " + a3);
	}
	
	else {
		alert("you typed something wrong, so re-enter the first angle as an integer")
		var a1 = parseInt(prompt("Enter the frist angle"));
		var a2 = parseInt(prompt("Enter the second angle"));
		var a3 = 180 - (a1+a2);		
		alert("The third angle is" + " " + a3);

	}
}

function year() {
	var inputYear = parseInt(prompt("Enter the year"));

	if(inputYear>0 ) {
		var century = Math.ceil(inputYear/100);
		alert("the century of" + " " + inputYear+ " " + "is" + " " + century);
	}

	else {
		alert("please enter a year as an integer");
	 }
}


function tenfour() {

	for (let i=1;i<=100;i++) {
		if(i%4==0 && i%10==0) {
			console.log("tenfour");
		}
		else if (i%4==0){
			console.log("Four");
		}
		else if (i%10==0) {
			console.log("Ten");
		}
		else{
			console.log(i);
		}
	}
}

function login() {
	let userName = prompt("enter username")
	let password = prompt("enter password")
	if (userName.toLowerCase() == "shivani" && password=="123") {
		alert("true")
	}
	else {
		alert("false")
	}
}

function altCaps() {
	let string_input = prompt("what's your favourite sentence?")
	let string_output = ""
	for (let i=0; i<string_input.length;i+=2) {
		let x = i+1
	string_output += string_input[i].toUpperCase();
	string_output += string_input[x].toLowerCase();
	}
	console.log(string_output);
}

function len() {
	let stringInput = prompt("enter a word")
	console.log(stringInput.length);
}
//vegenere cipher- the reason I chose this: people can choose their own key and its simple to code
function code(plain, key) {
	var plain = prompt('enter a word/ sentence to code')
	var key = prompt('Enter a Keyword')
	//I add a condition in case the person enters a null value
	if (plain !== '' && key !== '' ) {
		var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!?,:;'/ ";
		var final = '';
		for (var i = 0; i < plain.length; i++) {
			var a = alphabet.indexOf(plain.charAt(i)) //this finds the index of the character in index i of plain in alphabet variable
			var b = alphabet.indexOf(key.charAt(i % key.length)) //this finds the index of the character in index i of key in alphabet variable
			final += alphabet.charAt((a + b) % alphabet.length);
		}
		console.log(final);
	}
	else {
		alert('please do not enter a null value');
	}
}

function decode(plain, key) {
	var plain = prompt('Enter the coded message')
	var key = prompt('What is the secret key?')
	if (plain !== '' && key !== '' ) {
		var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!?,:;'/ ";
		var initial = "";
		for (var i = 0; i < plain.length; i++) {
			var c = alphabet.indexOf(plain.charAt(i)) + alphabet.length
			var d = alphabet.indexOf(key.charAt(i % key.length))

			initial += alphabet.charAt((c - d) % alphabet.length);
		}
		console.log(initial);
	}
	else {
		alert('please enter your key and coded message again');
	}
}

