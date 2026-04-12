// ARRAY: Uma lista de coisas (pode crescer ou diminuir)
const frutas = [
    'Maçã', 'Banana', 'Laranja','Limão'
];


// ENUM: Um conjunto de REGRAS FIXAS (não muda durante o teste)
enum StatusPedido {
    Pendente = 'PENDING',
    Aprovado = 'APPROVED',
    Cancelado = 'CANCELLED'
}


const meuStatus = StatusPedido.Cancelado;

console.log('Array (Lista):', frutas[2]);
console.log('Enum (Estado):', meuStatus);