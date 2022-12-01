const Parser = require('rss-parser');
const fs = require('fs-extra');

//function creates the jobData.json file
module.exports = async function getFeed() {
    let items = [];
    let parser = new Parser();

    //actual values need to be equal to front end user inputs
    let jobTitle = 'developer';
    let location = 'austin, tx';
    let positionType = 'fulltime';

    // search url for rss feed
    let feed = await parser.parseURL(`https://rss.indeed.com/rss/jobs?q=${jobTitle}&l=${location}&sc=0kf%3Ajt%28${positionType}%29%3B&radius=0&vjk=2dd88a57cffe14c8`);

    const fileName = 'jobData.json'

    await Promise.all(feed.items.map(async (currentItem) => {
        if (items.filter((item) => item === currentItem).length <= 1) {
            items.push(currentItem);
        }
    }));

    fs.writeFileSync(fileName, JSON.stringify(items));


    //reads jobData.json file 
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
    });
}();