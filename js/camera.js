const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
let imagemURL = "";
const botaoEnviarFoto = document.querySelector("[data-enviar]");

//ciclo de interacao - botao de camera - campo da camera - aparecer o video
botaoIniciarCamera.addEventListener("click", async function () {
  const iniciarVideo = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });

  botaoIniciarCamera.styele.display = "none";
  campoCamera.styele.display = "block";

  video.srcObject = iniciarVideo;
});

botaoTirarFoto.addEventListener("click", function () {
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

  imagemURL = canvas.toDataURL("image/jpeg");

  campoCamera.styele.display = "none";
  mensagem.styele.display = "block";
});

botaoEnviarFoto.addEventListener("click", () => {
  const receberDadosExistente = localStorage.getItem("cadastro");
  const converteRetorno = JSON.parse(receberDadosExistente);

  converteRetorno.imagem = imagemURL;

  localStorage.setItem("cadastro", JSON.stringify(converteRetorno));

  window.location.href = "./abrir-conta-form-3.html";
});
