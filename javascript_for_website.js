$(document).ready(function() {
	dictionary = dicts['English']['Spanish']
	english_word_array = Object.keys(dictionary)
	var fetchRandom = function() {
	    var english_word = english_word_array[Math.floor(Math.random() * english_word_array.length)]
	    var spanish_word = dictionary[english_word]
	    return [english_word, spanish_word]
	}

	words = fetchRandom();
	$("#spanish_input").html(words[1])
	console.log(words[0], words[1]);
	$("#inputid").focus();
	$("#answerid").click(function() {
		$("#inputid").val('');
		var fetch = fetchRandom();
		$("#spanish_input").html(fetch[1])
	$("#ssanswerid").click(function myFunction() {
    	var table = document.getElementById("ALIGNMENT");
    	var row = table.insertRow(1);
    	var cell1 = row.insertCell(0);
    	var cell2 = row.insertCell(1);
    	cell1.innerHTML = "NEW CELL1";
    	cell2.innerHTML = "NEW CELL2";
	});
	});
});
