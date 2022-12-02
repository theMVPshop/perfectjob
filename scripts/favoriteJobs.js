class Favorite {
    constructor(title, link, contentSnippet) {
        this.title = title;
        this. link = link;
        this.contentSnippet = contentSnippet;
    }
};

function createNewFavorite () {
    let title = document.getElementsByClassName("title");
    let link = document.getElementsByClassName("link");
    let contentSnippet = document.getElementsByClassName("contentSnippet");

    const favoriteJob = new Favorite(title, link, contentSnippet);
    console.log(favoriteJob.title);
    console.log(favoriteJob.link);
    console.log(favoriteJob.contentSnippet);
    
};