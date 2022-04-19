var vid = document.getElementById("myVideo");
var L = null


function setCurTime(i) { 
	// T = String((L[i][1]))
	// a = T.substring(0, 2)
	// b = T.substring(3, 5)
	// c = T.substring(6, 8)
	vid.currentTime= L[i][1];            //a*3600+ b*60 + c;
} 

function handleFiles(files) {
	// Check for the various File API support.
	if (window.FileReader) {
		// FileReader are supported.
		getAsText(files[0]);
	} else {
		alert('FileReader are not supported in this browser.');
	}
}
	
function getAsText(fileToRead) {
	var reader = new FileReader();
	// Handle errors load
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
	// Read file into memory as UTF-8      
	reader.readAsText(fileToRead);
}

function loadHandler(event) {
	var csv = event.target.result;
	processData(csv);             
}

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    while (allTextLines.length) {
        lines.push(allTextLines.shift().split(','));
    }
	console.log(lines);
	drawOutput(lines);
}


function drawOutput(lines){
	//Clear previous data
	L = lines


	document.getElementById("transcript").innerHTML = "";
	var div1 = document.createElement("div");
	for (var i = 0; i < lines.length; i++) {
		var start_time = lines[i][1];
		var para = document.createElement("span");
		var s1 = "<span onClick='setCurTime("+i+")'> "+lines[i][0]+"  <br> </span>"
		para.innerHTML = s1
       	div1.appendChild(para);   
	}
	document.getElementById("transcript").appendChild(div1);


}


function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Canno't read file !");
	}
}

//if your csv file contains the column names as the first line
// function processDataAsObj(csv){
//     var allTextLines = csv.split(/\r\n|\n/);
//     var lines = [];
	
//     //first line of csv
//     var keys = allTextLines.shift().split(',');
	
//     while (allTextLines.length) {
//         var arr = allTextLines.shift().split(',');
//         var obj = {};
//         for(var i = 0; i < keys.length; i++){
//             obj[keys[i]] = arr[i];
// 	}
//         lines.push(obj);
//     }
//         console.log(lines);
// 	drawOutputAsObj(lines);
// }


//draw the table, if first line contains heading
// function drawOutputAsObj(lines){
// 		//Clear previous data
// 	document.getElementById("output").innerHTML = "";
// 	var table = document.createElement("table");

// 	//for the table headings
// 	var tableHeader = table.insertRow(-1);
//  	Object.keys(lines[0]).forEach(function(key){
// 	 		var el = document.createElement("TH");
// 			el.innerHTML = key;		
// 			tableHeader.appendChild(el);
// 		});	
	
// 		//the data
// 		for (var i = 0; i < lines.length; i++) {
// 				var row = table.insertRow(-1);
// 		Object.keys(lines[0]).forEach(function(key){
// 			var data = row.insertCell(-1);
// 			data.appendChild(document.createTextNode(lines[i][key]));
// 		});
// 	}
// 	document.getElementById("output").appendChild(table);
// }

