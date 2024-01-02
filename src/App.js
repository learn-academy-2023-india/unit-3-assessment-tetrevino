import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["♡", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) This variable holds a randomized value from the arrays suit and rank, it will randomly select an index with the Math function. 
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2) The if statement which has a condition of the setter hook "hand" index must be strictly equal to -1, which means no cards have been drawn yet.
    if (hand.indexOf(draw) === -1) {
      // 3)Once the condition is met, the setHand object will add each value of the variable "draw" then add it to the hand array, 
      setHand([...hand, draw])
      // 4) The else if statement will perform if its logic if the lenght of the setter hook "hand" is not equal to 52 and greater than -1
    } else if (hand.length !== 52) {
      // 5) Once the else if condition is met, the logic performed is the drawCard() function, which will randomize a new value and display on the card.
      drawCard()
      // 6)The else statement will perform its logic if all 52 cards have been drawn. 
    } else {
      // 7)Once the else condition is met, an alert will display on the screen, letting the player know all cards have been dealt
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
    setHand([])
    console.log(shuffle)
  }

  return (
    <>
    <h1>Draw a Card</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </>
  )
}

export default App
