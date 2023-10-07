// Returns a random number from 1-6
function rollRandom() {
    return Math.floor(Math.random() * 6) + 1;
}

// Return an array of random rolls for each dice
function rollDice(numOfDice) {
    return Array.from({length: numOfDice}, () => rollRandom());
}

// Returns sum of all the dice 
function sumOfRolls(diceRolls) {
    return diceRolls.reduce((acc, curr) => acc+curr);
}

export {rollRandom, rollDice, sumOfRolls};