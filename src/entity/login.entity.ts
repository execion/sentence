import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    date_passport: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    create_date: string;
}