const fs = require('fs');

const writeFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "Team profile has been created! Check the index.html file."
            });
        });
    });
};





module.exports = writeFile;