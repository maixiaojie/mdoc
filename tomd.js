const TurnDown = require('turndown')
const fs = require('fs')

var mdFilePath = './ds/article/'
var JsonfilePath = './json/ds.json'
var trims = function(str) {
    str = str.replace(/\s/g, "");
    str = str.replace(/\||\*|/g, "");
    console.log(str)
    return str;
};
var handleOne = function(item) {
    var turndown = new TurnDown()
    var markdown = turndown.turndown(item.article_content)
    
    if (!fs.existsSync(mdFilePath)) {
        fs.mkdirSync(mdFilePath);
    }
    var filename = (item.id) + '.md'
    fs.writeFile(mdFilePath + '/' + filename, markdown, 'utf-8', function(err) {
        if (err !== null) {
            console.log(err);
        }
        console.log(filename + ' success...');
    });
}
var data = fs.readFileSync(JsonfilePath, 'utf-8');
var jsonData = JSON.parse(data)
jsonData.sort((a, b) => a.id - b.id)

function createFile() {
    for (var i = 0; i < jsonData.length; i++) {
        (function(i) {
            handleOne(jsonData[i])
        })(i)
    }
}

function createSideBar() {
    var sidebar = [];
    for (var i = 0; i < jsonData.length; i++) {
        (function(i) {
            sidebar.push(['./article/' + jsonData[i].id, jsonData[i].article_title])
        })(i)
    }
    console.log(sidebar);
}
createSideBar()