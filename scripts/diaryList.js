function showMore(number){
    var article = document.getElementsByTagName("article");
    var articlep = document.getElementsByTagName("p");
    var showMore = getByClass(document,"showMore");
    if(article[number].style.height == "200px"){
        article[number].style.height = "auto";
        articlep[number].style.overflow = "visible";
        showMore[number].innerHTML = "Hide";
    }else{
        article[number].style.height = "200px";
        articlep[number].style.overflow = "hidden";
        showMore[number].innerHTML = "Show More";
    }
}
