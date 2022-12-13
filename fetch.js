async function getFeed() {
    let parser = new RSSParser();

    //actual values need to be equal to front end user inputs
    let jobTitle = 'developer';
    let location = 'austin, tx';
    let positionType = 'fulltime';

    parser.parseURL(`https://rss.indeed.com/rss/jobs?q=${jobTitle}&l=${location}&sc=0kf%3Ajt%28${positionType}%29%3B&radius=0&vjk=2dd88a57cffe14c8`, function(err, feed) {
        if (err) throw err;
        console.log(feed.title);

        feed.items.forEach(function(entry) {
        
            let h1 = document.createElement('h1');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');

            let div = document.getElementById('jobData');
            let text = document.createTextNode(entry.title + '\n' + entry.link + '\n' + entry.contentSnippet);
            div.appendChild(text);
            document.body.appendChild(div)
            console.log(entry.title + ':' + entry.link);
        })
    })
};