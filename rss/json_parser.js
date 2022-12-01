const fs = require('fs-extra');

//reads jobData json file 
fs.readFile('./jobData.json', (err, data) => {
    if (err)
      console.log(err);
    else {
      var json = JSON.parse(data); //saves json object to variable
        // console.log(json)
    }

    //variables for title, link, and content snippet from json object
    for(const property in json) {
        let title = json[property].title;
        let link = json[property].link;
        let contentSnippet = json[property].contentSnippet;

        console.log(title);
        console.log(link);
        console.log(contentSnippet);
    }
})
