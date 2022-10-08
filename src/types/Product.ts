export interface IProduct {
  _id: string;
  name: string;
  category: ICatgory;
  numberInStock: number;
  price: number;
  imgUrl: string;
}

interface ICatgory {
  _id: string;
  name: string;
}
