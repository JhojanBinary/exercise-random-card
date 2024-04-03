function generateRandomCard() {
    var suits = ['heart', 'spade', 'club', 'diamond'];
    var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    
    var randomSuitIndex = Math.floor(Math.random() * suits.length);
    var randomValueIndex = Math.floor(Math.random() * values.length);
    
    var randomSuit = suits[randomSuitIndex];
    var randomValue = values[randomValueIndex];
    
    var cardDiv = document.getElementById('card');
    
    cardDiv.className = 'card';
    
    cardDiv.classList.add(randomSuit);

    cardDiv.textContent = randomValue;
  }
  