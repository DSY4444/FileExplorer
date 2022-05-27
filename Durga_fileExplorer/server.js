const express = require("express");
const { json } = require("express/lib/response");
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('web'));
var PORT = process.env.port || 3001
app.use(bodyParser.urlencoded({ extended: true }))

var fs = require("fs");
var str = "";

app.put('/', function (req, res) {
        fs.readdir(req.body.url, function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);    
            }
                str = "{";
                files.forEach(function (file) {
                    str = str + "\"" + file + "\":\"" + filecheck(file) + "\",";
                });
                str = str.substring(0, str.length - 1);
                str = str + "}";
                //console.log(JSON.parse(str).length);
                //console.log(str);
                res.writeHeader(200, { "Content-Type": "text/plain" });
                res.end(str);
            
               
        });
    });



app.listen(PORT, function (error) {
    if (error) throw error
    console.log("Server running successfully on PORT : ", PORT);
})

function filecheck(file) {
         if (file.includes(".css")) {
            return "css_icon.png";
         }
         if (file.includes(".txt")) {
            return "text_icon.png";
        }
        if (file.includes(".svg")) {
            return "svg_icon.png";
        }
         if (file.includes(".csv")) {
            return "csv_icon.png";
        }
        if (file.includes(".pdf")) {
            return "pdf_icon.png";
        }
        if (file.includes(".jpg")) {
            return "image_icon.png";
        }
        if (file.includes(".jpeg")) {
            return "image_icon.png";
        }
        if (file.includes(".png")) {
            return "image_icon.png";
        }
        if (file.includes(".js")) {
            return "js_icon.png";
        }
        if (file.includes(".html")) {
            return "html_icon.png";
        }
        if (file.includes(".xlsx")) {
            return "csv_icon.png";
        }
        if (file.includes(".rar")) {
            return "rar_icon.png";
        }
        if (file.includes(".zip")) {
            return "zip_icon.png";
        }

        
        return "folder_icon.png";
}

