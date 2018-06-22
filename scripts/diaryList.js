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
window.onload = function(){
    readStorage();
    var todayDate = new Date();
    var todayYear = todayDate.getFullYear();
    var todayMonth = todayDate.getMonth() + 1;
    var todayDay = todayDate.getDate();
    var todayWeek = todayDate.getDay();
    todayMonth = (todayMonth < 10)?('0' + todayMonth):todayMonth;
    switch(todayWeek){
        case 0 : todayWeek = "Sun";break;
        case 1 : todayWeek = "Mon";break;
        case 2 : todayWeek = "Tue";break;
        case 3 : todayWeek = "Wed";break;
        case 4 : todayWeek = "Thu";break;
        case 5 : todayWeek = "Fri";break;
        case 6 : todayWeek = "Sat";break;
    }
    document.getElementById("todayYear").innerHTML = todayYear;
    document.getElementById("todayDay").innerHTML = todayMonth + "/" + todayDay;
    document.getElementById("todayWeek").innerHTML = todayWeek;
};