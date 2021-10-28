var path = require("path");

function getFilePath() {
    return path.join(__dirname, "dummyData.json");
}

function getJsonFile() {
    const fs = require("fs/promises");
    return fs
        .readFile(getFilePath())
        .then((data) => JSON.parse(data))
        .catch((error) => {
            // Do something if error
            console.log("Some shit happened with the json data file.\n", error);
        });
}
module.exports = getJsonFile;
