import "./Dice.css";
import Die from "./Die";

export default function Dice({ diceRolls, color }) {
    return (
        <section className="Dice">
            {diceRolls.map(die => <Die val={die} color={color} />)}
        </section>
    );
}
