const fs = require("fs");
const path = require("path");

function main(pathStr){
    let dirs = fs.readdirSync(path.resolve(pathStr));
    for(let dir of dirs){
        let targetDir = path.resolve(pathStr, dir);
        let stat = fs.statSync(targetDir);

        if(!stat.isDirectory()){
            continue;
        }

        if(dir != "node_modules"){
            main(targetDir);
            continue;
        }

        console.log(targetDir);
        fs.rmdirSync(targetDir, {
            recursive: true
        });
    }
}

main(process.argv[2]);
