const express = require('express');
const app = express()
const apiRouter = express.Router();
const fs = require('fs');
const path = require('path');

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// -255 255 400"

app.get('/video/:videoID', function(req, res){
    const range = req.headers.range;
    console.log(req.params.videoID,  'here')
    if (!range){
        res.status(400).send("Requires Range Header")
    }
    const videoPath = req.params.videoID+'.mp4'
    const videoSize = fs.statSync(videoPath).size;

    //just setting each chunk to roughly 1 mb not sure why yet 
    const CHUNK_SIZE = 10 ** 6
    const start = Number(range.replace(/\D/g, ''));
    const end = Math.min(start + CHUNK_SIZE, videoSize -1)
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start} - ${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4"
    }
    res.writeHead(206, headers);

    const videoStream = fs.createReadStream(videoPath, { start, end});

    videoStream.pipe(res)
}
)

app.listen(8000, function () {
  console.log("Listening on port 8000!");
});
