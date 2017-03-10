var solution = Math.floor(Math.random() * 4);
console.log(solution);

var response = prompt("Choisir un nombre entre 1 et 3.");
console.log(response);

for (var i = 3, i = 0, i--) {
if (response === solution) {
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

if (i==) {
console.log();
}else {
console.log("Erreur!");
}
