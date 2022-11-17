let Parser = require('rss-parser');

(async function getFeed() {
    
    let parser = new Parser();

    let feed = await parser.parseURL('https://rss.indeed.com/rss?q=javascript&l=&from=searchOnHP&vjk=352c2bbcdeb4ef2f');
    console.log(feed.title);

    feed.items.forEach(item => {
        console.log(item.title + ':' + item.link)
    });
})();
