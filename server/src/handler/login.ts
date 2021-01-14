import { IRouterHandler, RequestHandler, response } from "express";
import LoginRequestBody from "../../../common/data/LoginRequestBody";
import LoginResponseBody from "../../../common/data/LoginResponseBody";
import { ok } from "../../../common/data/RestfulResult"
//Just For Type Check
const handler: RequestHandler = (request, resonse) => {
    const body: LoginRequestBody = request.body;
    const result: LoginResponseBody = {
        token: JSON.stringify(body)
    }
    response.send(ok(result));
}
export default handler;