export interface Score {
    id: number;
    answerCorrect: string;
    answerUser: ListWord[];
}
export interface ListWord {
    id: string;
    letter: string;
}