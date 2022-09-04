/*const inputCsv = `name, id, favorite food
quincy, 1, hot dogs
beau, 2, cereal
abbey, 3, pizza
mrugesh, 4, ice cream`;*/

function main() {
  const inputCsv = document.getElementById("csvInput").value;

  let lines = inputCsv.split(/[\n\r]+/);
  let itens = [];
  let control = "";
  let db = { Array: [] };

  for (let i = 0; i < lines.length; i++) {
    itens.push(lines[i].split(", "));
  }
  for (let i = 1; i < lines.length; i++) {
    control = "";
    for (let j = 0; j < itens[0].length; j++) {
      var index = Number(itens[i][j]);
      if (Number.isNaN(index)) {
        control += `"${itens[0][j]}": "${itens[i][j]}", `;
      } else {
        control += `"${itens[0][j]}": ${itens[i][j]}, `;
      }
    }
    db.Array.push(`{${control}}`);
  }
  control = "";
  for (let i = 0; i < db.Array.length; i++) {
    control += `${db.Array[i]},\n`;
  }
  document.getElementById("jsonInput").value = `[${control}]`;

  if(`[${control}]` == "[]"){
    document.getElementById("csvInput").style.border = '2px solid red';
  }
  return db;
}
