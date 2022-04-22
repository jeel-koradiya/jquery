// var cdate = new Date();
// https://stackoverflow.com/questions/43316726/build-a-calendar-using-javascript-jquery
var date = new Date();
var cmonth = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
var cdaymonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// console.log(cdate);
// console.log(date);


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

    var thisweekmonthday = cdaymonth[month-1];
    // console.log(thisweekmonthday);

    // console.log(thisweekmonthday);

    console.log("month:"+month+"  day:"+day+"  year:"+year+"  dateee:"+datee);

    $('h2').text(cmonth[month-1] + '-' + year).appendTo('h2');

    var datehighlight = 0;

    if (date.getMonth()+1 == month && date.getFullYear() == year) {
      datehighlight = datee;
    }

    if (month === 2) {
      if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
        thisweekmonthday = 29;
        console.log(thisweekmonthday);
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
          break;
        }
        else if(count>startprint)
        {
          new_count++;
          if(new_count==currentdatecolor.getDate() && date.getMonth() == currentdatecolor.getMonth())
          {
            $(".addtd").append(`<td class="today">${new_count}</td>`);
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
    cal();
  }

function next(mm) {
    date.setMonth(date.getMonth() + 1); 
    clearcal();
    cal();
  }





$(document).ready(function () {

      $('.prev').click(function() {
        prev();
      });

      $('.next').click(function() {
        next();
      });
         
      cal();
});