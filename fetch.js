
let jobTitle = '';
let jobLocation = '';
let positionType = '';

const titleText = document.getElementById('title-search');
const locationText = document.getElementById('location-search');

titleText.addEventListener('input', updateTitleValue);
locationText.addEventListener('input', updateLocationValue);


function updateTitleValue(e) {
  jobTitle = e.target.value;
  console.log(jobTitle)
}

function updateLocationValue(e) {
  jobLocation = e.target.value;
}

function updatePositionValue() {
  positionType = document.getElementById("position-type").value;
}

async function getFeed() {
  let parser = new RSSParser({
    customFields: {
      item:['georss:point', 'geo']
    }
  });

  parser.parseURL(`https://rss.indeed.com/rss/jobs?q=${jobTitle}&l=${jobLocation}&sc=0kf%3Ajt%28${positionType}%29%3B&radius=0&vjk=2dd88a57cffe14c8`, function(err, feed) {
      if (err) throw err;
      console.log(feed);
      console.log(positionType)

      feed.items.forEach(function(entry) {
        console.log(entry)
          let h2 = document.createElement('h1');
          let h3 = document.createElement('h2');
          let p = document.createElement('p');
          let btn = document.createElement('button')
          btn.innerHTML = "Find Job (This will open a popup!)"

          let li = document.getElementById('jobData');
          let text = document.createTextNode(entry.title + '\n' + entry.contentSnippet);
          li.appendChild(text);
          document.body.appendChild(li)
        //   console.log(entry.title + ':' + entry.link);
      })
  })
};
