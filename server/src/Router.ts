import { Express } from "express"
import login from "./handler/login"
/**
 * Config the routing map for specified Express application.
 * @param app 
 */
export default function (app: Express) {
    app.post("login", login);
}