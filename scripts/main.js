window.onload = function(){
    var aLink = document.getElementsByTagName("a");
    for(var i = 1;i < aLink.length;i++){
        aLink[i].target = "main";
    }
};
