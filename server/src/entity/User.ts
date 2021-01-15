import { Entity, Column, PrimaryGeneratedColumn, OneToOne, Repository, OneToMany } from "typeorm"
import getDBConnection from "../common/getDBConnection";
import Contact from "./Contact";
import FireStatus from "./FireStatus";
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

    @OneToMany(t => Contact, c => c.owner)
    //@ts-expect-error
    contacts: Contact[];

    @OneToOne(t => Password, pwd => pwd.owner, { nullable: false })
    //@ts-expect-error
    password: Password;

    /**
     * Unix timestamp
     */
    @Column({ nullable: false })
    //@ts-expect-error
    lastLogin: number;

    @Column({ nullable: true })
    //@ts-expect-error
    status: FireStatus;

    static async repo(): Promise<Repository<User>> {
        return (await getDBConnection("user"))
            .getRepository(User);
    }
}