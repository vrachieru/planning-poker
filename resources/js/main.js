var cards = [
  new Card("0",   "#3753b0"),
  new Card("1/2", "#0098f0"),
  new Card("1",   "#00acf0"),
  new Card("2",   "#00c0d1"),
  new Card("3",   "#009687"),
  new Card("5",   "#4db057"),
  new Card("8",   "#8cc255"),
  new Card("13",  "#ffe852"),
  new Card("20",  "#ffbe30"),
  new Card("40",  "#f73636"),
  new Card("100", "#000000"),
  new Card("?",   "#9924ab")
]

function Card(name, color) {
  this.name = name;
  this.color = color;
}

function getCard(name) {
  for (key in cards) {
    if (cards[key].name == name) {
      return cards[key];
    }
  }
}

function displayCards() {
  cards.forEach(function (card) {
    $('#values').append('<a href="#">'+ card.name + '</a>');
  });
}

$(document).ready(function() {
  displayCards();

  $('#values a').click(function() {
  	var selectedCard = getCard($(this).text());
    $('#value').text(selectedCard.name);
    $('#card').css('background-color', selectedCard.color);
  });
});
