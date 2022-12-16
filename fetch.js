async function getFeed(event, jobTitle, location, positionType) {
    preventDefault(event)
    let parser = new RSSParser();
    console.log('getFeed')

    //actual values need to be equal to front end user inputs
    // let jobTitle = document.getElementById('jobTitle');
    // let location = document.getElementById('location');
    // let positionType = document.getElementById('positionType');

    parser.parseURL(`https://rss.indeed.com/rss/jobs?q=${jobTitle}&l=${location}&sc=0kf%3Ajt%28${positionType}%29%3B&radius=0&vjk=2dd88a57cffe14c8`, function(err, feed) {
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