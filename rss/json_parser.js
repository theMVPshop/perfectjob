const fs = require('fs-extra');

fs.readFile('./jobData.json', (err, data) => {
    if (err)
      console.log(err);
    else {
      var json = JSON.parse(data);
        console.log(json.title)
    }
})