const Parser = require('rss-parser');
const fs = require('fs-extra');

module.exports = async function getFeed() {
    let items = [];
    let parser = new Parser();

    let jobTitle = 'developer';
    let location = 'austin, tx';
    let positionType = 'fulltime';

    let feed = await parser.parseURL(`https://rss.indeed.com/rss/jobs?q=${jobTitle}&l=${location}&sc=0kf%3Ajt%28${positionType}%29%3B&radius=0&vjk=2dd88a57cffe14c8`);

    const fileName = 'jobData.json'

    await Promise.all(feed.items.map(async (currentItem) => {
        if (items.filter((item) => item === currentItem).length <= 1) {
            items.push(currentItem);
        }
    }));

    fs.writeFileSync(fileName, JSON.stringify(items));
}();