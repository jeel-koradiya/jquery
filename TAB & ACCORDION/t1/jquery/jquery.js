$(document).ready(function () {
    $(".box").not($(".box").eq(0)).hide();

    $("button").click(function () {
      var index = $("button").index(this);

      $(".box").eq(index).show();
      $(".box").not($(".box").eq(index)).hide();
    });
  });