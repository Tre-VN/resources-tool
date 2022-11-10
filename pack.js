"use strict";
var HarumaToolKit = function () {
    var Resources = function () {
        var ToolPack = function () {
            var Worker = function () {
                var StartFunction = function () {
                    const readline = require('readline');
                    const rl = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    });
                    rl.question('Input folder name: ', function (filedir) {
                        console.log('0. Pack Resources.json with fixed slots [Slow]');
                        console.log('1. Pack Resources.json with fixed slots and shadow bugs [Slow]');
                        console.log('2. Pack Resources.json and rewrite [Fast]');
                        rl.question('Bool: ', function (chooseFunc) {
                            if (parseInt(chooseFunc) == 2) {
                                rl.question('Would you like to delete 384 in subgroups ? ', function (delete384) {
                                    rl.question('Would you like to delete 768 in subgroups ? ', function (delete768) {
                                        rl.question('Would you like to delete 1536 in subgroups ? ', function (delete1536) {
                                            packResources(filedir, chooseFunc, delete384, delete768, delete1536);
                                        })
                                    })
                                })
                            }
                            else{
                                packResources(filedir, chooseFunc, 0, 0, 0);
                            }
                        })
                    });
                    var deleteSubgroups = function(formatTexture, ResourcesGroup){
                        try {
                            for (let k = 0; k < ResourcesGroup.length; k++) {
                                if (ResourcesGroup[k].subgroups != undefined) {
                                    for (let p = 0; p < ResourcesGroup[k].subgroups.length; p++) {
                                        if ((ResourcesGroup[k].subgroups[p].id).indexOf(formatTexture) != -1) {
                                            (ResourcesGroup[k].subgroups).splice(p, 1)
                                        }
                                    }
                                }
                            }
                            return
                        } catch (error) {
                            console.log(error)
                        }
                    }
                    var packResources = function (filedir, chooseFunc, delete384, delete768, delete1536) {
                        const worker = parseInt(chooseFunc);
                        const worker_384 = '_384';
                        const worker_768 = '_768';
                        const worker_1536 ='_1536';
                        const dir = './' + filedir + '/';
                        console.time("Done function in ");
                        const fs = require('fs');
                        var ResourcesGroup = [];
                        fs.readdir(dir, (err, files) => {
                            if (err) {
                                throw err
                            }
                            var jsons = [];
                            files.forEach(file => {
                                jsons.push(file);
                            });
                            jsons = jsons.sort()
                            for (let i = 0; i < jsons.length; i++) {
                                let filepath = dir + jsons[i];
                                fs.readFile(filepath, 'utf8', (err, data) => {
                                    if (err) {
                                        console.error(err);
                                        return;
                                    }
                                    try {
                                        data = JSON.parse(data);
                                        ResourcesGroup.push(data);
                                        var slot_count = 0;
                                        if (ResourcesGroup.length == jsons.length) {
                                            for (let k = 0; k < ResourcesGroup.length; k++) {
                                                if (ResourcesGroup[k].resources != undefined) {
                                                    for (let m = 0; m < ResourcesGroup[k].resources.length; m++) {
                                                        if ((worker == 1) || (worker == 2)) {
                                                            if (ResourcesGroup[k].resources[m].id == 'IMAGE_PEA_SHADOWS') {
                                                                ResourcesGroup[k].resources[m].cols = 2;
                                                            }
                                                        }
                                                        if ((worker == 2)) {
                                                            try {
                                                                if ((ResourcesGroup[k].resources[m].x == undefined) && (ResourcesGroup[k].resources[m].type == "Image") && (ResourcesGroup[k].resources[m].atlas != true) && (ResourcesGroup[k].resources[m].path != undefined) && (ResourcesGroup[k].resources[m].parent != undefined) && (ResourcesGroup[k].resources[m].id != undefined) && (ResourcesGroup[k].resources[m].slot != undefined)) {
                                                                    ResourcesGroup[k].resources[m].x = 0;
                                                                };
                                                                if ((ResourcesGroup[k].resources[m].y == undefined) && (ResourcesGroup[k].resources[m].type == "Image") && (ResourcesGroup[k].resources[m].atlas != true) && (ResourcesGroup[k].resources[m].path != undefined) && (ResourcesGroup[k].resources[m].parent != undefined) && (ResourcesGroup[k].resources[m].id != undefined) && (ResourcesGroup[k].resources[m].slot != undefined)) {
                                                                    ResourcesGroup[k].resources[m].y = 0;
                                                                }
                                                                if ((ResourcesGroup[k].resources[m].aflags != undefined) && (ResourcesGroup[k].resources[m].type == "Image")) {
                                                                    ResourcesGroup[k].resources[m].aflags = undefined;
                                                                }
                                                                if ((ResourcesGroup[k].resources[m].runtime != undefined)) {
                                                                    ResourcesGroup[k].resources[m].runtime = undefined;
                                                                }
                                                                if ((ResourcesGroup[k].resources[m].time != undefined)) {
                                                                    ResourcesGroup[k].resources[m].time = undefined;
                                                                }
                                                                if ((ResourcesGroup[k].resources[m].forceOriginalVectorSymbolSize != undefined)) {
                                                                    ResourcesGroup[k].resources[m].forceOriginalVectorSymbolSize = undefined;
                                                                }
                                                                if ((ResourcesGroup[k].resources[m]['#About'] != undefined)) {
                                                                    ResourcesGroup[k].resources[m]['#About'] = undefined;
                                                                }
                                                                if ((ResourcesGroup[k].resources[m]['#comment'] != undefined)) {
                                                                    ResourcesGroup[k].resources[m]['#comment'] = undefined;
                                                                }
                                                                try {
                                                                    if ((ResourcesGroup[k].resources[m].width < 0)) {
                                                                        (ResourcesGroup[k].resources[m].width) = parseInt((ResourcesGroup[k].resources[m].width) * (-1));
                                                                    };
                                                                    if ((ResourcesGroup[k].resources[m].height < 0)) {
                                                                        (ResourcesGroup[k].resources[m].height) = parseInt((ResourcesGroup[k].resources[m].height) * (-1));
                                                                    };
                                                                    if ((ResourcesGroup[k].resources[m].ax < 0)) {
                                                                        (ResourcesGroup[k].resources[m].ax) = parseInt((ResourcesGroup[k].resources[m].ax) * (-1));
                                                                    };
                                                                    if ((ResourcesGroup[k].resources[m].ay < 0)) {
                                                                        (ResourcesGroup[k].resources[m].ay) = parseInt((ResourcesGroup[k].resources[m].ay) * (-1));
                                                                    };
                                                                    if ((ResourcesGroup[k].resources[m].aw < 0)) {
                                                                        (ResourcesGroup[k].resources[m].aw) = parseInt((ResourcesGroup[k].resources[m].aw) * (-1));
                                                                    };
                                                                    if ((ResourcesGroup[k].resources[m].ah < 0)) {
                                                                        (ResourcesGroup[k].resources[m].ah) = parseInt((ResourcesGroup[k].resources[m].ah) * (-1));
                                                                    };
                                                                    if ((ResourcesGroup[k].resources[m].x < 0)) {
                                                                        (ResourcesGroup[k].resources[m].x) = parseInt((ResourcesGroup[k].resources[m].x) * (-1));
                                                                    };
                                                                    if ((ResourcesGroup[k].resources[m].y < 0)) {
                                                                        (ResourcesGroup[k].resources[m].y) = parseInt((ResourcesGroup[k].resources[m].y) * (-1));
                                                                    }
                                                                } catch (error) {
                                                                    console.log(error)
                                                                }
                                                            } catch (error) {
                                                                console.log(error)
                                                            }
                                                        }
                                                        try {
                                                            if (ResourcesGroup[k].resources[m].slot != undefined) {
                                                                ResourcesGroup[k].resources[m].slot = slot_count;
                                                                slot_count++
                                                            }
                                                        } catch (error) {
                                                            console.log(error);
                                                        }
                                                    }
                                                }
                                            }
                                            if(parseInt(delete384) == 1){
                                                deleteSubgroups(worker_384, ResourcesGroup)
                                            }
                                            if(parseInt(delete768) == 1){
                                                deleteSubgroups(worker_768, ResourcesGroup)
                                            }
                                            if(parseInt(delete1536) == 1){
                                                deleteSubgroups(worker_1536, ResourcesGroup)
                                            }
                                            var resources = '{"version":1,"slot_count":0,"groups":[]}';
                                            try {
                                                resources = JSON.parse(resources);
                                                try {
                                                    resources.groups = (ResourcesGroup);
                                                    resources.slot_count = (slot_count);
                                                    try {
                                                        fs.writeFileSync('Resources_modded.json', JSON.stringify(resources, null, 4),
                                                            {
                                                                encoding: 'utf8',
                                                                flag: 'w'
                                                            });
                                                        try {
                                                            console.timeEnd("Done function in ");
                                                            process.exit(0);
                                                        } catch (error) {
                                                            console.log(error);
                                                        }
                                                    } catch (error) {
                                                        console.log(error);
                                                    }
                                                } catch (error) {
                                                    console.log(error);
                                                }
                                            } catch (error) {
                                                console.log(error);
                                            }
                                        }
                                    }
                                    catch (error) {
                                        console.log(error);
                                    }
                                })
                            }
                        });
                    }
                }
                StartFunction();
            }
            Worker();
        }
        ToolPack();
    }
    Resources();
}
HarumaToolKit()
