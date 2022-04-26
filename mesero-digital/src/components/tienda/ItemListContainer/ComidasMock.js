import { imagenesComidas } from "./ContenedorDetallesItem/assets/images";

const listaDeComidas = [
    { nombre: 'Mozzarella',
      id: 1,
      stock: 25,
      precio: 346,
      imagen: imagenesComidas[5],
      descripcion: 'Pizza de masa casera con queso Muzzarella con aceitunas '
    },
    { nombre: 'Calabresa',
      id: 2,
      stock: 15,
      precio: 534,
      imagen: imagenesComidas[0] ,
      descripcion: 'Pizza de mozzarella con aceitunas hecha al horno'
    },
    { nombre: 'Margherita',
      id: 3,
      stock: 20,
      precio: 265,
      imagen: imagenesComidas[5],
      descripcion: 'Pizza de mozzarella con aceitunas hecha al horno'
    },
    { nombre: 'Tallarines',
      id: 13,
      stock: 9,
      precio: 345,
      imagen: imagenesComidas[9],
      descripcion: 'Pizza de mozzarella con aceitunas hecha al horno'
    },
    { nombre: 'Ravioles',
      id: 14,
      stock: 5,
      precio: 444,
      imagen: imagenesComidas[8],
      descripcion: 'Pizza de mozzarella con aceitunas hecha al horno'
    },
    { nombre: 'Ñoquis',
      id: 15,
      stock: 5,
      precio: 245,
      imagen: imagenesComidas[6],
      descripcion: 'Pizza de mozzarella con aceitunas hecha al horno'
    },
    { nombre: 'Milanesa',
      id: 16,
      stock: 8,
      precio: 543,
      imagen: imagenesComidas[1],
      descripcion: 'Pizza de mozzarella con aceitunas hecha al horno'
    },
    { nombre: 'Milanesa a caballo',
      id: 17,
      stock: 200,
      precio: 453,
      imagen: imagenesComidas[2],
      descripcion: 'Pizza de mozzarella con aceitunas hecha al horno'
    },
    { nombre: 'Milanesa a la Suiza',
      id: 18,
      stock: 150,
      precio: 555,
      imagen: imagenesComidas[4],
      descripcion: 'Pizza de mozzarella con aceitunas hecha al horno'
    },
    { nombre: 'Milanesa napolitana',
      id: 19,
      stock: 150,
      precio: 400,
      imagen: imagenesComidas[3],
      descripcion: 'Pizza de mozzarella con aceitunas hecha al horno'
    }
  ];

  export const getComidas = () => {
    return new Promise (resultado=> {
      setTimeout(() => {
        resultado(listaDeComidas)
      },2000)
    })
  };

  export const getComidasById = (id) => {
    id = parseInt(id)

    return new Promise (resultado=> {
      setTimeout(() => {
        let comida = listaDeComidas.find(element => element.id === id)

        resultado(comida)
        
      },2000)

    })
  };


