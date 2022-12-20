async function getFeed(event, jobTitle, location, positionType) {
    preventDefault(event)
    let parser = new RSSParser();
    console.log('getFeed')

async function getFeed() {
    let parser = new RSSParser({
        customFields: {
            item: ['georss:point', 'geo']
        }
    });
    // custom field pulls georss data
    
    //actual values need to be equal to front end user inputs
    // let jobTitle = document.getElementById('jobTitle');
    // let location = document.getElementById('location');
    // let positionType = document.getElementById('positionType');

    parser.parseURL(`https://www.indeed.com/rss`, function(err, feed) {
        if (err) throw err;
        console.log(feed.title);

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