const path = require('path');
const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

const paths = (pathname) => {
    fs.readdir(pathname, (err1, data) => {
        if (err1) throw err1;
        for(let i = 0; i < data.length; i++) {
            let temp = path.join(pathname, data[i]);
            fs.stat(temp, (err2, stats) => {
                if (err2) throw err2;
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