$(document).ready(function () {
    var timer;

    // text-fild
    $(".running").hide();
    $(".abc").hide();
    $(".stoped").hide();
    $(".entertimeandhit").show();

    $(".start").click(function () {
      // text-fild
      $(".running").show();
      $(".abc").hide();
      $(".stoped").hide();
      $(".entertimeandhit").hide();

      //disabled
      $(".start").attr("disabled", true);

      // for button
      $(".start").show();
      $(".pause").show();
      $(".stop").show();
      $(".reset").show();
      $(".restart").hide();
      $(".resume").hide();

      var inputValue = $(".getvalue").val();
      var h,
        m,
        s,
        c = 0;
      h = Math.floor(inputValue / 3600);
      m = Math.floor((inputValue - h * 3600) / 60);
      s = Math.floor(inputValue - h * 3600 - m * 60);
      c = 0;

      $(".hour").text(h);
      $(".minute").text(m);
      $(".second").text(s);
      $(".csecond").text(c);

      timestart(h, m, s, c);

      console.log(inputValue, h, m, s, c);
    });

    $(".resume").click(function () {
      // text-fild
      $(".running").show();
      $(".abc").hide();
      $(".stoped").hide();
      $(".entertimeandhit").hide();

      // for button

      $(".start").show();
      $(".pause").show();
      $(".stop").show();
      $(".reset").show();
      $(".restart").hide();
      $(".resume").hide();

      h = $(".hour").text();
      m = $(".minute").text();
      s = $(".second").text();
      c = $(".csecond").text();

      timestart(h, m, s, c);
    });

    $(".restart").click(function () {
      // text-fild
      $(".running").show();
      $(".abc").hide();
      $(".stoped").hide();
      $(".entertimeandhit").hide();

      // for button
      $(".start").show();
      $(".pause").show();
      $(".stop").show();
      $(".reset").show();
      $(".resume").hide();
      $(".restart").hide();

      var inputValue = $(".getvalue").val();
      var h,
        m,
        s,
        c = 0;
      h = Math.floor(inputValue / 3600);
      m = Math.floor((inputValue - h * 3600) / 60);
      s = Math.floor(inputValue - h * 3600 - m * 60);
      c = 0;

      $(".hour").text(h);
      $(".minute").text(m);
      $(".second").text(s);
      $(".csecond").text(c);

      timestart(h, m, s, c);
    });

    $(".pause").click(function () {
      // text-fild
      $(".running").hide();
      $(".abc").show();
      $(".stoped").hide();
      $(".entertimeandhit").hide();

      // for button

      $(".resume").show();
      $(".pause").show();
      $(".stop").show();
      $(".reset").show();
      $(".restart").hide();
      $(".start").hide();

      h = $(".hour").text();
      m = $(".minute").text();
      s = $(".second").text();
      console.log(h, m, s);

      $(".abc").html(
        "<b>" + "hour:" + h + "min:" + m + "sec:" + s + "</b>"
      );
      clearInterval(timer);
    });

    $(".stop").click(function () {
      // text-fild
      $(".running").hide();
      $(".abc").hide();
      $(".stoped").show();
      $(".entertimeandhit").hide();

      // for button

      $(".restart").show();
      $(".pause").show();
      $(".stop").show();
      $(".reset").show();
      $(".resume").hide();
      $(".start").hide();

      clearInterval(timer);
    });

    $(".reset").click(function () {
      // text-fild
      $(".running").hide();
      $(".abc").hide();
      $(".stoped").hide();
      $(".entertimeandhit").show();

      $(".start").attr("disabled", false);

      // for button

      $(".start").show();
      $(".pause").show();
      $(".stop").show();
      $(".reset").show();
      $(".resume").hide();
      $(".restart").hide();

      var h = 0,
        m = 0,
        s = 0,
        c = 0;
      clearInterval(timer);
      $(".hour").text(h);
      $(".minute").text(m);
      $(".second").text(s);
      $(".csecond").text(c);
      $(".getvalue").val("");
    });

    function timestart(h, m, s, c) {
      timer = setInterval(function () {
        if (c > 0) {
          c--;
        } else {
          c = 99;
          if (s > 0) {
            s--;
          } else {
            s = 59;
            if (m > 0) {
              m--;
            } else {
              m = 59;
              if (h > 0) {
                h--;
              } else {
                (h = 0), (m = 0), (s = 0), (c = 0);
                $(".running").hide();
                $(".start").attr("disabled", false);
                $(".entertimeandhit").show();
              }
            }
          }
        }
        if (h == 0 && m == 0 && s == 0 && c == 0) {
          clearInterval(timer);
          // $(".running").hide();
        }

        $(".hour").text(h);
        $(".minute").text(m);
        $(".second").text(s);
        $(".csecond").text(c);
      }, 10);
    }
  });