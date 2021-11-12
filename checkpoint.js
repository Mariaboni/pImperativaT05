const readline = require("readline");
let { stdin: input, stdout: output } = require("process");
let { PRIORITY_NORMAL } = require("constants");

let rl = readline.createInterface({ input, output });

const pratos = {
  1: {
    nome: "Pipoca",
    tempoMedioPreparo: 10,
  },
  2: {
    nome: "Macarrão",
    tempoMedioPreparo: 8,
  },
  3: {
    nome: "Carne",
    tempoMedioPreparo: 15,
  },
  4: {
    nome: "Feijão",
    tempoMedioPreparo: 12,
  },
  5: {
    nome: "Brigadeiro",
    tempoMedioPreparo: 8,
  },
};

console.log();

rl.question(
  `Escolha um dos pratos, de acordo com a numeração:
  1 - Pipoca
  2 - Macarrão
  3 - Carne
  4 - Feijão
  5 - Brigadeiro
`,
  (resposta) => {
    const prato = pratos[resposta];

    if (!prato) {
      console.log(`Prato inexistente`);
      return rl.close();
    }

    console.log();

    rl.question(
      `Para seguir o tempo recomendado, é só continuar.
     Caso queira alterá-lo, digite em quantos segundos você deseja prepará-lo: `,
      (tempoStr) => {
        console.log();
        let tempo = Number(tempoStr);

        if (!tempo) {
          console.log(
            `seguindo com o tempo recomendado:
            
            ${prato.tempoMedioPreparo}s`
          )
          console.log("Prato pronto, bom apetite =)");
        } else if (tempo > 3 * prato.tempoMedioPreparo) {
          console.log("KABUMM!!");
        } else if (tempo > 2 * prato.tempoMedioPreparo) {
          console.log("Sua comida queimou!");
        } else if (tempo < prato.tempoMedioPreparo) {
          console.log("tempo insuficiente");
        }
        else { console.log("Prato pronto, bom apetite!")}
        
    
         rl.close();
      }
    );
  }
);
