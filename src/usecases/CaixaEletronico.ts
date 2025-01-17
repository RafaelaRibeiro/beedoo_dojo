export function caixaEletronico(valor_saque: number) {
  const notas_disponiveis = [100, 50, 20, 10];

  if (notas_disponiveis.includes(valor_saque)) {
    return valor_saque;
  }

  if (valor_saque % 10 !== 0) {
    return "Ná há notas disponíveis para o valor informado.";
  }

  let notas = [];
  notas_disponiveis.map((nota) => {
    while (valor_saque >= nota) {
      let qtd = Math.floor(valor_saque / nota);
      if (qtd > 1) {
        notas.push(
          `${qtd} notas de ${nota.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })} `
        );
      } else {
        notas.push(
          ` ${qtd} nota de ${nota.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })} `
        );
      }
      valor_saque -= qtd * nota;
    }
  });

  const primeiras = notas.slice(0, -1);
  const ultima = [...notas].pop();

  return `Entregar ${primeiras} e ${ultima}`;
}

// Desenvolva um programa que simule a entrega de notas quando um cliente efetuar um saque em um caixa
// eletrônico. Os requisitos básicos são os seguintes:
// ● Entregar o menor número de notas;
// ● É possível sacar o valor solicitado com as notas disponíveis;
// ● Saldo do cliente infinito;
// ● Quantidade de notas infinito (pode-se colocar um valor finito de cédulas para aumentar a dificuldade do
// problema);

// Notas disponíveis de R$ 100,00; R$ 50,00; R$ 20,00 e R$ 10,00

// Exemplos:
// Valor do Saque: R$ 30,00 – Resultado Esperado: Entregar 1 nota de R$20,00 e 1 nota de R$ 10,00.
// Valor do Saque: R$ 80,00 – Resultado Esperado: Entregar 1 nota de R$50,00 1 nota de R$ 20,00 e 1 nota de R$
// 10,00
