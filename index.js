// importing inquirer module
import inquirer from "inquirer";

// importing qr-image module
import png from "qr-image";

// importing file system module
import fs from "node:fs";

inquirer.prompt([
    {
        "message": "Enter your URL : ",
        "name": "URL"
    }
])
.then((answer) => {
    const url = answer.URL;
    const qr_png = png.image(url);

    // createWriteStream() method is used to write big amount data in a single file 
    qr_png.pipe(fs.createWriteStream("qr_png.png"));

    fs.writeFile("qr_url.txt", url, ((error) => {
        if (error) throw error;

        console.log("Your file successfully created!");
    }))

})
.catch((error) => {

    if (error.TtyError) { console.log(error); }

    else { console.log(error); }
})

