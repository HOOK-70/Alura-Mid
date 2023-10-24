function somTocagrilo (){
    document.querySelector("#som_tecla_grilo").play();
}

document.querySelector(".tecla_grilo").onclick = somTocagrilo;

const ListaDeTeclas = document.querySelectorAll(".tecla");
listaDeTeclas[4].onclick = tocaSomGrilo;