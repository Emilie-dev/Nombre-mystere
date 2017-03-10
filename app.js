var solution = Math.floor(Math.random() * 4);
console.log(solution);


for (var i = 3   ;     i > 0    ;   i--) {


	var response = prompt("Choisir un nombre entre 1 et 3.");
	console.log(response);

	if (response == solution) {
	console.log("Code accepted!");
	break;                                                                                           
	}

	else if (response < solution)  {
	console.log("Trop petit!");
	}

	else {
	console.log("Trop grand!");
	}
}


if (i==0) {
console.log("Erreur!");
}

else {
console.log("GAGNÉ!");
}
