

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
	
function code() {
	var key = prompt('Enter a key that your friend knows. It cannot have repealting alphabets').split('');
	var li = prompt('Enter a sentence to code').split('');
  	var rows = li.length/key.length;
 	console.log(rows);
 	console.log(li);
 	console.log(key);	
 	var arr = new Array()

 	for (var i = 0; i < li.length; i++) {

		if (i<key.length) {
			arr.push(li[i]);
			console.log(arr)
		}	
		else {
			arr
		}
  }
console.log(arr.join(' '))
}