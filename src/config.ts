interface IConfig {
    currentENV: string,
    rootHost: string,
}
let config:IConfig = require('./config/dev.json');

switch (process.env.REACT_APP_SECRET_API) {
    case "dev":
        config = require("./config/dev.json");
        break;
    case "test":
        config = require("./config/test.json");
        break;
    case "prod":
        config = require("./config/prod.json");
        break;
    default:
        break;
}
export default config;