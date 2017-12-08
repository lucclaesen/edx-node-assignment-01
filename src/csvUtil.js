const fs = require("fs");

/**
 * Gets the array of lines in the file with the given path.
 * @param {string}              The file path.
 * @returns {Promise<[string]}  A promise for the lines in the file.  
 */
function getLines(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf-8", (err, buff) => {
            if (err) {
                reject("Could not read the file");
            }
            else {
                resolve(buff
                    .split('\n')
                    .filter((l) => l.trim().length > 0));
            }
        });
    });
}

/**
 * Gets the comma seperated values from the given line.
 */
function getValues(line) {
    return line
            .split(",")
            .map((v) => v.trim());
}

/**
 * Gets an array of objects represented by the csv file at the given path.
 * @param {string}              The path of the csv file
 * @returns {Promise<[any]>}    A promise for the objects. 
 */
function csv2Obj(csvPath) {
    return getLines(csvPath)
    .then(([header, ...data]) => {
        const fields = getValues(header);
        return data.map((dataLine) => {
            const obj = {};
            const values = getValues(dataLine);
            fields.forEach((field, index) => {
                obj[field] = values[index];
            });
            return obj;
        });
    }, (reason) => console.error(reason));
}

module.exports = { csv2Obj: csv2Obj};