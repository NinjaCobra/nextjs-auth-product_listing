export interface Product {
  productName: string;
  price: number;
  rating: number;
  productImageUrl: string;
  id: string;
  productArrivalDate: string;
  totalNumberOfComments: number;
  comments: Comment[];
  currencySymbol: string;
  productSliderList: string[];
}

export interface Comment {
  id: string;
  rating: number;
  username: string;
  commentMessage: string;
}
