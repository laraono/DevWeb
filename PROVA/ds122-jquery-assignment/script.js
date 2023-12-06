let input = document.getElementById("tarefa");
let con = document.getElementById("con");
let ncon = document.getElementById("ncon");
let completed = [];
let uncompleted = [];
input.addEventListener("keypress", function (ev) {
  if (ev.key == "Enter") {
    let inputValue = input.value;
    let li = document.createElement("li");
    li.textContent = inputValue;
    li.addEventListener("click", function () {
      completed.push(inputValue);
      let pos = uncompleted.indexOf(inputValue);
      uncompleted.splice(pos, 1);
      con.appendChild(li);
    });
    uncompleted.push(inputValue);
    ncon.appendChild(li);
  }
});
