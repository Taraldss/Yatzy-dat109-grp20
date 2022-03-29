import Observer from "./Observer";
import Player from "./Player";

interface Yatzy {

    id: string,
    name: string,
    players: Player[],
    observers: Observer[],

}
export default Yatzy; 