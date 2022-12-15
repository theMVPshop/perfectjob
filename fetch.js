async function getFeed() {
    let parser = new RSSParser({
        customFields: {
            item: ['georss:point', 'geo']
        }
    });

    //actual values need to be equal to front end user inputs
    let jobTitle = 'developer';
    let location = 'austin, tx';
    let positionType = 'fulltime';

    parser.parseURL(`https://www.indeed.com/rss`, function(err, feed) {
        if (err) throw err;
        console.log(feed, feed.title);

        feed.items.forEach(function(entry) {
        
            let h2 = document.createElement('h1');
            let h3 = document.createElement('h2');
            let p = document.createElement('p');

            let li = document.getElementById('jobData');
            let text = document.createTextNode(entry.title + '\n' + entry.link + '\n' + entry.contentSnippet);
            li.appendChild(text);
            document.body.appendChild(li)
            console.log(entry.title + ':' + entry.link);
        })
    })
};