let filmes = [
  "../../assets/poster_07 (1).svg",
  "../../assets/poster_13.svg",
  "../../assets/poster_17.svg",
  "../../assets/poster_09.svg",
  "../../assets/poster_10.svg",
  "../../assets/poster_01 (2).svg",
  "../../assets/poster_02 (2).svg",
  "../../assets/poster_03 (2).svg",
  "../../assets/poster_11.svg",
];
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const divFilmes = document.querySelector(".div__filmes.carousel");

function atualizaConteudo() {
  divFilmes.innerHTML = `
    
        <div class="item -animacao">
            <img class="img__filmes" src="${filmes[0]}" alt=""">
        </div>
        <div class="item -animacao">
            <img class="img__filmes" src="${filmes[1]}" alt=""">
        </div>
        <div class="item -animacao">
            <img class="img__filmes" src="${filmes[2]}" alt=""">
        </div>
        <div class="item -animacao">
            <img  class="img__filmes" src="${filmes[3]}" alt=""">
        </div>
    
`;
  divFilmes.insertAdjacentElement("afterbegin", arrowLeft);
  divFilmes.insertAdjacentElement("beforeend", arrowRight);
}

atualizaConteudo();

console.log(arrowLeft);

arrowLeft.addEventListener("click", () => {
  clicarEsquerda();
  atualizaConteudo();
});

arrowRight.addEventListener("click", () => {
  clicarDireita();
  atualizaConteudo();
});

function clicarDireita() {
  let ultimoElemento = filmes.pop();
  filmes.unshift(ultimoElemento);
}

function clicarEsquerda() {
  let primeiroElemento = filmes.shift();
  filmes.push(primeiroElemento);
}
