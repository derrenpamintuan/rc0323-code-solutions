console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  { name: 'Player 1', hand: [] },
  { name: 'Player 2', hand: [] },
  { name: 'Player 3', hand: [] },
  { name: 'Player 4', hand: [] }
];

const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const deck = [];

for (let i = 0; i < ranks.length; i++) {
  deck.push({ rank: ranks[i], suit: 'clubs' });
  deck.push({ rank: ranks[i], suit: 'diamonds' });
  deck.push({ rank: ranks[i], suit: 'hearts' });
  deck.push({ rank: ranks[i], suit: 'spades' });
}

function shuffle(deck) {
  let currentIndex = deck.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
  }

  return deck;
}

const shuffledDeck = shuffle(deck);

for (let i = 0; i < players.length; i++) {
  const playersHand = players[i].hand;

  if (playersHand.length !== 2) {
    playersHand.push(shuffledDeck.pop(), shuffledDeck.pop());
  }
}

const scores = [];
for (let i = 0; i < players.length; i++) {
  const player = players[i];
  let score = 0;
  for (let j = 0; j < player.hand.length; j++) {
    const card = player.hand[j];
    if (card.rank === 'Ace') score += 11;
    else if (['King', 'Queen', 'Jack'].includes(card.rank)) score += 10;
    else score += parseInt(card.rank);
  }
  scores.push({ name: player.name, score });
}

let highest = scores[0];

for (let i = 0; i < scores.length; i++) {
  if (scores[i].score > highest.score) {
    highest = scores[i];
  }
}

console.log(highest.name + ' is the winner with a score of ' + highest.score);
