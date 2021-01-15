import Contact from "../entity/Contact";
import Message from "../entity/Message";
export interface Result {
    success: boolean;
    cause: any;
}
export default
    async function (msg: Message, contact: Contact): Promise<Result> {
    return {
        success: false,
        cause: "Not implemented"
    };
}