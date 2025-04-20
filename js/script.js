// Date Show

function showDate(){
	document.getElementById('sd').innerHTML = Date();
}

// Show Text

function showText(){
	document.getElementById('st').innerHTML = "What's up, barling? 😏";
} 

// Changing text

function textChange(){
	document.getElementById('tc').innerHTML = "Please don't look at me😶‍🌫️";
}

// on and off

function trunOff(){
	document.getElementById('img').src = "images/off.gif";
}

function trunOn(){
	document.getElementById('img').src = "images/on.gif";
}

// change text color

function changeColor(){
	document.getElementById('cc').style.color = "red";
}

// change text color

function displayNone(){
	document.getElementById('cd').style.display = "none";
}

function displayBlock(){
	document.getElementById('cd').style.display = "block";
}

// InnerText

// function innerText()
	document.getElementById('ite').innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

	// change text color

function varOutPut(){
	var varoutput = "It wasn't me.😶‍🌫️"
	document.getElementById('vop').innerHTML=varoutput;
}