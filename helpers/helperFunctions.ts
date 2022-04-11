import DiceObject from "../src/types/resources/DiceObject";
import Player from "../src/types/resources/Player";

export function checkScore(round: number, dices: number[]): number {
  let value = 0;
  switch (round) {
    case 1:
      return addDiceNumbers(1, dices);
      break;
    case 2:
      return addDiceNumbers(2, dices);
      break;
    case 3:
      return addDiceNumbers(3, dices);
      break;
    case 4:
      return addDiceNumbers(4, dices);
      break;
    case 5:
      return addDiceNumbers(5, dices);
      break;
    case 6:
      return addDiceNumbers(6, dices);
      break;
    case 7:
      return pair(dices);
      break;
    case 8:
      return twoPair(dices);
      break;
    case 9:
      return similar(3, dices);
      break;
    case 10:
      return similar(4, dices);
      break;
    case 11:
      return smallStraight(dices);
      break;
    case 12:
      return largeStraight(dices);
      break;
    case 13:
      return calculateHouse(dices);
      break;
    case 14:
        return dices.reduce((acc, currentDice) => currentDice ? acc + currentDice : acc,0)
    case 15:
      return similar(5, dices);
      break;
    default:
      return 0;
  }
}
function calculateHouse(dices: number[]){
    return isHouse(dices) ? dices.reduce((acc, dice) => acc + dice, 0) : 0;
}
function isHouse(dices: number[]) {
  dices.sort();
  return (dices[0] === dices[1] && dices[1] === dices[2] && dices[3] === dices[4]) ||
  (dices[0] === dices[1] && dices[2] === dices[3] && dices[3] === dices[4]);
}
function largeStraight(dices: number[]) {
  let value = 0;
  let arr: number[] = [];
  dices.map((dice) => {
    arr.push(dice);
  });
  for(let i = 2; i <=6; i++){
    if(arr.includes(i)){
      value += i;
    }
  }

  return value === 20  ? 20 : 0;
}
function smallStraight(dices: number[]) {
  let value = 0;
  let arr: number[] = [];
  dices.map((dice) => {
    arr.push(dice);
  });
  for(let i = 1; i <=5; i++){
    if(arr.includes(i)){
      value += i;
    }
  }

  return value === 15  ? 15 : 0;
}
function pair(dices: number[]) {
  const sortedDice = dices.sort()
  return sortedDice.map((dice, index) => dice == dices[index - 1] ? dice : 0).sort().reverse()[0] * 2
}
function twoPair(dices: number[]) {
  const sortedDice = dices.sort()
  const result = sortedDice.map((dice, index) => dice == dices[index - 1] ? dice : 0).filter((dice, i, self) => self.indexOf(dice)==i).filter(dice => dice != 0)
  return result.length == 2 ? result.reduce((acc, val) => acc + val, 0) * 2 : 0
}
function similar(number: number, dices: number[]) {

  if (dices.filter((dice) => dice === 6).length >= number) {
    return 6 * number;
  } else if (dices.filter((dice) => dice === 5).length >= number) {
    return 5 * number;
  } else if (dices.filter((dice) => dice === 4).length >= number) {
    return 4 * number;
  } else if (dices.filter((dice) => dice === 3).length >= number) {
    return 3 * number;
  } else if (dices.filter((dice) => dice === 2).length >= number) {
    return 2 * number;
  } else if (dices.filter((dice) => dice === 6).length >= number) {
    return number;
  } else{
    return 0;
  }


}
function addDiceNumbers(number: number, dices: number[]) {
  return dices.reduce((acc, currentDice) => currentDice == number ? acc + currentDice : acc,0)
}
export function delay(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}
export function calculatePlayerSum(firstOrSecond: number, player: Player){
  switch(firstOrSecond){
    case 1:
      return player.ones + player.twos + player.threes + player.fours + player.fives + player.sixes;
      break;
    case 2:
      return player.ones + player.twos + player.threes + player.fours + player.fives + player.sixes + player.pair + player.two_pair + player.house + player.three_same + player.four_same + player.yatzy + player.small_strait + player.big_strait;
      break;
    default:
      return 0
  }
}
export function calculateBonus(player: Player){
  
    return calculatePlayerSum(1, player) > 63 ? 50 : 0;
}
