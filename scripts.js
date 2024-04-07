// War Card Game

// Create the Card Class
class Card {
  constructor(cardValue, suit, rank) {
      this.cardValue = cardValue;
      this.suit = suit;
      this.rank = rank;
  }
}

// Create a Player class
class Player {
  constructor(name) { //place holder for things to get passed in
      this.name = name;
      this.score = 0; 
      this.hand = [];
  }
}

// Declare player variables
let player1 = new Player('Screwtape');
let player2 = new Player('Wormwood');

// Log player output 
console.log(player1);
console.log(player2);

// Create a Deck class
class Deck {
  constructor() {
      this.deck = []; // Deck array container
      this.cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']; 
      this.suits = ['hearts', 'diamonds', 'clubs', 'spades'];
      this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

      }

  // create Deck method within the class
  createDeck() {
      // Loop through card values
      for (let i = 0; i < this.cardValues.length; i++) {
        // Loop through suit values
        for(let s = 0; s < this.suits.length; s++) {
              this.deck.push(new Card(this.cardValues[i], this.suits[s], this.ranks[i]));
          }
      }
      // Log to the console
      console.log(this.deck);
  }

  // Method to shuffle cards within Deck class
  shuffle() {
      let currentIndex = this.deck.length
      let temporaryValue
      let randomIndex
      // While elements remain to be shuffled
      while (0 !== currentIndex) {
          //Choose a remaining element
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          // and exchange it with the current element
          temporaryValue = this.deck[currentIndex];
          this.deck[currentIndex] = this.deck[randomIndex];
          this.deck[randomIndex] = temporaryValue;
      }

      // Return the output
      return this.deck;
  }

  deal() { // Deal method within the class
      player1.hand = this.deck.slice(0, 26); 
      player2.hand = this.deck.slice(26);

       console.log(player1);
       console.log(player2);
  }
}   

// Declare gameDeck variable
let gameDeck = new Deck();
gameDeck.createDeck();
gameDeck.shuffle();
gameDeck.deal();

player1.score = 0;
player2.score = 0;

// Loop through cardValue
for (let i = 0; i < 26; i++) {
  console.log("\n P1 card:", player1.hand[i].cardValue, " P2 card:", player2.hand[i].cardValue)

  // Conditional to award points to Players
if (player1.hand[i].rank > player2.hand[i].rank) {
  player1.score += 1
  console.log(`${player1.name} wins the round! Score: ${player1.score}`)
} else if (player1.hand[i].rank < player2.hand[i].rank) {
  player2.score += 1
  console.log(`${player2.name} wins the round! Score: ${player2.score}`)
} else {
  console.log("TIE!")
}
}

// Log the Players' final scores
console.log(`
Final scores: ${player1.name}: ${player1.score}, ${player2.name}: ${player2.score}`)
if (player1.score > player2.score) {
  console.log(` 
  ${player1.name} is the winner!`)
} else if (player1.score < player2.score) {
  console.log(` 
  ${player2.name} is the winner!`)
}
