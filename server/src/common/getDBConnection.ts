import { Connection, createConnection } from "typeorm";
import cache from "./cache";

export default async function (id: string = "default"): Promise<Connection> {
    return await cache(`db-connection-${id}`, () => createConnection({
        type: "mysql",
    }));
}