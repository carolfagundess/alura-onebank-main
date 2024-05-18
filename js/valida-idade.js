export default function validaMaiorIdade(campo) {
  const dataNascimento = new Date(campo.value);
  if (!validaIdade(dataNascimento)) {
    campo.setCustomValidity('O usuário deve ser maior de idade')
  }
}

function validaIdade(data) {
  //criado uma variavel com a data atual e testado com a data de nascimento do usuário
  const dataAtual = new Date();
  //data de nascimento com 18 anos a mais
  const dataMais18 = new Date(
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDate()
  );

  return dataAtual >= dataMais18;
}
