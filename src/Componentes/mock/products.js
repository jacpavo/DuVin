const products = [
    {
        id: 1,
        marca: "Algodon Wine Estates",
        variedad: "Malbec",
        precio: 2100,
        origen: "Mendoza, Argentina",
        img:"./img/Card1.webp",
        categoria: "Vino",
    },

    {
        id: 2,
        marca: "Rutini Wines",
        variedad: "Cabernet Sauvignon",
        precio: 1250,
        origen: "Mendoza, Argentina",
        img:"./img/Card2.jpeg",
        categoria: "Vino",
    },

    {
        id: 3,
        marca: "Del Fin del Mundo",
        variedad: "Pinot Noir",
        precio: 750,
        origen: "Neuquen, Argentina",
        img:"./img/Card3.jpeg",
        categoria: "Vino",
    },

    {
        id: 4,
        marca: "Del Fin del Mundo",
        variedad: "Merlot, Malbec, Cabernet Saugvinon",
        precio: 550,
        origen: "Neuquen, Argentina",
        img:"./img/Card4.webp",
        categoria: "Vino",
    },

    {
        id: 5,
        marca: "Patagonia",
        variedad: "Amber Lager",
        precio: 260,
        origen: "Rio Negro, Argentina",
        img:"./img/Card5.jpeg",
        categoria: "Cerveza",
    },

    {
        id: 6,
        marca: "Pilsener",
        variedad: "Pilsner",
        precio: 280,
        origen: "Guayas, Ecuador",
        img:"./img/Card6.jpeg",
        categoria: "Cerveza",
    },

    {
        id: 7,
        marca: "Heineken",
        variedad: "Pilsner",
        precio: 270,
        origen: "Zoeterwoude, Paises Bajos",
        img:"./img/Card7.jpeg",
        categoria: "Cerveza",
    },

    {
        id: 8,
        marca: "Budweiser",
        variedad: "Lager",
        precio: 270,
        origen: "Saint Louis, Estados Unidos",
        img:"./img/Card8.jpeg",
        categoria: "Cerveza",
    },

    {
        id: 9,
        marca: "Johnnie Walker Green Label",
        variedad: "Wisky",
        precio: 13000,
        origen: "Kilmarnock, Escocia",
        img:"./img/Card9.jpeg",
        categoria: "Destilado",
    },

    {
        id: 10,
        marca: "Flor de Caña 12 Años",
        variedad: "Ron",
        precio: 17500,
        origen: "Managua, Nicaragua",
        img:"./img/Card10.png",
        categoria: "Destilado",
    },

    {
        id: 11,
        marca: "Grey Goose",
        variedad: "Vodka",
        precio: 13500,
        origen: "Picardía, Francia",
        img:"./img/Card11.webp",
        categoria: "Destilado",
    },

    {
        id: 12,
        marca: "Heraclito & Macedonio",
        variedad: "Gin",
        precio: 3000,
        origen: "Buenos Aires, Argentina",
        img:"./img/Card12.jpeg",
        categoria: "Destilado",
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