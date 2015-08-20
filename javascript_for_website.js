$(document).ready(function() {
	dictionary = dicts['English']['Spanish']
	english_word_array = Object.keys(dictionary)
	var original_spanish_word
	var original_english_word

	var fetchRandom = function() {
	    var english_word = english_word_array[Math.floor(Math.random() * english_word_array.length)]
	    var spanish_word = dictionary[english_word]
	    return [english_word, spanish_word]
	}

	words = fetchRandom();
	$("#spanish_input").html(words[1])
	original_spanish_word = words[1];
	original_english_word = words[0];

	$("#inputid").focus();
	$("#answerid").click(function() {
		var bla = $('#inputid').val();
		$("#inputid").val('');
		var fetch = fetchRandom();
		$("#spanish_input").html(fetch[1])

		var table = document.getElementById("ALIGNMENT");
    	var row = table.insertRow(2);
    	var cell1 = row.insertCell(0);
    	var cell2 = row.insertCell(1);
    	var cell3 = row.insertCell(2);
    	cell1.innerHTML = '<span class="BLUE BOLD">' + original_spanish_word + '</span>';
    	if (original_english_word === bla) {
    		cell2.innerHTML = '<span class="BLUE BOLD">' + bla + '</span>';
    	} else {
    		cell2.innerHTML = '<span class="RED Cross">' + bla + '</span>';
    	}
    	cell2.innerHTML = bla; 

    	cell3.innerHTML = "NEW CELL3";

    	original_spanish_word = fetch[1];
    });

});
