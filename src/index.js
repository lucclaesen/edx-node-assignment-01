const csv = require("./csvUtil");
const json = require("./jsonUtil");
const path  = require("path");

const input = path.join(__dirname, "../data", "customer-data.csv");
const output = path.join(__dirname, "../data", "customer-data.json");
csv.csv2Obj(input).then((objs) => json.saveObj2File(output, objs));
