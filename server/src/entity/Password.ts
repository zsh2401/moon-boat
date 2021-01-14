import { Entity, Column, PrimaryGeneratedColumn, OneToOne, Repository } from "typeorm"
import getDBConnection from "../common/getDBConnection";
import User from "./User";
@Entity()
export default class Password {
    @PrimaryGeneratedColumn()
    //@ts-expect-error
    id: number;

    @OneToOne(t => User, u => u.password)
    //@ts-expect-error
    owner: User;

    @Column({ nullable: false })
    //@ts-expect-error
    value: string;

    static async repo(): Promise<Repository<Password>> {
        return getDBConnection("password").getRepository(Password);
    }
}