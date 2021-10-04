const path = require('path');
const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

const paths = (pathname) => {
    fs.readdir(pathname, (err, data) => {
        for(let i = 0; i < data.length; i++) {
            let temp = path.join(pathname, data[i]);
            fs.stat(temp, (err, stats) => {
                if(stats.isDirectory()) {
                    paths(temp);
                } else {
                    if (path.extname(temp) == ".js") {
                        console.log(temp);
                    }
                }
            });
        }
    });
}

paths("./test");