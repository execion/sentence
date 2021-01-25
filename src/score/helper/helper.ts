import {ListWord} from '../interface/score.interface';

export function listToString(listObject: ListWord[]): string {
        const letters = listObject.map( (item) => item.letter).join(" ");
        return letters;
}


