import express from "express"
import Router from "./Router";
import config from "../../config"
import bodyparser from "body-parser"
import "colors"
import runCrontab from "./crontab/runCrontab";
(() => {
    const app = express();

    //CORS
    app.all('*', (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "content-type");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        next();
    });

    //Config middleware.
    app.use(bodyparser.urlencoded({ extended: false }));
    app.use(bodyparser.json())
    app.use(bodyparser.text())

    //Config routing map.
    Router(app);

    //Run crontab
    runCrontab();

    //Start server
    app.listen(config.backendPort, () => {
        console.log("Moonboat's Backend Server started at " + (config.backendPort + "").blue);
    });
})();