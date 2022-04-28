const products = [
    {
        id: 1,
        marca: "Algodon Wine Estates",
        variedad: "Malbec",
        precio: 2100,
        origen: "Mendoza, Argentina",
        img:"https://cdn.shopify.com/s/files/1/0077/9639/2026/products/Algodon_p3_2.png?v=1588849477",
        categoria: "Vino",
        stock: 15,
    },

    {
        id: 2,
        marca: "Rutini Wines",
        variedad: "Cabernet Sauvignon",
        precio: 1250,
        origen: "Mendoza, Argentina",
        img:"./img/Card2.jpeg",
        categoria: "Vino",
        stock: 15,
    },

    {
        id: 3,
        marca: "Del Fin del Mundo",
        variedad: "Pinot Noir",
        precio: 750,
        origen: "Neuquen, Argentina",
        img:"./img/Card3.jpeg",
        categoria: "Vino",
        stock: 15,
    },

    {
        id: 4,
        marca: "Del Fin del Mundo",
        variedad: "Merlot, Malbec, Cabernet Saugvinon",
        precio: 550,
        origen: "Neuquen, Argentina",
        img:"./img/Card4.webp",
        categoria: "Vino",
        stock: 15,
    },

    {
        id: 5,
        marca: "Patagonia",
        variedad: "Amber Lager",
        precio: 260,
        origen: "Rio Negro, Argentina",
        img:"https://i0.wp.com/lbdistribuidora.com/wp-content/uploads/2021/08/patagonia-355-amber-1-e1629475180846.png?fit=571%2C469&ssl=1",
        categoria: "Cerveza",
        stock: 15,
    },

    {
        id: 6,
        marca: "Pilsener",
        variedad: "Pilsner",
        precio: 280,
        origen: "Guayas, Ecuador",
        img:"./img/Card6.jpeg",
        categoria: "Cerveza",
        stock: 15,
    },

    {
        id: 7,
        marca: "Heineken",
        variedad: "Pilsner",
        precio: 270,
        origen: "Zoeterwoude, Paises Bajos",
        img:"./img/Card7.jpeg",
        categoria: "Cerveza",
        stock: 15,
    },

    {
        id: 8,
        marca: "Budweiser",
        variedad: "Lager",
        precio: 270,
        origen: "Saint Louis, Estados Unidos",
        img:"./img/Card8.jpeg",
        categoria: "Cerveza",
        stock: 15,
    },

    {
        id: 9,
        marca: "Johnnie Walker Green Label",
        variedad: "Wisky",
        precio: 13000,
        origen: "Kilmarnock, Escocia",
        img:"https://mfliquor.shop/wp-content/uploads/2020/10/johnnie-walker-green-label-750ml-thegem-blog-timeline-large.png",
        categoria: "Destilado",
        stock: 15,
    },

    {
        id: 10,
        marca: "Flor de Caña 12 Años",
        variedad: "Ron",
        precio: 17500,
        origen: "Managua, Nicaragua",
        img:"./img/Card10.png",
        categoria: "Destilado",
        stock: 15,
    },

    {
        id: 11,
        marca: "Grey Goose",
        variedad: "Vodka",
        precio: 13500,
        origen: "Picardía, Francia",
        img:"./img/Card11.webp",
        categoria: "Destilado",
        stock: 15,
    },

    {
        id: 12,
        marca: "Heraclito & Macedonio",
        variedad: "Gin",
        precio: 3000,
        origen: "Buenos Aires, Argentina",
        img:"./img/Card12.jpeg",
        categoria: "Destilado",
        stock: 15,
    },
];

const categorias = [
    {id: 'vino', descripcion: 'Vino'},
    {id: 'cerveza', descripcion: 'Cerveza'},
    {id: 'destilado', descripcion: 'Destilado'},
]

export const getCategorias = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categorias)
        }, 2000)
    })
}
export const getProducts = (categoriaId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoriaId ? products.filter(prod => prod.categoria === categoriaId) : products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}