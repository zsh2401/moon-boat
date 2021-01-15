import { Entity, Column, PrimaryGeneratedColumn, OneToOne, Repository, ManyToMany, JoinTable, ManyToOne } from "typeorm"
import getDBConnection from "../common/getDBConnection";
import Message from "./Message";
import User from "./User";
@Entity()
export default class Contact {

    @PrimaryGeneratedColumn()
    //@ts-expect-error
    id: number;

    @ManyToOne(t => User, user => user.contacts, { nullable: false })
    //@ts-expect-error
    owner: User;

    @Column({ nullable: true })
    //@ts-expect-error
    phoneNumber: string;

    @Column({ nullable: true })
    //@ts-expect-error
    emailAddress: string;

    @Column({ nullable: true })
    //@ts-expect-error
    names: string[];

    @ManyToMany(t => Message, msg => msg.sendTo)
    //@ts-expect-error
    receiving: Message[];

    static async repo(): Promise<Repository<Contact>> {
        return (await getDBConnection("contact"))
            .getRepository(Contact);
    }
}