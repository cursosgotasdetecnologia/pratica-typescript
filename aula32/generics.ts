function obterDados<T>(dados: T): T {
    return dados;
}

interface Produto {
    id: number;
    name: string;
    unit_price: number;
    units_in_stock: number;
    category_id: number;
}


const produtoCriado: Produto = {
    id: 1,
    name: "Cerveja",
    unit_price: 15,
    units_in_stock: 10,
    category_id: 1
};

const resultado = obterDados<Produto>(produtoCriado);

console.log(resultado.name);