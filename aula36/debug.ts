function calcularTotal(preco: number, quantidade: number): number {
  return preco * quantidade
}

calcularTotal('15.90', 3)

function calcularDesconto(preco: number, desconto: number): number {
  return preco + desconto  // deveria ser preco - desconto
}

const total = calcularDesconto(100, 10)
console.log(total) // 110 — errado mas sem erro vermelho

//////////////////////////

// Uma função simples para entender o fluxo
function calcularPrecoFinal(preco: number, desconto: number): number {
    const valorDesconto = preco * (desconto / 100);
    const precoFinal = preco - valorDesconto;
    
debugger
    return precoFinal;
}


const meuPreco = 100;
const meuDesconto = 15;


debugger


const resultado = calcularPrecoFinal(meuPreco, meuDesconto);
console.log("O resultado é:", resultado);