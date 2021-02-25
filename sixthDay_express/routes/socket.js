
var app = require('http').createServer(handler),fs = require('fs');
const io = require('socket.io')(app);

app.listen(3000);

function handler(req, res){
    fs.readFile('C:/Users/cucun/Desktop/project/Cafeterian/Server/nodejs_test/sixthDay_express\/view/index.html', function(err, data){
        if(err){
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200);
        res.end(data);
    });
}

io.on('connection', function (socket){
    socket.emit('news', { serverData : "서버 작동"});

    socket.on('client login', function (data){
        console.log(data);
    });

    socket.on('disconnect', function(){
        console.log('접속이 종료되었습니다.');
    });
});