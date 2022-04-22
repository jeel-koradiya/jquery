var thisweekmonthday,month,datee,year;
// thisWeekMonthDay
var bool = 0;
var date = new Date();
var cmonth = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
var cdaymonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function clearcal() {
    $('h2').empty();
    $(".addtd").empty();
  }

function cal() {
    var datee = date.getDate();
    var month = date.getMonth()+1;
    var firstmonth = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();

    thisweekmonthday = cdaymonth[month-1];

    console.log("month:"+month+"  day:"+day+"  year:"+year+"  dateee:"+datee);

    $('h2').text(cmonth[month-1] + '-' + year).appendTo('h2');

    var datehighlight = 0;

    if (date.getMonth()+1 == month && date.getFullYear() == year) {
      datehighlight = datee;
    }

    if (month === 2) {
      if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
        thisweekmonthday = 29;
      }
    }

    var currentdatecolor = new Date();
    var firstDay = new Date(year, firstmonth, 1);
    var startprint = firstDay.getDay();
    var count=0,new_count=0;
    for(i=0;i<6;i++){
      $(".addtd").append(`<tr></tr>`);
      for(j=0;j<7;j++){
        count++;
       
        if(parseInt(thisweekmonthday) == new_count)
        {
          // break;
          $(".addtd").append(`<td></td>`);
        }
        else if(count>startprint)
        {
          new_count++;
          if(new_count==currentdatecolor.getDate() && date.getMonth() == currentdatecolor.getMonth() && date.getFullYear() == currentdatecolor.getFullYear())
          {
            $(".addtd").append(`<td class="today">${new_count}</td>`);
          }
          else if(bool == new_count){
            $(".addtd").append(`<td class="selectdatecolor">${new_count}</td>`);
          
          }
          else
          {
            $(".addtd").append(`<td>${new_count}</td>`);
          }
        }
        else{
          $(".addtd").append(`<td></td>`);
        }
       }
    }
}

function prev() {
    date.setMonth(date.getMonth() - 1); 
    clearcal();
    bool = 0;
    cal();
  }

function next() {
    date.setMonth(date.getMonth() + 1); 
    clearcal();
    bool = 0;
    cal(); 
}

function clicktoday(){
    date = new Date();
    clearcal();
    bool = 0;
    cal();
}

$(document).ready(function () {

      $('.prev').click(function() {
        prev();
      });

      $('.next').click(function() {
        next();
      });

      $('.clicktoday').click(function() {
        clicktoday();
      });
      
     
      for(y=1970;y<=2070;y++){
        $("#selectyear").append(`<option value="${y}">${y}</option>`);
      }

      for (let m = 0; m < 12; m++) {
        $("#selectmonth").append(`<option value="${m + 1}">${cmonth[m]}</option>`);
      }

      $("#selectyear, #selectmonth").change(function () {
    
        $("#selectdate").empty();
        $("#selectdate").append(`<option value="">Date</option>`);
        var totaldayinmonth = new Date($("#selectyear").val(),$("#selectmonth").val(),0).getDate();
        for (var i = 1; i <= totaldayinmonth; i++) {
          $("#selectdate").append(`<option value="${i}">${i}</option>`);
        }                     
      
      });

      $('.finddate').click(function() {

        var fyear = $("#selectyear").children("option:selected").val();
        var fmonth = $("#selectmonth").children("option:selected").val();
        var fdate = $("#selectdate").children("option:selected").val();

          var finddateandshow = new Date(fyear,fmonth-1);
          date = finddateandshow;
          bool = fdate;
          clearcal();
          cal();
      });
    cal();
});