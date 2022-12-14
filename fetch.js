async function getFeed() {
    let parser = new RSSParser();

    //actual values need to be equal to front end user inputs
    let jobTitle = 'developer';
    let location = 'austin, tx';
    let positionType = 'fulltime';


//     const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

// parser.parseURL(CORS_PROXY + 'https://www.reddit.com/.rss', function(err, feed) {
//   if (err) throw err;
//   console.log(feed.title);
//   feed.items.forEach(function(entry) {
//     console.log(entry.title + ':' + entry.link);
//   })
// })

    parser.parseURL(`https://www.reddit.com/.rss`, function(err, feed) {
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