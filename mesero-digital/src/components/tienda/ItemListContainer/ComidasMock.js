const listaDeComidas = [
    {
      nombre: 'Mozzarella',
      id: 1,
      stock: 25,
      imagen: 'assets/comidas/mozzarella.jpg',
      descripcion: 's'
    },
    {
      nombre: 'Calabresa',
      id: 2,
      stock: 15,
      imagen: 'assets/comidas/calabresa.png' ,
      descripcion: 'Pizza de mozzarella con aceitunas hecha al horno'
    },
    {
      nombre: 'Margherita',
      id: 3,
      stock: 20,
      imagen: 'assets/comidas/mozzarella.jpg',
      descripcion: 'Pizza de mozzarella con aceitunas hecha al horno'
    },
    {
      nombre: 'Tallarines',
      id: 13,
      stock: 9,
      imagen: 'assets/comidas/tallarines.jpg',
      descripcion: 'Pizza de mozzarella con aceitunas hecha al horno'
    },
    {
      nombre: 'Ravioles',
      id: 14,
      stock: 5,
      imagen: 'assets/comidas/ravioles.jpg',
      descripcion: 'Pizza de mozzarella con aceitunas hecha al horno'
    },
    {
      nombre: 'Ñoquis',
      id: 15,
      stock: 5,
      imagen: 'assets/comidas/noquis.jpg',
      descripcion: 'Pizza de mozzarella con aceitunas hecha al horno'
    },
    {
      nombre: 'Milanesa',
      id: 16,
      stock: 8,
      imagen: 'assets/comidas/mila.jpg',
      descripcion: 'Pizza de mozzarella con aceitunas hecha al horno'
    },
    {
      nombre: 'Milanesa a caballo',
      id: 17,
      stock: 200,
      imagen: 'assets/comidas/milaCaballo.jpg',
      descripcion: 'Pizza de mozzarella con aceitunas hecha al horno'
    },
    {
      nombre: 'Milanesa a la Suiza',
      id: 18,
      stock: 150,
      imagen: 'assets/comidas/milaSuiza.jpg',
      descripcion: 'Pizza de mozzarella con aceitunas hecha al horno'
    },
    {
      nombre: 'Milanesa napolitana',
      id: 19,
      stock: 150,
      imagen: 'assets/comidas/milaNapo.jpg',
      descripcion: 'Pizza de mozzarella con aceitunas hecha al horno'
    }
  ];

  export const getComidas = () => {
    return new Promise (resultado=> {
      setTimeout(() => {
        resultado(listaDeComidas)
      },2000)
    })
  }
