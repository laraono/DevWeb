let x = document.querySelectorAll("p");
for (let i = 0; i < x.length; i++) {
  x[i].addEventListener("click", function (ev) {
    ev.target.style.color = "red";
  });
}
