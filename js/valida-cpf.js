//quando charmarmos este arquivo retornara esta function
export default function validarCampo(campo) {
  //metodo replace - onde estiver . e -, ele vai substituir por nada
  const cpf = campo.value.replace(/\.|-/g, "");
    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        campo.setCustomValidity('Este cpf não é valido');
    }
}

function validaNumerosRepetidos(cpf) {
  const numerosRepetidos = [
    "00000000000",
    "111111111111",
    "222222222222",
    "333333333333",
    "444444444444",
    "555555555555",
    "666666666666",
    "777777777777",
    "888888888888",
    "99999999999",
  ];

  return numerosRepetidos.includes(cpf);
}
//verificacao do primeiro digito
function validaPrimeiroDigito(cpf) {
  let soma = 0;
  let multiplicador = 10;

  for (let tamanho = 0; tamanho < 9; tamanho++) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador--;
  }

  soma = (soma * 10) % 11;

  if (soma == 10 || soma == 11) {
    soma = 0;
  }
  //retorna boolean disto
  return soma != cpf[9];
}
//valida segundo digito
function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;
  
    for (let tamanho = 0; tamanho < 10; tamanho++) {
      soma += cpf[tamanho] * multiplicador;
      multiplicador--;
    }
  
    soma = (soma * 10) % 11;
  
    if (soma == 10 || soma == 11) {
      soma = 0;
    }
    //retorna boolean disto
    return soma != cpf[10];
  }