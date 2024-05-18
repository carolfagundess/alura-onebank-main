import validarCampo from "./valida-cpf.js";
import validaMaiorIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");

//para cada campo daquela lista sera chamado a função verificarCampo
camposDoFormulario.forEach((campo) => {
  //quando clicar fora do campo ele vai chamar a funcao para o campo
  campo.addEventListener("blur", () => verificarCampo(campo));
  campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

const tiposDeErro = [
  //erros: typeMismatch - tipo invalido, PatternMismatch - pattern invalido
  "valueMissing",
  "typeMismatch",
  "patternMisMatch",
  "tooShort",
  "customError",
];

//mensangens para erros
const mensagens = {
  nome: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido.",
  },
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    tooShort: "Por favor, preencha um e-mail válido.",
  },
  rg: {
    valueMissing: "O campo de RG não pode estar vazio.",
    patternMismatch: "Por favor, preencha um RG válido.",
    tooShort: "O campo de RG não tem caractéres suficientes.",
  },
  cpf: {
    valueMissing: "O campo de CPF não pode estar vazio.",
    patternMismatch: "Por favor, preencha um CPF válido.",
    customError: "O CPF digitado não existe.",
    tooShort: "O campo de CPF não tem caractéres suficientes.",
  },
  aniversario: {
    valueMissing: "O campo de data de nascimento não pode estar vazio.",
    customError: "Você deve ser maior que 18 anos para se cadastrar.",
  },
  termos: {
    valueMissing:
      "Você precisa estar de acordo com nossas diretrizes antes de continuar.",
  },
};

function verificarCampo(campo) {
  let mensagem = "";
  campo.setCustomValidity("");

  //se o campo for cpf e o valor for maior ou igual a 11
  if (campo.name == "cpf" && campo.value.length >= 11) {
    validarCampo(campo);
  }
  if (campo.name == "aniversario" && campo.value != "") {
    validaMaiorIdade(campo);
  }
  //um funcao para cada erro como true
  tiposDeErro.forEach((erro) => {
    if (campo.validity[erro]) {
      //procurando dentro do array, o campo e o erro especifico
      mensagem = mensagens[campo.name][erro];
      console.log(mensagem);
    }
  });
  //parentNode .mensagemerro perto do input
  const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");
  const validadorDeInput = campo.checkValidity();

  if (!validadorDeInput) {
    mensagemErro.textContent = mensagem;
  } else {
    mensagemErro.textContent = "";
  }
}
