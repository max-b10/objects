let restaurant = {
  name: "Nandos",
  guestCapacity: 75,
  guestCount: 50,
  checkAvailibility: function (partySize) {
    console.log(partySize);
  },
};
restaurant.checkAvailibility(30);
