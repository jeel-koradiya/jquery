// script task 4 New

$(document).ready(function () {  
  var bool = false;
  var index, indexbutton,x, length,no,ffname,llname,ggender,eemail,ccontact,ddob,ssports,aaboutyourself,tterms;

  $(".content").hide().first().show();
  $("button.previous, button.submit,.update,.cancel").hide();

    //click on edit butten show hide
    function buttonset() {
        if (bool == true) {
          if (length == x + 1) {
            $("button.update, button.cancel").show();
            $("button.next,button.submit").hide();
          } else {
            $("button.update, button.cancel").hide();
            $("button.next").show();
          }
        }
      }
    
    //form data get
    function formdateget(){
        no = $("tr").length;
        ffname = $("#fname").val();
        llname = $("#lname").val();
        ggender = $("input[type='radio']:checked").val();
        eemail = $("#email").val();
        ccontact = $("#contact").val();
        ddob = $("#dob").val();
        ssports = $("select").children("option:selected").val();
        aaboutyourself = $("#aboutyourself").val();
        tterms = $("input[type='checkbox']:checked").val();  

      
    }

  //   -----------button nav------------
  $(".button_nav").click(function () {
    indexbutton = $(this).index();
    $(".content").hide().eq($(this).index()).show();

    //x == index of this button
    x = $(this).index();
    length = $(".content").length;
    
    if (x == 0) {
      $(".previous,.submit,.update").hide();
      $("button.next").show();
    } else if (length == x + 1) {
      $("button.next,.update").hide();
      $("button.submit, button.previous").show();
    } else {
      $("button.submit").hide();
      $("button.next, button.previous").show();
    }

    //function for button set click edit buuton click event
    buttonset();
  });

//   -----------next button------------
  $(".next").click(function () {
    length = $(".content").length;
    $(".content").hide();
    if (x == null) {
      x = 0;
    }
    x++;
    if (x == length - 1) {
      $("button.next").hide();
      $("button.submit").show();
    }

    $("button.previous").show();
    $(".content").eq(x).show();
    $(".content").not($(".content").eq(x)).hide();

    //function for button set click edit buuton click event
    buttonset();
  });

  //   -----------previous button------------
  $(".previous").click(function () {
    $(".content").hide();
    x--;
    if (x == 0) {
      $("button.previous").hide();
    }
    $(".content").eq(x).show();
    $(".content").not($(".content").eq(x)).hide();
    $("button.next").show();
    $(".submit,.update").hide();
    
    //function for button set click edit buuton click event
    buttonset();
  });

  //   -----------submit button------------

  $(".submit").click(function () {
    //data get from form
    formdateget();

    if ($("#terms").is(":checked")) {
      var tterms = "Accept";
      } else {
      var tterms = "Not Accept";
      }

    $(".row").append(`<tr class="removerow"><td class="no"> ${no} </td>,
        <td class="efname"> ${ffname} </td>,
        <td class="elname"> ${llname} </td>,
        <td class="egender"> ${ggender} </td>,
        <td class="eeemail"> ${eemail} </td>,
        <td class="econtact"> ${ccontact} </td>,
        <td class="edob"> ${ddob} </td>,
        <td class="esports">${ssports}</td>,
        <td class="eaboutyourself"> ${aaboutyourself} </td>,
        <td class="eterms"> ${tterms} </td>,
        <td> <button class="edit">Edit</button> </td>,
        <td> <button class="deleterow">Delete</button> </td></tr>`);
    //clear text box
    $('.formreset')[0]. reset();
  });

  //   -----------edit button------------
  $(document).on("click", ".edit", function () {
    bool = true;
    length = $(".content").length;

    var eindex = $(".edit").index(this);
    var index = $(".no").eq(eindex).text();
    var efname = $(".efname").eq(eindex).text();
    var elname = $(".elname").eq(eindex).text();
    var egender = $(".egender").eq(eindex).text();
    var eeemail = $(".eeemail").eq(eindex).text();
    var econtact = $(".econtact").eq(eindex).text();
    var edob = $(".edob").eq(eindex).text();
    var esports = $(".esports").eq(eindex).text();
    var eaboutyourself = $(".eaboutyourself").eq(eindex).text();
    var eterms = $(".eterms").eq(eindex).text();

    $(".index").val(index);

    $("input.setedittextfname").val(efname);
    $("input.setedittextlname").val(elname);
    egender == " male " ? $("#male").prop("checked", true) : $("#female").prop("checked", true);
    $("input.setedittextemail").val(eeemail);
    $("input.setedittextcontact").val(econtact);
    $("input.setedittextdob").val(edob);

    if (esports == "cricket") {
      $("option[value=cricket]").prop("selected", true);
    } else if (esports == "football") {
      $("option[value=football]").prop("selected", true);
    } else {
      $("option[value=chess]").prop("selected", true);
    }
    $("#aboutyourself").val(eaboutyourself);
    if (eterms == " Accept ") {
      $("#terms").prop("checked", true);
    } else {
      $("#terms").prop("checked", false);
    }

    //function for button set click edit buuton click event
    buttonset();
  });

  //   -----------update button------------
    $(".update").click(function () {
    $(".update,.cancel").hide();
    $(".submit").show();
    bool = false;
    
    //function for button set click edit buuton click event
    buttonset();
    //form data get
    formdateget();

       if ($("#terms").is(":checked")) {
      var tterms = "Accept";
      } else {
      var tterms = "Not Accept";
      }

    index = parseInt($(".index").val());
    let html = `<td class="no"> ${index} </td>,
         <td class="efname"> ${ffname} </td>,
         <td class="elname"> ${llname} </td>,
         <td class="egender"> ${ggender} </td>,
         <td class="eeemail"> ${eemail} </td>,
         <td class="econtact"> ${ccontact} </td>,
         <td class="edob"> ${ddob} </td>,
         <td class="esports"> ${ssports} </td>,
         <td class="eaboutyourself"> ${aaboutyourself} </td>,
         <td class="eterms"> ${tterms} </td>,
         <td> <button class="edit">Edit</button> </td>,
         <td> <button class="deleterow">Delete</button> </td>`;

    $(".removerow")
      .eq(parseInt(index - 1))
      .html(html);

    //clear text box
    $('.formreset')[0]. reset();
  });

  //   -----------cancel button------------

  $(document).on("click", ".cancel", function () {
    bool = false;
    //function for button set click edit buuton click event
    buttonset();
    //clear text box
    $('.formreset')[0]. reset();
    $(".update,.cancel").hide();
    $(".submit").show();
  });

  //   -----------delete button------------
  $(document).on("click", ".deleterow", function () {
    var index = $(".deleterow").index(this);
    $(".removerow").eq(index).remove();
    $(".row tr").each(function (i) {
      $($(this).find("td")[0]).html(i);
    });
  });

});
