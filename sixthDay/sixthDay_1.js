var fs = require('fs');

fs.readFile('./sixthDay/hello.txt', encoding = 'utf-8', function(err, data){
    if(err){
        throw err;
    }

    console.log(data + " Node.js!");
});