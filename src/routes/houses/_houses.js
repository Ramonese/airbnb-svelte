const houses = [
  {
    id: '2329',
    hostName: 'Anna',
    picture: '/img/house-1.jpg',
    type: 'Entire house',
    town: 'Ostuni',
    title: 'Beautiful flat in Ostuni!',
    price: '50.00',
    rating: 4.93,
    reviewsCount: 198,
    superhost: true,
    description:
      "Spend a unforgettable holiday in the enchanting surroundings of the town of Cisternino (reachable from the near airports of Bari and Brindisi).<br>Trullo Edera offers a heaven of peace and tranquillity, set in an elevated position with a stunning view.<br> It's the perfect place if you like nature. You can stay under an olive tree reading a good book, you can have a walk in the small country streets or go to the nearest beaches.<br> You can even easily visit any of the sights in Apulia such as the caves of Castellana, the trulli of Alberobello, the baroque cities of Lecce and Martina Franca, the excavations of Egnazia, the zoosafari of Fasano, Castel del Monte with Frederick's castle, Grottaglie famous for its ceramics, Taranto, Brindisi and Lecce museums.<br>    Prices vary on period and are to be considered included: in-outcoming cleanings, towels, sheets, water, gas, electricity.",
    guests: 4,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    amenities: {
      wifi: true,
      kitchen: true,
      heating: true,
      freeParking: true,
    },
    entirePlace: true,
    reviews: [
      {
        user: 'Radhika',
        date: 'August 2019',
        avatar:
          'https://a0.muscache.com/im/users/34403074/profile_pic/1432859567/original.jpg?aki_policy=profile_x_medium',
        comment:
          'We had an excellent stay at the trullo - everything was perfect, starting with Anna’s generosity to meet us in town so we wouldn’t lose our way, to the beautiful setting of the trullo, to the fresh eggs and tomatoes for our use, to Anna’s tips and suggestions for local',
      },
    ],
  },
  {
    id: '1523',
    picture: '/img/house-2.jpg',
    type: 'Entire house',
    town: 'Isla Mujeres',
    title: 'The World Famous Seashell House ~ Casa Caracol',
    price: '70.00',
    rating: 4.77,
    reviewsCount: 246,
    superhost: false,
  },
  {
    id: '23',
    picture: 'img/house-1.jpg',
    type: 'Shared house',
    town: 'Riga',
    title: 'Nice flat',
    price: '25.00',
    rating: 3.77,
    reviewsCount: 10,
    superhost: false,
  },
]

export default houses
