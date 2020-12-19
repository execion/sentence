import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sentence {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sentence: string;
}