class Favorite {
    constructor(title, link, contentSnippet) {
        this.title = title;
        this. link = link;
        this.contentSnippet = contentSnippet;
    }
};

function createNewFavorite () {
    let text = document.getElementById("text").textContent;

    const favoriteJob = new Favorite(text, 'www.java.com', 'description');
    console.log(favoriteJob.title);
    console.log(favoriteJob.link);
    console.log(favoriteJob.contentSnippet);
    
};