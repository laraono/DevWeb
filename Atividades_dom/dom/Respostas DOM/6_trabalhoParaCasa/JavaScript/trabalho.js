// Caso seja usado a função com parâmetros no event listener
function adicionaImagem(copiaElemento) 
{
    copiaElemento.className = "fotoPerfil";
    copiaElemento.id = "fotoPerfil";
    
    fotoPerfil.innerHTML = "";
    fotoPerfil.appendChild(copiaElemento);
}

// fotoPerfil: vai ser usado o container para limpar o campo "fotoPerfil"
let fotoPerfil = document.getElementById("container1");

let imagemSelecionada = document.querySelectorAll("#imagem");

for(let i = 0; i < imagemSelecionada.length; i++)
{
    imagemSelecionada[i].addEventListener("click", function () {
        adicionaImagem(imagemSelecionada[i].cloneNode(true));
    });
}

/* FUNÇÃO ANÔNIMA

for(let i = 0; i < imagemSelecionada.length; i++)
{
    imagemSelecionada[i].addEventListener("click", function() {
        let copiaElemento = imagemSelecionada[i].cloneNode(true);
        
        copiaElemento.className = "fotoPerfil";
        copiaElemento.id = "fotoPerfil";

        fotoPerfil.innerHTML = "";
        fotoPerfil.appendChild(copiaElemento);
    });
} */

/* FUNÇÃO ANÔNIMA CHAMANDO A FUNÇÃO COM PARÂMETROS

for(let i = 0; i < imagemSelecionada.length; i++)
{
    imagemSelecionada[i].addEventListener("click", function () {
        adicionaImagem(imagemSelecionada[i].cloneNode(true));
    });
} */