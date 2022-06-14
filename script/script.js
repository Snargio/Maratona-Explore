const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')

const respostas = [

    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",

]

function fazerPergunta() {

    if (inputPergunta.value == "") {
        alert("Digite sua pergunta")
        return
    }

    buttonPerguntar.setAttribute("disabled", true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    // gerar numero aletorio
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

    elementoResposta.style.opacity = 1;

    // sumir a resposta depois de 3 segundos
    setTimeout(function () {
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
    }, 3000)
}



// footer my Informations exchange of images footer
const sobremim = document.getElementById('Sobre-mim')

function oppenSobreMim() {
    const nav = document.getElementById('nav')

    nav.classList.toggle('active')

    let minhaimg = document.querySelector('img#Trocarimg');
    let meusrc = Trocarimg.getAttribute('src');
    if (meusrc === './Icons/chevron-apontando-para-a-esquerda.png') {
        minhaimg.setAttribute('src', './Icons/remover-simbolo.png');
    } else {
        minhaimg.setAttribute('src', './Icons/chevron-apontando-para-a-esquerda.png');
    };

    let meugit = document.querySelector('img#git');
    let srcGit = git.getAttribute('src');

    if (srcGit === '') {
        meugit.setAttribute('src', './Icons/placa-do-github.png');
    } else {
        meugit.setAttribute('src', '');
    };


    let meulinkdin = document.querySelector('img#linkdin')
    let srclinkdin = linkdin.getAttribute('src');

    if (srclinkdin === '') {
        meulinkdin.setAttribute('src', './Icons/sinal-do-linkedin.png');
    } else {
        meulinkdin.setAttribute('src', '');
    };


}





sobremim.addEventListener('click', oppenSobreMim);