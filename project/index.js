// import superheroes from 'superheroes'

// superheroes.all;
// console.log(superheroes.random());

import inquirer from 'inquirer'
import qr from 'qr-image'
import fs from 'fs'
inquirer
  .prompt([
    {message:"Type in your url",
    name:"URL",
},
  ])
  .then((answers) => {
    const ans=answers.URL
    var qr_svg = qr.image(ans);
qr_svg.pipe(fs.createWriteStream('qr_img.png'));
 
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });