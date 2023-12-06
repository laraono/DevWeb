let array = document.querySelectorAll(".imagem");
let avatar = document.querySelector(".fotoPerfil");
for (let i = 0; i < array.length; i++) {
  array[i].addEventListener("click", function () {
    avatar.setAttribute("src", array[i].src);
  });
}
