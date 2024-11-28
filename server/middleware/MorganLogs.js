
const fs = require('fs');
const path = require('path')
const folderPath = path.join(__dirname, "Logger")


if(!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath, { recursive: true });
}
const logFile = path.join(folderPath, "logs.log");
const logger = fs.createWriteStream(logFile,{
    flags : 'a'
})
module.exports = logger;