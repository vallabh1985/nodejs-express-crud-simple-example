const http = require('http');
const url = require('url');


http.createServer((req,res)=>{

    let path=url.parse(req.url).pathname;
    router(path,req,res)

}).listen(3002);


router = (path,req,res) => {
    console.log(req.method);// type of method
    switch(path){
        case "/":
            let output="<b>Helooo World</b>";
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(output);
            break;
        case "/add":
            console.log(req.params);
            res.write("Add data");
            break;
        case "/add/abc":
            console.log(req.params);
            res.write("Add abc data");
            break;
        default:
            res.write("ok");
    }
    res.end();
}