const main = () => {
  document.querySelector('h1').textContent += '?'
}

document.addEventListener('DOMContentLoaded', main)


const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs']
const rank = ['Ace', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']

const Deck = []
for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < rank.length; j++) {
    Deck.push(suits[i] + rank[j])
  }
}
console.log(Deck)

const shuffle =[]
for(let i = 0; i < Deck.length; i++) {

  console.log(Deck[i])
const j = Math.ceil(Math.random() * i)
let temp = Deck[i]
Deck[i] = Deck [j]
Deck[j] = temp  
}
console.log(Deck)


const draw =() => {
  console.log('Button is clicked')
document.querySelector('.output'). textContent = "card"
}
