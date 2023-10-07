import './App.css'
import LuckyN from './LuckyN'
import { sumOfRolls } from './utils'

function App() {
  function rollSame(dice) {
    return dice.every(die => die===dice[0])
  }
  function roll7(dice) {
    console.log(sumOfRolls(dice) === 7)
    return sumOfRolls(dice) === 7;
  }
  function rollOdd(dice) {
    return sumOfRolls(dice)%2 === 1;
  }
  return (
    <>
      <LuckyN title='Roll Same' numOfDice={2} winCheck={rollSame} color={"crimson"}/>
      <LuckyN title='Roll a 7' numOfDice={3} winCheck={roll7} color={"DarkBlue"}/>
      <LuckyN title='Roll a Odd number' numOfDice={2} winCheck={rollOdd} color={"SeaGreen"}/>
    </>
  )
}

export default App
