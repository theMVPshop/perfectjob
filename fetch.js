
let jobTitle = '';

const titleText = document.getElementById('title-search');

titleText.addEventListener('input', updateTitleValue);

function updateTitleValue(e) {
  jobTitle = e.target.value;
  console.log(jobTitle)
}

const locationText = document.getElementById('location-search');

locationText.addEventListener('input', updateLocationValue);

function updateLocationValue(e) {
  let text = e.target.value;
  console.log(text)
}



// const log = document.getElementById('title-search');

// input.addEventListener('input', updateValue);

// function updateValue(e) {
//   let text = e.target.value;
// }

// const title = document.getElementById('title-search');
// title.addEventListener("keyup", function() {


//     console.log(title-search);
// });

// let jobTitle = 'developer';
// let location = 'austin, tx';
// let positionType = 'fulltime';

const button = document.getElementById('search');
button.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("clicked")


    let parser = new RSSParser();
    //actual values need to be equal to front end user inputs
    
    parser.parseURL(`https://rss.indeed.com/rss/jobs?q=${jobTitle}`, function(err, feed) {

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
});
// &l=${location}&sc=0kf%3Ajt%28${positionType}%29%3B&radius=0&vjk=2dd88a57cffe14c8`
