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

const shuffle = []
for (let i = 0; i < Deck.length; i++) {

  console.log(Deck[i])
  const j = Math.ceil(Math.random() * i)
  let temp = Deck[i]
  Deck[i] = Deck[j]
  Deck[j] = temp
}
console.log(Deck)

const drawOne = () => {
  console.log('Button is clicked')
  const card = Deck.pop()
  document.querySelector('.card-one-face-up').textContent = card
}

document.querySelector('.pick-a-card-button').addEventListener('click', drawOne)


const draw = () => {
  console.log('Button is clicked')
  const card = Deck.pop()
  document.querySelector('.card-one-face-up').textContent = card
  const cardTwo = Deck.pop()
  document.querySelector('.card-two-face-up').textContent = cardTwo
}

document.querySelector('.pick-a-card-button').addEventListener('click', draw)

const dealerhand = () => {
  console.log('button is clicked')

  
}

document.querySelector('.dealer-hand-hit-me-button').addEventListener('click', dealerhand)