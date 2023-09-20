import qr from "qr-image"
import fs from "fs"
import express from "express"
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// Process the form data
app.post('/process', (req, res) => {
  const url = req.body.url;

  // Process the data or perform any backend tasks
  // ...

  // console.log(url)
  var qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream('qr_img.png'));

  fs.writeFile("URL.txt", url, (err) => {
    if (err) throw err;
    // console.log("The file has been saved")
  })

  // Return a response back to the frontend
  res.json({
    status: 'success',
    message: 'Data received successfully!'
  });
});

// Start the server
const port = process.env.PORT;

if (port == null || port == '') {
  port = 3000
}
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// inquirer
// .prompt([
//   {
//     message: "Type in your URL:",
//     name: "URL"
//   }
// ])
// .then((answers) => {
//   const url = answers.URL
//   // console.log(url)
//   var qr_svg = qr.image(url);
//   qr_svg.pipe(fs.createWriteStream('qr_img.png'));

//   fs.writeFile("URL.txt", url, (err) => {
//     if (err) throw err;
//     // console.log("The file has been saved")
//   })
// })
// .catch((error) => {
//   if (error.isTtyError) {
//     // Prompt couldn't be rendered in the current environment
//   } else {
//     // Something else went wrong
//   }
// });