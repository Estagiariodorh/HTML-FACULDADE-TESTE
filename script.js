var partesMensagem = [
  "Hoje, mais do que nunca, sinto uma imensa gratidão por ter você ao meu lado. ",
  "Cada momento compartilhado contigo ilumina minha vida de uma maneira única. ",
  "É impossível expressar completamente a alegria que você trouxe para o meu coração. ",
  "Nosso amor é como uma jornada maravilhosa, repleta de sorrisos, risadas e momentos inesquecíveis. ",
  "A cada passo, descubro novas razões para amar você ainda mais. ",
  "Cada momento compartilhado contigo ilumina minha vida de uma maneira única.",
  "E é impossível expressar completamente a alegria que você trouxe para o meu coração.",
  "Nosso amor é como uma jornada maravilhosa, repleta de sorrisos, risadas e momentos inesquecíveis.",
  "A cada passo, descubro novas razões para amar você ainda mais. Seu carinho, compreensão e a forma como seu olhar reflete ternura são constantes lembretes de como sou sortudo por ter você como minha companheira.",
  "Você é a razão pela qual meus dias são mais felizes, e minhas noites, mais tranquilas.",
  "Sua presença é como um abraço acolhedor que me envolve e me faz sentir em casa.",
  "Nosso amor é a melodia suave que embala nossos momentos, tornando cada dia mais especial.",
  "Julia, quero que saiba que você é a inspiração por trás dos meus sonhos e a força que impulsiona meus passos.",
  "Com você, encontrei não apenas uma namorada incrível, mas também a minha melhor amiga, confidente e cúmplice de todas as alegrias e desafios que a vida nos apresenta.",
  "Prometo continuar construindo nosso futuro juntos, cultivando este amor que nos une de maneira tão profunda.",
  "Que cada amanhecer seja uma lembrança do quanto você é amada e o quanto nossa jornada é valiosa para mim.",
  "Amo você além das palavras, além do tempo, além de tudo o que posso expressar. Obrigado por ser a luz na minha vida.",
];

function exibirIframe() {
  // Oculta a imagem e o texto
  document.getElementById("bombermanGif").style.display = "none";
  document.querySelector("p").style.display = "block";

  // Exibe a seção com o iframe
  document.getElementById("iframeContainer").style.display = "block";
}

function fecharIframe() {
  // Exibe a imagem e o texto
  document.getElementById("bombermanGif").style.display = "block";
  document.querySelector("p").style.display = "block";

  // Oculta a seção com o iframe
  document.getElementById("iframeContainer").style.display = "none";
}

// Função para calcular a contagem regressiva
function calcularContagemRegressiva() {
  // Data do próximo aniversário de Júlia (04/10/2024)
  var proximoAniversario = new Date("10/04/2024");

  // Data atual
  var dataAtual = new Date();

  // Calcula a diferença entre as duas datas em milissegundos
  var diferencaMilissegundos = proximoAniversario - dataAtual;

  // Calcula os meses, semanas, dias, horas, minutos e segundos restantes
  var meses = Math.floor(
    diferencaMilissegundos / (1000 * 60 * 60 * 24 * 30.44)
  ); // Média de dias por mês
  var semanas = Math.floor(
    (diferencaMilissegundos % (1000 * 60 * 60 * 24 * 30.44)) /
      (1000 * 60 * 60 * 24 * 7)
  );
  var dias = Math.floor(
    (diferencaMilissegundos % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
  );
  var horas = Math.floor(
    (diferencaMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutos = Math.floor(
    (diferencaMilissegundos % (1000 * 60 * 60)) / (1000 * 60)
  );
  var segundos = Math.floor((diferencaMilissegundos % (1000 * 60)) / 1000);

  // Atualiza o elemento HTML com a contagem regressiva
  document.getElementById("contagemRegressiva").innerHTML =
    "Meses: " +
    meses +
    " | Semanas: " +
    semanas +
    " | Dias: " +
    dias +
    " | Horas: " +
    horas +
    " | Minutos: " +
    minutos +
    " | Segundos: " +
    segundos;
}

// Atualiza a contagem regressiva a cada segundo
setInterval(calcularContagemRegressiva, 1000);

// Chama a função para garantir que a contagem seja exibida imediatamente
calcularContagemRegressiva();

function gerarMensagemAleatoria() {
  var numPartes = Math.floor(Math.random() * 3) + 2;

  var mensagemGerada = [];

  for (var i = 0; i < numPartes; i++) {
    var parteAleatoria =
      partesMensagem[Math.floor(Math.random() * partesMensagem.length)];
    mensagemGerada.push(parteAleatoria);
  }

  // Junta as partes para formar a mensagem final
  return mensagemGerada.join("");
}

// Função para alternar a visibilidade das mensagens
function alternarMensagens() {
  var mensagem = document.getElementById("mensagem");
  var botao = document.getElementById("botaomensagens");

  if (mensagem.style.display === "none" || mensagem.textContent === "") {
    // Gera uma nova mensagem aleatória sempre que a mensagem estiver oculta ou vazia
    mensagem.textContent = gerarMensagemAleatoria();
    mensagem.style.display = "block";
    botao.textContent = "Recolher mensagens";
  } else {
    // Oculta a mensagem se já estiver visível
    mensagem.style.display = "none";
    botao.textContent = "Acessar mensagens do dia.";
  }
}

var galeriaVisivel = false;

function alternarGaleria() {
  var galeriaFotos = document.getElementById("fotos");
  galeriaVisivel = !galeriaVisivel;

  if (galeriaVisivel) {
    galeriaFotos.style.display = "block";
    document.body.classList.add("galeria-visivel");
    document.getElementById("botaoGaleria").textContent = "Recolher Galeria";
  } else {
    galeriaFotos.style.display = "none";
    document.body.classList.remove("galeria-visivel");
    document.getElementById("botaoGaleria").textContent =
      "Acessar Galeria Para você se lembrar de alguns momentos.";
  }
}

// Função para abrir a imagem com zoom e definir o tamanho
function abrirZoom(src, width, height) {
  var zoomedImage = document.getElementById("zoomedImage");
  zoomedImage.src = src;
  zoomedImage.style.width = width + "px";
  zoomedImage.style.height = height + "px";

  var zoomedImageContainer = document.getElementById("zoomedImageContainer");
  zoomedImageContainer.style.display = "block";
}

// Função para fechar a imagem com zoom
function fecharZoom() {
  var zoomedImageContainer = document.getElementById("zoomedImageContainer");
  zoomedImageContainer.style.display = "none";
}

// Adiciona um ouvinte de evento de clique para cada imagem com a classe "foto"
document.addEventListener("DOMContentLoaded", function () {
  var fotos = document.querySelectorAll(".foto");
  fotos.forEach(function (foto) {
    foto.addEventListener("click", function () {
      var src = foto.getAttribute("src");
      abrirZoom(src, 400, 600); // Defina a largura e altura desejadas
    });
  });
});

// Função para abrir a imagem com zoom e centralizar
function abrirZoom(src) {
  var zoomedImage = document.getElementById("zoomedImage");
  zoomedImage.src = src;

  var zoomedImageContainer = document.getElementById("zoomedImageContainer");
  zoomedImageContainer.style.display = "flex"; // Alterado para "flex" para usar o alinhamento central
}
