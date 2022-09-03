const inputCsv = `name, id, favorite food
quincy, 1, hot dogs
beau, 2, cereal
abbey, 3, pizza
mrugesh, 4, ice cream`;

var lines = inputCsv.split(/[\n\r]+/);
var itens = [];
var person = { Array: [{}] };

for (let i = 0; i < lines.length; i++) {
  itens.push(lines[i].split(", "));
}

for (let j = 0; j < lines.length; j++) {
    
}

console.log(person);
