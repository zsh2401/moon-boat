import { Entity, Column, PrimaryGeneratedColumn, OneToOne, Repository } from "typeorm"
import getDBConnection from "../common/getDBConnection";
import Password from "./Password";
@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    //@ts-expect-error
    id: number;

    @Column({ nullable: false })
    //@ts-expect-error
    username: string;

    @Column({ nullable: true })
    //@ts-expect-error
    nickname: string;

    @OneToOne(t => Password, pwd => pwd.owner, { nullable: false })
    //@ts-expect-error
    password: Password;

    static async repo(): Promise<Repository<User>> {
        return getDBConnection("user").getRepository(User);
    }
}