"use strict";
var HarumaToolKit = function () {
    var Resources = function () {
        var ToolSplit = function () {
            var StartFunction = function () {
                var ReadFile = function () {
                    const readline = require('readline');
                    const rl = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    });
                    rl.question('Input your json name (without ".json"): ', function (filename) {
                        rl.question('Input folder name: ', function (filedir) {
                            WorkFunction(filename + '.json', filedir)
                        });
                    });
                    var WorkFunction = function (filename, filedir) {
                        console.time("Done function in ");
                        const dir = filedir + '/';
                        const fs = require('fs');
                        if (!fs.existsSync(dir)) {
                            fs.mkdirSync(dir);
                        }
                        fs.readFile(filename, 'utf8', (err, data) => {
                            if (err) {
                                console.error(err);
                                return;
                            }
                            try {
                                try {
                                    data = JSON.parse(data);
                                    try {
                                        for (let i = 0; i < data.groups.length; i++) {
                                            try {
                                                fs.writeFileSync(dir + data.groups[i].id + '.json', JSON.stringify(data.groups[i], null, 4),
                                                    {
                                                        encoding: 'utf8',
                                                        flag: 'w'
                                                    });
                                                if (i == (data.groups.length - 1)) {
                                                    try {
                                                        console.timeEnd("Done function in ");
                                                        process.exit(0);
                                                    } catch (error) {
                                                        console.log(error)
                                                    }
                                                }
                                            } catch (bug) {
                                                console.log(bug)
                                            }
                                        }
                                    } catch (bug) {
                                        console.log(bug)
                                    }
                                } catch (err) {
                                    console.log(err)
                                }
                            } catch (error) {
                                console.log(error)
                            }
                        });
                    }
                }
                ReadFile();
            }
            StartFunction();
        }
        ToolSplit();
    }
    Resources();
}
HarumaToolKit()