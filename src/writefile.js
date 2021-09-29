const fs = require('fs');

const writefile = data => {
    return new Promise((resolve, reject) => {
        fs.writefile('./dist/index.html', data, err => {
            if(err) {
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