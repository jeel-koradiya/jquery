$(document).ready(function () {
    $(".panelstyle").eq(0).slideDown().not($(".panelstyle").eq(0)).slideUp();
    // $(".panelstyle").not($(".panelstyle").eq(0)).slideUp();
    $("button i").eq(0).css("transform", "rotate(90deg)");

    $(".flipstyle").click(function () {
      var index = $("button").index(this);
      // alert(index);

      $(".panelstyle").eq(index).slideToggle(function () {
          if ($(this).css("display") == "none") {
            $(this).prev().find("i").css("transform", "rotate(0deg)");
          }
        });
      $(".panelstyle").not($(".panelstyle").eq(index)).slideUp();
      $("button i").eq(index).css("transform", "rotate(90deg)");
      $("button i").not($("button i").eq(index)).css("transform", "rotate(0deg)");
    });
  });