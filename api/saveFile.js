const path = require('path'); //https://nodejs.org/api/path.html
const fs = require('fs'); //https://nodejs.org/api/fs.html

const toJSON = (objectToSave, fileName) => {
    try {
        const json = JSON.stringify(objectToSave, null, 4);
        const result = (err) => {
            if (err) throw err;
            console.log('File has been saved!');
        };
        const pathFile = path.join(__dirname, '../', `data/${fileName}.json`);

        fs.writeFile(
            pathFile,
            json,
            {
                encoding: 'utf8',
                flag: 'w',
            },
            result
        );
    } catch (error) {
        console.log('Error: ', error);
    }
};

module.exports = {
    toJSON,
};
