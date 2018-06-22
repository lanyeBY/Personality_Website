//getElementsByTagName函数的浏览器兼容问题解决
function getByClass(node,myclass){
    if(document.getElementsByClassName){
        return node.getElementsByClassName(myclass);
    }else{
        var tags = node.getElementsByTagName("*");
        var results;
        for(var i = 0;i < tags ;i++){
            if(tags[i].ClassName == myclass ){
                results.push.apply(tags[i]);
            }
        }
        return results;
    }
}
function readStorage(){
    if(window.localStorage.getItem("skinCss")){
        document.getElementById("skinCss").href = window.localStorage.getItem("skinCss");
    }
    if(window.localStorage.getItem("motto")){
        document.getElementById("name").getElementsByTagName("p")[0].innerHTML = window.localStorage.getItem("motto");
    }
}