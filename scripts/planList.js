//添加子元素函数
function newElement(parentNode,elementName,obj){
    var newEle = document.createElement(elementName);
    for(var key in obj){
        newEle[key] = obj[key];
    }
    parentNode.appendChild(newEle);
}
window.onload = function(){
    readStorage();
    var week = document.getElementById("week");
    var calendar = document.getElementById("calendar");
    //创建月历中星期的容器
    var weekend = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    for (var i = 0;i < weekend.length;i++){
        newElement(week,"div",{
            innerHTML : weekend[i]
        });
    }
    //创建月历中日期的容器
    for (var i = 0;i < 35;i++){
        newElement(calendar,"div",{
            className : "date",
            innerHTML : "<div class='day'></div><div class='note'></div>"
        });
    }
    
    //展示月历
    function showCalendar(year,month,calendarday){
        for(i = 0;i < calendarday.length;i++){
            calendarday[i].innerHTML = "";
            calendarday[i].classList.remove("calendarDay");
        }
        var firstDay = new Date(year , month - 1 , "1");
        var day = firstDay.getDay();
        var showYear = document.getElementById("year");
        var showMonth = document.getElementById("month");
        showYear.innerHTML = year;
        showMonth.innerHTML = month;
        var monthDays = 31;
        if(month == 2){
            //是否是闰年
            if(year%4 == 0){
                monthDays = 29;
            }else{
                monthDays = 28;
            }
        }else if(month == 4 || month == 6 || month == 9 || month == 11){
            monthDays = 30;
        }
        for (i = day;i < monthDays + day;i++){
            //如果顺序填充超过行数则从头开始填充
            if(i == 35){
                for(var j = 0;j < monthDays + day - 35 ;j++){
                    calendarday[j].classList.add("calendarDay");
                    calendarday[j].innerHTML = i - day + 1;
                    i++;
                }
                break;
            }else{
                calendarday[i].classList.add("calendarDay");
                calendarday[i].innerHTML = i - day + 1;
            }
        }
    }

    //高亮今天的日期
    function showToday(showYear,showMonth,calendarday){
        var calendarDay = getByClass(document,"calendarDay");
        var today = new Date();
        var thisYear = today.getFullYear();
        var thisMonth = today.getMonth() + 1;
        var thisDate = today.getDate() - 1;
        var firstDay = new Date(thisYear,thisMonth - 1,"1");
        var thisDay = firstDay.getDay() + thisDate;
        if(thisYear == showYear && thisMonth == showMonth){
            calendarDay[thisDate].classList.add("thisDay");
        }else{
            calendarday[thisDay].classList.remove("thisDay");
        }
    }

    function changeCalendar(year,month,calendarday){
        var showYear = document.getElementById("year");
        var showMonth = document.getElementById("month");
        showYear.innerHTML = year;
        showMonth.innerHTML = month;
        var thisYear = year;
        var thisMonth = month;
        showCalendar(thisYear,thisMonth,calendarday);
        showToday(year,month,calendarday);
        plan("2018","6","17","父亲节",calendarday);
        plan("2018","5","12","植树节",calendarday);
    }

    var calendarday = getByClass(calendar,"date");
    var lastMonth = document.getElementById("lastMonth");
    var nextMonth = document.getElementById("nextMonth");
    var showYear = document.getElementById("year").innerHTML;
    var showMonth = document.getElementById("month").innerHTML;
    var today = new Date();
    var thisYear = today.getFullYear();
    var thisMonth = today.getMonth() + 1;
    showCalendar(thisYear,thisMonth,calendarday);
    showToday(showYear,showMonth,calendarday);
    //查看上一个月的月历
    lastMonth.onclick = function(){
        if(showMonth == 1){
            showMonth = 12;
            showYear -= 1;
        }else{
            showMonth -=1;
        }
        changeCalendar(showYear,showMonth,calendarday);
    }
    nextMonth.onclick = function(){
        if(showMonth == 12){
            showMonth = 1;
            //强制转换为数值进行计算
            showYear = Number(showYear) + 1;
        }else{
            showMonth = Number(showMonth) + 1;
        }
        changeCalendar(showYear,showMonth,calendarday);
    }

    //加入新计划
    function plan(planYear,planMonth,planDay,planMes,calendarday){
        var showYear = document.getElementById("year").innerHTML;
        var showMonth = document.getElementById("month").innerHTML;    
        if(showYear == planYear && showMonth == planMonth){
            var planFirstDay = new Date(planYear,planMonth-1,"1");
            var planday = planFirstDay.getDay();
            var planCalenderDay = Number(planDay) + planday - 1;
            newElement(calendarday[planCalenderDay],"div",{
                className : "iconfont newPlan",
                innerHTML : "&#xe6a2;"
            });
            newElement(calendarday[planCalenderDay],"div",{
                className : "planMassage",
                innerHTML : planMes
            });
            getByClass(calendarday[planCalenderDay],"newPlan")[0].onclick = function(){
                var planMassage =  getByClass(calendarday[planCalenderDay],"planMassage")[0];
                planMassage.style.display = "block";
                planMassage.onclick = function(){
                    planMassage.style.display = "none";
                }
            };
        }
    }
    plan("2018","6","17","父亲节",calendarday);
};