const produtos = [
    { name: 'Produto01', price: 158 },
    { name: 'Produto02', price: 519 },
    { name: 'Produto03', price: 310 },
    { name: 'Produto04', price: 140 },
    { name: 'Produto05', price: 410 },
    { name: 'Produto06', price: 160 },
    { name: 'Produto07', price: 160 },
    { name: 'Produto08', price: 10 }
];

// 1. Usando forEach para Validar Individualmente
//produtos.forEach((p) => {
//    console.log(`Validando produto: ${p.name} - Preço: R$ ${p.price}`);
//});


// 2. Usando map para Criar uma Lista de Nomes
const nomes = produtos.map(p => p.name);
console.log('Lista de Nomes:', nomes);