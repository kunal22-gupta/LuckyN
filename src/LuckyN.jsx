import "./LuckyN.css";
import Dice from "./Dice";
import { useState } from "react";
import { rollDice } from "./utils";
import Button from "./Button";

export default function LuckyN({ title="Dice Game", numOfDice=2, winCheck, color="crimson" }) {
    const [diceRolls, setDice] = useState(rollDice(numOfDice));
    const isWinner = winCheck(diceRolls);
    const rollAgain = () => setDice(rollDice(numOfDice));
    return (
        <main className="LuckyN">
            <h2>
                {title} <span>{isWinner && "You win!🎉"}</span>
            </h2>
            <Dice diceRolls={diceRolls} color={color} />
            <Button label={"Roll again"} whenClicked = {rollAgain} color={color} txtColor={"white"}/>
        </main>
    );
}
