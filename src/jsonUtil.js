const fs = require("fs");
const path = require("path");

/**
 * Saves the given objects as json to a file with the given path.
 * @param {string}          The file path. 
 * @param {[any]}           The array of objects to save as json
 * @returns {Promise<void>}   A promise for the completion of the save operation. 
 */
function saveObj2File(filePath, obj) {
    return new Promise((resolve, reject) => {
        const json = JSON.stringify(obj, null, "\t");
        fs.writeFile(filePath, json, { "encoding": "utf8" }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();                
            }
        });
    })
}

module.exports = {
    saveObj2File: saveObj2File
};