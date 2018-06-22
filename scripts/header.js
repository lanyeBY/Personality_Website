window.onload = function(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var week = date.getDay();
    month = month + 1;
    month = (month < 10)?('0' + month):month;
    switch(week){
        case 0 : week = "Sun";break;
        case 1 : week = "Mon";break;
        case 2 : week = "Tue";break;
        case 3 : week = "Wed";break;
        case 4 : week = "Thu";break;
        case 5 : week = "Fri";break;
        case 6 : week = "Sat";break;
    }
    document.getElementById("year").innerHTML = year;
    document.getElementById("day").innerHTML = month + "/" + day;
    document.getElementById("week").innerHTML = week;
};