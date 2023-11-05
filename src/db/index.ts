import { Product } from "@/types";

export const defaultProductList: Product[] = [
  {
    productName: "Bluetooth Hoparlör",
    price: 49.99,
    currencySymbol: "$",
    rating: 4.5,
    productSliderList: [
      "https://images.unsplash.com/photo-1518188689134-aa7854b27574?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1616029832310-d07b9d4f1d0a?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1565209559029-9e4094301949?q=80&w=2176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    productImageUrl:
      "https://images.unsplash.com/photo-1531104985437-603d6490e6d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    id: "001",
    productArrivalDate: "2024-10-01",
    totalNumberOfComments: 128,
    comments: [
      {
        id: "c001",
        rating: 5,
        username: "user123",
        commentMessage: "Müziğin kalitesi beklediğimden çok daha iyi!",
      },
      {
        id: "c002",
        rating: 4,
        username: "user456",
        commentMessage: "Şarjı uzun süre dayanıyor, çok memnunum.",
      },
    ],
  },
  {
    productName: "Akıllı Saat",
    price: 399.99,
    rating: 5,
    currencySymbol: "₺",
    productSliderList: [
      "https://images.unsplash.com/photo-1518188689134-aa7854b27574?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1616029832310-d07b9d4f1d0a?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1565209559029-9e4094301949?q=80&w=2176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    productImageUrl:
      "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    id: "002",
    productArrivalDate: "2024-09-15",
    totalNumberOfComments: 56,
    comments: [
      {
        id: "c003",
        rating: 5,
        username: "techFan",
        commentMessage: "Tüm özellikleri çok iyi çalışıyor.",
      },
      {
        id: "c004",
        rating: 5,
        username: "styleGuru",
        commentMessage: "Bilekte çok şık duruyor.",
      },
    ],
  },
  {
    productName: "Dizüstü Bilgisayar",
    price: 7499.99,
    rating: 5,
    currencySymbol: "₺",
    productSliderList: [
      "https://images.unsplash.com/photo-1518188689134-aa7854b27574?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1616029832310-d07b9d4f1d0a?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1565209559029-9e4094301949?q=80&w=2176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    productImageUrl:
      "https://plus.unsplash.com/premium_photo-1683141496040-eeef9702269f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    id: "003",
    productArrivalDate: "2024-08-22",
    totalNumberOfComments: 342,
    comments: [
      {
        id: "c005",
        rating: 5,
        username: "gamerX",
        commentMessage: "Performansı harika, kesinlikle tavsiye ederim!",
      },
      {
        id: "c006",
        rating: 5,
        username: "graphicsPro",
        commentMessage: "Grafik kartı oyunlarda mükemmel iş çıkarıyor.",
      },
    ],
  },
  {
    productName: "Kablosuz Kulaklık",
    price: 299.99,
    rating: 4,
    currencySymbol: "₺",
    productSliderList: [
      "https://images.unsplash.com/photo-1518188689134-aa7854b27574?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1616029832310-d07b9d4f1d0a?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1565209559029-9e4094301949?q=80&w=2176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    productImageUrl:
      "https://plus.unsplash.com/premium_photo-1677158265072-5d15db9e23b2?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: "004",
    productArrivalDate: "2024-07-10",
    totalNumberOfComments: 78,
    comments: [
      {
        id: "c007",
        rating: 4,
        username: "audioLover",
        commentMessage: "Kulaklığın ses kalitesi iyi ama mikrofon biraz zayıf.",
      },
      {
        id: "c008",
        rating: 4,
        username: "comfortGeek",
        commentMessage: "Konforlu, uzun süre kullanılabiliyor.",
      },
    ],
  },
  {
    productName: "Tablet",
    price: 1499.99,
    rating: 4.5,
    currencySymbol: "₺",
    productSliderList: [
      "https://images.unsplash.com/photo-1518188689134-aa7854b27574?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1616029832310-d07b9d4f1d0a?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1565209559029-9e4094301949?q=80&w=2176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    productImageUrl:
      "https://plus.unsplash.com/premium_photo-1673968280716-ca0c00af8a39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV0fGVufDB8fDB8fHww",
    id: "005",
    productArrivalDate: "2024-09-05",
    totalNumberOfComments: 205,
    comments: [
      {
        id: "c009",
        rating: 5,
        username: "movieBuff",
        commentMessage: "Ekran kalitesi çok iyi, film izlemek için mükemmel.",
      },
      {
        id: "c010",
        rating: 4,
        username: "batteryMaster",
        commentMessage: "Batarya ömrü beklediğimden daha uzun.",
      },
    ],
  },
];
