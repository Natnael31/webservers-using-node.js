const http = require("http");
const url = require("url");
const fs = require("fs");
const mimetype = require("mime-types");
const rand = require("./randomNumber");

const lookup = mimetype.lookup;


const serve = http.createServer( (req, res) => {
    console.log(req);

    const randomGenerator = rand.random();
    const about = url.parse(req.url, true);
    const filepath = about.path;
    var reqfile = __dirname + "/static/apple-responsive-replica-html-css-mar-2020/" + filepath;

    if (filepath == "/") {
        res.writeHead(200);
        res.end("Request recieved and processed\nRandom number b/n 1 & 100 is: " + randomGenerator);
    }
    else {

            let mime = lookup(filepath);

        const read = fs.readFile(reqfile, (err, content) => {
            if (err) {
                res.writeHead(404);
                res.end("page can not be found");
            }
            else {
                res.writeHead(200, {"content-type": mime});
                res.end(content);
            }
        });
    }

});

serve.listen(1234);