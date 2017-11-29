fl.trace('-------RunAll.jsfl---------');

var folder = fl.browseForFolderURL("Choose a folder to publish:");
fl.trace(folder);
var files = FLfile.listFolder(folder + "/*.swf", "files");
fl.trace(files.length + '| files');

var commonFunctionsUri = "file:///C|/Users/atree/OneDrive/200WordsADay/jsflScripts/commonfunctions.jsfl";
var curFile;
var curFileSvg;

for (file in files) {
    try {
        curFile = folder + "/" + files[file];
        fl.trace(curFile);
        curFileSvg = curFile.replace(/\.[^/.]+$/, "") + ".svg";
        
        fl.runScript(commonFunctionsUri, "deleteLayer");
        fl.runScript(commonFunctionsUri, "importNextFile", curFile);
        // fl.runScript(commonFunctionsUri, "exportAsSvg", curFileSvg);
        fl.trace(curFileSvg);
    } catch (err) {
        fl.trace('-------Error---------');
        fl.trace(curFile);
        fl.trace(er);
        fl.trace('----------------');
    }
}    