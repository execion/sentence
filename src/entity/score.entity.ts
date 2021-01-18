import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("score")
export class ScoreEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_sentence: number;

    @Column()
    correct: number;

    @Column()
    incorrect: number;
}