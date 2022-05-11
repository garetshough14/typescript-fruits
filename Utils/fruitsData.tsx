interface FruitType {
    id: number;
    name: string;
    price: number;
    starred: boolean;
  }
  
  const FruitsArray:FruitType[] = [
    {
      id: 1,
      name: "Mango",
      price: 10,
      starred: false,
    },
    {
      id: 2,
      name: "Pineapple",
      price: 20,
      starred: false,
    },
    {
      id: 3,
      name: "Apple",
      price: 12,
      starred: false,
    },
    {
      id: 4,
      name: "Orange",
      price: 7,
      starred: false,
    },
  ];

  
  
  export { FruitType, FruitsArray };