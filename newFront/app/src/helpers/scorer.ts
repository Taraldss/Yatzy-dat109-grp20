type ArrFn = (a: number[], b?: number) => number[];
interface Round {
  name: string;
  scorer: (arg: number[]) => number;
}

const sum = (a: number[]) => a.reduce((sum, current) => sum + current, 0);
const filterOnNumber: ArrFn = (a, n) =>
  a.filter((potentialNumber) => potentialNumber === n);
const findPairs: ArrFn = (a) => onlyUnique(findDupe(a));
const findTwoPairs: ArrFn = (a) =>
  findPairs(a).length == 2 ? findPairs(a) : [0];
const findDupe: ArrFn = (a, n = 2) =>
  a
    .sort()
    .reverse()
    .filter((current, i, self) => current == self[i - n - 1]);
const onlyUnique: ArrFn = (a) =>
  a.filter((current, i, self) => self.indexOf(current) == i);

const rounds: Round[] = [
  { name: "Ones", scorer: (dices) => sum(filterOnNumber(dices, 1)) },
  { name: "Twos", scorer: (dices) => sum(filterOnNumber(dices, 2)) },
  { name: "Threes", scorer: (dices) => sum(filterOnNumber(dices, 3)) },
  { name: "Fours", scorer: (dices) => sum(filterOnNumber(dices, 4)) },
  { name: "Fives", scorer: (dices) => sum(filterOnNumber(dices, 5)) },
  { name: "Sixes", scorer: (dices) => sum(filterOnNumber(dices, 6)) },

  { name: "One pair", scorer: (dices) => findPairs(dices)[0] * 2 || 0 },
  { name: "Two pairs", scorer: (dices) => sum(findTwoPairs(dices)) * 2 },
  {
    name: "Three of a kind",
    scorer: (dices) => findDupe(dices, 3)[0] * 3 || 0,
  },
  {
    name: "Four of a kind",
    scorer: (dices) => findDupe(dices, 4)[0] * 4 || 0,
  },
  {
    name: "Full house",
    scorer: (dices) =>
      findDupe(dices, 2).length == 1 && onlyUnique(findPairs(dices))[1]
        ? sum(dices)
        : 0,
  },
  {
    name: "Small straight",
    scorer: (dices) =>
      onlyUnique(dices).length == 5 && dices.sort().reverse()[0] != 6 ? 15 : 0,
  },
  {
    name: "Large straight",
    scorer: (dices) =>
      onlyUnique(dices).length == 5 && dices.sort()[0] != 1 ? 20 : 0,
  },
  {
    name: "Chance",
    scorer: (dices) => sum(dices),
  },

  {
    name: "Yatzee",
    scorer: (dices) => (findDupe(dices, 5)[0] ? 50 : 0),
  },
];

export default rounds;
