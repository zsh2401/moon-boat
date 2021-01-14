export default interface MoonBoatConfig {
    type: "sqlite3" | "mysql";
    
    database: string;

    dbhost: string;
    dbport: number;

    userName: string;
    password: string;

    backHost: string;
    backPort: number;

    frontPort: number;
}