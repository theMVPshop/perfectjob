let Parser = require('rss-parser');
let fs = require('fs-extra');

module.exports = async function getFeed() {
    let items = [];
    let parser = new Parser();

    let feed = await parser.parseURL('https://rss.indeed.com/rss?q=javascript&l=&from=searchOnHP&vjk=352c2bbcdeb4ef2f');
    
    const fileName = `${feed.title.replace(/\s+/g, "_").replace(/[/\\?%*|"<>]/g, '').toLowerCase()}.json`

    await Promise.all(feed.items.map(async (currentItem) => {
        if (items.filter((item) => item === currentItem).length <= 1) {
            items.push(currentItem);
        }
    }));

    fs.writeFileSync(fileName, JSON.stringify(items));

    // feed.items.forEach(item => {
    //     console.log(item.title + ':' + item.link)
    // });
};

getFeed();