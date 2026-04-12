function calcularDesconto(preco: number): number {
    return preco * 10; // Dá 10% de desconto
}

const valorFinal = calcularDesconto(100);

console.log('Preço com desconto:', valorFinal);