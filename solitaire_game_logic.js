// Card Class
class Card {
    constructor(suit, rank) {
        this.suit = suit; // 'hearts', 'diamonds', 'clubs', 'spades'
        this.rank = rank; // 1-13 (Ace=1, Jack=11, Queen=12, King=13)
        this.faceUp = false;
        this.element = null;
    }
    
    get color() {
        return (this.suit === 'hearts' || this.suit === 'diamonds') ? 'red' : 'black';
    }
    
    get rankName() {
        const names = ['', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        return names[this.rank];
    }
    
    get suitSymbol() {
        const symbols = {
            'hearts': '♥',
            'diamonds': '♦',
            'clubs': '♣',
            'spades': '♠'
        };
        return symbols[this.suit];
    }
    
    createElement() {
        const cardElement = document.createElement('div');
        cardElement.className = `card ${this.color}`;
        cardElement.draggable = true;
        
        if (this.faceUp) {
            cardElement.innerHTML = `
                
${this.rankName}

                
${this.suitSymbol}

                
${this.rankName}

            `;
        } else {
            cardElement.classList.add('face-down');
        }
        
        this.element = cardElement;
        return cardElement;
    }
    
    flip() {
        this.faceUp = !this.faceUp;
        if (this.element) {
            this.element.classList.add('flipping');
            setTimeout(() => {
                this.element.classList.remove('flipping');
                this.updateElement();
            }, 300);
        }
    }
    
    updateElement() {
        if (!this.element) return;
        
        if (this.faceUp) {
            this.element.classList.remove('face-down');
            this.element.innerHTML = `
                
${this.rankName}

                
${this.suitSymbol}

                
${this.rankName}

            `;
        } else {
            this.element.classList.add('face-down');
            this.element.innerHTML = '';
        }
    }
}

// Deck Class
class Deck {
    constructor() {
        this.cards = [];
        this.initializeDeck();
    }
    
    initializeDeck() {
        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        this.cards = [];
        
        suits.forEach(suit => {
            for (let rank = 1; rank <= 13; rank++) {
                this.cards.push(new Card(suit, rank));
            }
        });
    }
    
    shuffle() {
        // Fisher-Yates shuffle algorithm
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    
    deal(count = 1) {
        return this.cards.splice(0, count);
    }
}
