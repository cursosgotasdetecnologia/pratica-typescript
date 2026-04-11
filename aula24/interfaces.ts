interface Product {
    id: number;
    name: string;
    price: number;
    stock_quantity: number;
    sku: string;
    category_id: number;
    supplier_id: number;
}


const meuProduto: Product = {
    id: 1,
    name: 'Everton',
    price: 12,
    stock_quantity: 100,
    sku: 'MKU-0987',
    category_id: 10,
    supplier_id: 5
}

console.log('--- Validando Produto ---');
console.log('Nome:', meuProduto.name);
console.log('O preço do produto é:', meuProduto.price);
