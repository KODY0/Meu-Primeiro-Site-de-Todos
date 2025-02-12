/* 
    Variáveis
        - Um pedacinho de memória do computador que a  gente da um nome, e pode guardar oque quiser

    Funções
        - Pedacinho de código  que só executa quando é chamada

    Document = HTML
    querySelector -> Selecionar elemento
*/

let imagem = document.querySelector(".imagem-copo")
let circulo = document.querySelector(".circulo")

function trocaImagem(endereco){
    
    imagem.src = endereco
}

function trocaCor(cor){
    
    circulo.style.background = cor
}
