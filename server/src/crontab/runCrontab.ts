import ns from "node-schedule"
import config from "../../../config";
import { ITask } from "./ITask";
import checkStatus from "./checkStatus"
const tasks: ITask[] = [
    checkStatus
];
/**
 * Register crontabs when the system is starting.
 */
export default function () {
    tasks.forEach(t => {
        ns.scheduleJob(t.rule, t.f);;
    })
}