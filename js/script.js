import validarCampo from "./valida-cpf.js";
import validaMaiorIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");

//para cada campo daquela lista sera chamado a função verificarCampo
camposDoFormulario.forEach((campo) => {
  //quando clicar fora do campo ele vai chamar a funcao para o campo
  campo.addEventListener("blur", () => verificarCampo(campo));
});

function verificarCampo(campo) {
  //se o campo for cpf e o valor for maior ou igual a 11
  if (campo.name == "cpf" && campo.value.length >= 11) {
    validarCampo(campo);
  }
  if (campo.name == "aniversario" && campo.value != "") {
    validaMaiorIdade(campo);
  }
}
