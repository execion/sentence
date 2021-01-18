import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("login")
export class LoginEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    user: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    passport: string;

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    modified_at: Date;
}