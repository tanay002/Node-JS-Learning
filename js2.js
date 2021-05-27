const fs = require("fs");
        let fileContent= fs.readFileSync("myFile.txt","utf-8");
        console.log(fileContent);
         fileContent=fileContent.replace("tanay","vinay");
         console.log('The content of file is \"'+fileContent+"\"");

         console.log('Creating a new file....')
        fs.writeFileSync("newFile.txt",fileContent);
        