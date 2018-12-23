var fs = require('fs');
var colors = require('colors');

fs.readdir('../13.7', 'utf-8', function(err, files) {
    console.log('Zawartość katalogu:'.blue);
    console.log(files);
    fs.writeFile('./text.txt', 'Zawartość katalogu 13.7: ' + files, function(err) {
        if (err) throw err;
        console.log('Zapisano w pliku text.txt'.blue);
        fs.readFile('./text.txt', 'utf-8', function(err, data) {
            console.log('Dane pliku po zapisie:'.blue)
            console.log(data);
        });
    });
});