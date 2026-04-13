//GET /pedido/10248

/*
{
  "id": 10248,
  "cliente": {
    "nome": "Andreia Maria",
    "logradouro: ": {
      "cidade": "São José",
      "cep": "51100445"
    }
  }
}
*/


interface Endereco {
    cidade: string;
    cep: string;
}

interface Cliente {
    nome: string;
    logradouro: Endereco;
}

interface Pedido {
    id: number;
    cliente: Cliente;
}



const novoPedido: Pedido = {
    id: 10248,
    cliente: {
        nome: 'Andreia Maria',
        logradouro: { cidade: 'São José', cep: '51100445' }
    }
};


console.log('ID do Pedido:', novoPedido.id);

console.log('Cidade de Destino:', novoPedido.cliente.logradouro.cidade);