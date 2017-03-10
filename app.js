var solution = Math.floor(Math.random() * 4);
console.log(solution);

var response = prompt("Choisir un nombre entre 1 et 3.");
console.log(response);

if (response === solution) {
console.log("Code accepted!");                                                                                           
}else if (response < solution)  {
console.log("Trop petit!");
}else {
console.log("Trop grand!");
}

