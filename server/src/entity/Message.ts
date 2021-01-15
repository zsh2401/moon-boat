import { Entity, Column, PrimaryGeneratedColumn, OneToOne, Repository, ManyToMany, JoinTable } from "typeorm"
import getDBConnection from "../common/getDBConnection";
import Contact from "./Contact";
@Entity()
export default class Message {

    @PrimaryGeneratedColumn()
    //@ts-expect-error
    id: number;

    @Column({ nullable: false })
    //@ts-expect-error
    value: string;


    @ManyToMany(t => Contact, c => c.receiving)
    @JoinTable()
    //@ts-expect-error
    sendTo: Contact[];

    static async repo(): Promise<Repository<Message>> {
        return (await getDBConnection("message"))
            .getRepository(Message);
    }
}