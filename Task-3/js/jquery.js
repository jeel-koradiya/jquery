    $(document).ready(function () {
      var timer,h, m, s, c;

      // Hide-Show
      $(".running,.abc,.stoped").hide();
      $(".entertimeandhit").show();

      // ----- Start -------------------------------------------

      $(".start").click(function () {
        // Hide-Show
        $(".abc,.stoped,.entertimeandhit,.restart,.resume").hide();
        $(".start,.pause,.stop,.reset").show();

        //Button Disabled
        $(".start").attr("disabled", true);

        $(".xyz").html(
          "<h4>" + "Running" + "</h4>"
        );

        var h = 0,m = 0,s = 0,c = 0;
        TimeClockSet(h, m, s, c);
        timestart(h, m, s, c);

      });

      // ----- Resume -------------------------------------------

      $(".resume").click(function () {

        // Hide-Show
        $(".abc").show();
        $(".stoped,.entertimeandhit").hide();
        $(".start,.pause,.stop,.reset").show();
        $(".restart,.resume").hide();

        //Button Disabled
        $(".pause").attr("disabled", false);

        $(".xyz").html(
          "<h4>" + "Running" + "</h4>"
        );

        h = $(".hour").text();
        m = $(".minute").text();
        s = $(".second").text();
        c = $(".csecond").text();

        timestart(h, m, s, c);
      });

      // ----- Restart -------------------------------------------

      $(".restart").click(function () {

        // Hide-Show
        $(".abc,.stoped,.entertimeandhit").hide();
        $(".start,.pause,.stop,.reset,.xyz,.abcpause").show();
        $(".resume,.restart").hide();

        $(".xyz").html(
          "<h4>" + "Running" + "</h4>"
        );

        //Button Disabled
        $(".stop,.pause").attr("disabled", false);
        $(".start").attr("disabled", true);

        var h = 0,m = 0,s = 0,c = 0;
        TimeClockSet(h, m, s, c)
        timestart(h, m, s, c);
      });

      // ----- Pause -------------------------------------------

      $(".pause").click(function () {

        // Hide-Show
        $(".running,.entertimeandhit,.stoped").hide();
        $(".abc").show();
        $(".resume,.pause,.stop,.reset").show();
        $(".restart,.start").hide();

        //Button Disabled
        $(".pause").attr("disabled", true);

        $(".xyz").css("background-color", "lightblue")

        h = $(".hour").text();
        m = $(".minute").text();
        s = $(".second").text();


        $(".xyz").html(
          "<h4>" + "Pause: " + "<b>" + "hour:" + h + "min:" + m + "sec:" + s + "</b>" + "</h4>"
        );

        $(".abcpause").css("color", "blue").append(
          "<h6 class='hide' style='color:blue'>" + "Pause: " + "<b>" + "hour:" + h + "min:" + m + "sec:" + s + "</b>" + "<h6>"
        );

        clearInterval(timer);
      });

      // ----- Stop -------------------------------------------

      $(".stop").click(function () {

        // Hide-Show
        $(".running,.entertimeandhit").hide();
        $(".abc").show();
        $(".restart,.pause,.stop,.reset").show();
        $(".resume,.start").hide();

        //Button Disabled
        $(".stop,.pause").attr("disabled", true);

        $(".xyz").css("background-color", "rgb(241, 194, 194)")

        h = $(".hour").text();
        m = $(".minute").text();
        s = $(".second").text();

        $(".xyz").html(
          "<h4>" + "Stop: " + "<b>" + "hour:" + h + "min:" + m + "sec:" + s + "</b>" + "<h4>"
        );

        $(".abcpause").css("color", "red").append(
          "<h6 class='hide' style='color:red'>" + "Stop: " + "<b>" + "hour:" + h + "min:" + m + "sec:" + s + "</b>" + "<h6>"
        );

        clearInterval(timer);
      });

       // ----- Reset -------------------------------------------

      $(".reset").click(function () {
        // Hide-Show
        $(".running,.abc,.stoped").hide();
        $(".entertimeandhit").show();
        $(".start,.pause,.stop,.reset").show();
        $(".resume,.restart").hide();

        //Button Disabled
        $(".start,.stop,.pause").attr("disabled", false);

        var h = 0,
          m = 0,
          s = 0,
          c = 0;

        clearInterval(timer);

        TimeClockSet(h, m, s, c)

        $(".xyz").empty();
        $(".hide").text("").hide();
        $("h6").hide();

      });

      function TimeClockSet(h, m, s, c) {

        $(".hour").text((parseInt(h) < 10) ? ("0" + parseInt(h)) : h);
        $(".minute").text((parseInt(m) < 10) ? ("0" + parseInt(m)) : m);
        $(".second").text((parseInt(s) < 10) ? ("0" + parseInt(s)) : s);
        $(".csecond").text((parseInt(c) < 10) ? ("0" + parseInt(c)) : c);

      }


      function timestart(h, m, s, c) {
        var h, m, s, c;
        timer = setInterval(function () {
          if (c == 0 || c >= 0) {
            c++;
            if (c == 100) {
              c = 0;
              s++;
              if (s == 60) {
                s = 0;
                s++;
                m++;
                if (m == 60) {
                  m = 0;
                  m++;
                  h++;
                }
              }
            }
          }

          TimeClockSet(h, m, s, c);
        }, 1);
      }

    });
