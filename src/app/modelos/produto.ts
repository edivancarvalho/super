export interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    imagem: any; 
  }
  
  export const produtos = [
    {
      id: 1,
      nome: 'Arroz',
      preco: 25,
      descricao: 'Arroz 5 KG, Tipo 1 A.',
      imagem: '/assets/arroz.png'
    },
    {
      id: 2,
      nome: 'Feijão',
      preco: 4.50,
      descricao: 'Feijão 1Kg, Tipo 1.',
      imagem: '/assets/feijao.jpg'
    },
    {
      id: 3,
      nome: 'Leite',
      preco: 3.45,
      descricao: 'Leite de minas 1L, Integral.',
      imagem: '/assets/leite.png'
    },
    {
      id: 4,
      nome: 'Milho',
      preco: 1.45,
      descricao: 'Milho verde 250ml',
      imagem: '/assets/milho.jpeg'
    },{
      id: 5,
      nome: 'Óleo',
      preco: 3.45,
      descricao: 'Óleo de Soja 450ml',
      imagem: '/assets/oleo.jpg'
    }
  ];
  
  