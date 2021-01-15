import config from "../../../config";
import handler from "../handler/login";
import f from "../handler/send";
import { ITask } from "./ITask";

const t: ITask = {
    rule: config.checkRule ?? "* 0 * * *",
    f: () => {

    }
}
export default t;