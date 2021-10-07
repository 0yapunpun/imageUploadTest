const express = require("express");
const app = express();

const multer = require("multer");
const storage = multer.diskStorage({
    destination: (res, file, cb) =>{
        cb(null, "images")
    },
    filename: function (req, file, cb) {
        var name = "justString.jpg"
        cb(null, name);
    }
});

const upload = multer({storage: storage})

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("upload");
});

app.post("/upload", upload.single("image"), (req, res) => {
    res.send("image Uploaded");
})


app.listen(3000);
console.log("Listening in port 3000")
