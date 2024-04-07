// Declare expect with chai
let expect = chai.expect;

describe('testDealFunction', function() {
    describe('#deal', function() {
        // Test the deal function
        it('should split the deck and deal the cards to each player', function() {
            let player1 = new Player ('Screwtape');
            let player2 = new Player ('Wormwood');
            
            gameDeck.createDeck()
            gameDeck.shuffle()
            gameDeck.deal() 

            expect(player1.hand).to.be.a('array');
        }); 

        // Test the length of Player hand
        let gameDeck = new Deck ()
        it('Length of Player hand should be equal to 26', function() {
            expect(player2.hand.length).to.equal(26);
        });
    });
});

// Test the createDeck function
describe('createDeck', function() {
    let gameDeck = new Deck();
    it("should create a 52-card deck", function () {
                
        gameDeck.createDeck();
        expect(gameDeck.deck.length).to.equal(52);
    });
});