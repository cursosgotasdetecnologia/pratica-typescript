interface Product {
    id: number;
    name: string;
    price: number;
    stock_quantity: number;
    sku: string;
    category_id: number;
    supplier_id: number;
    slug?: string;
    categories?: { name: string };
    suppliers?: { company_name: string };
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

const listaDeProdutos: Product[] = [
    { id: 352, name: 'Advarnced Coding Guide', price: 64.9, stock_quantity: 47, sku: 'BORKR2Z7D4', category_id: 2, supplier_id: 14, slug: 'advarnced-coding-guide', categories: { name: 'Livros' }, suppliers: { company_name: 'Editora Atlas' } },
    { id: 357, name: 'Advarnced Codingr Guide', price: 64.9, stock_quantity: 47, sku: 'BORRKR2Z7D4', category_id: 2, supplier_id: 14, slug: 'advarnced-codingr-guide', categories: { name: 'Livros' }, suppliers: { company_name: 'Editora Atlas' } },
    { id: 370, name: 'Geladeira Codringr Guide', price: 64.9, stock_quantity: 47, sku: 'BOR7D4', category_id: 2, supplier_id: 14, slug: 'advtatced-codringr-guide', categories: { name: 'Livros' }, suppliers: { company_name: 'Editora Atlas' } }
];

console.log('Total de produtos no depósito:', listaDeProdutos.length);
console.log('Primeiro produto é o: ', listaDeProdutos[0].name);
console.log('Ultimo produto é o: ', listaDeProdutos[listaDeProdutos.length - 1].name)
