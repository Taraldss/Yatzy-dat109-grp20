
interface Player {

    id: string,
    name: string,
    ones: number | null,
    twos: number,
    threes: number,
    fours: number,
    fives: number,
    sixes: number,
    bonus: number,
    pair: number,
    two_pair: number,
    three_same: number,
    four_same: number,
    small_strait: number,
    big_strait: number,
    chance: number,
    yatzy: number,

}

export default Player;