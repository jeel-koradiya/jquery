// script task 4 New

$(document).ready(function () {  

  //Masking---------------------
  $('#contact').mask('0000000000');
  $('#hour').mask('00');
  $('#dob').mask('00/00/0000');
  $('#zipcode').mask('000-000');
  // $('#ipaddress').mask('000.000.000.000');
  $('#money').mask('00,00,00,00,00,000',{reverse: true});
  $('#ipaddress').inputmask({
    alias: "ip",
    greedy: false,
    palceholder:"",
    jitMasking:true
  });

  var bool = false;
  // var submitbool = false;
  var formindex
  var index, indexbutton,indexerror,x, length,no,ffname,llname,ggender,eemail,ccontact,ddob,hhour,mmoney,zzipcode,iipaddress,ssports,aaboutyourself,tterms;

  $(".content").hide().first().show();
  $("button.previous, button.submit,.update,.cancel").hide();

    //click on edit butten show hide
    function buttonset() {
        if (bool == true) {
          if (length == x + 1) {
            console.log("bool true");
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
        no = $("tr").length-6;
        ffname = $("#fname").val();
        llname = $("#lname").val();
        ggender = $("input[type='radio']:checked").val();
        eemail = $("#email").val();
        ccontact = $("#contact").val();
        ddob = $("#dob").val();
        hhour = $("#hour").val();
        mmoney = $("#money").val();
        zzipcode = $("#zipcode").val();
        iipaddress = $("#ipaddress").val();
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

  //-----------next button------------
    $(".next").click(function () {
    length = $(".content").length;
    $(".content").hide();
    if (x == null) {
      x = 0;
    }
    if(x < 2){

      x++;
    }
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

  //-----------previous button------------
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

  //-----------submit button------------

  $(".submit").click(function (e) {

    if($("#formvalidation").valid() == true){
        $(".content").hide();
        $(".content").eq(0).show();
        $(".next").eq(0).show();
        $(".previous,.submit").hide();
        
        //form data get
        formdateget();

          if ($("#terms").is(":checked")) {
          var tterms = "Accept";
          } else {
          var tterms = "Not Accept";
          }

        // console.log($("#formvalidation").valid());

        $(".row").append(`<tr class="removerow"><td class="no"> ${no} </td>,
            <td class="efname">${ffname}</td>,
            <td class="elname">${llname}</td>,
            <td class="egender">${ggender}</td>,
            <td class="eeemail">${eemail}</td>,
            <td class="econtact">${ccontact}</td>,
            <td class="edob">${ddob}</td>,
            <td class="ehour">${hhour}</td>,
            <td class="emoney">${mmoney}</td>,
            <td class="ezipcode">${zzipcode}</td>,
            <td class="eipaddress">${iipaddress}</td>,
            <td class="esports">${ssports}</td>,
            <td class="eaboutyourself">${aaboutyourself}</td>,
            <td class="eterms">${tterms}</td>,
            <td> <button class="edit">Edit</button> </td>,
            <td> <button class="deleterow">Delete</button> </td></tr>`);
            
        // $(".content").hide().first().show();
        // $(".content").hide().eq($(indexbutton).index()).show();
        // $(".previous,.submit").hide();
        // $(".next").show();
          
        //clear text box
        indexbutton=0,x=0;
        $('.formreset')[0].reset();
    }

    else
    { 
            // var indexerror ;
            // if($('label.error').is(':visible')){
            // indexerror = $('label.error:visible').parent().index();
            indexerror = $(".content").has("input.error").eq(0).index();
            console.log(indexerror+"indexerror");
            $(".content").hide();
            $(".content").has("input.error").eq(0).show();

            // $(".content").not($(".content").eq(indexerror).show()).hide();
          // }

            //  indexerror = $(".error:visible").first().parents(".content").index();
            // indexerror = $(".error").first().parents(".content").index();
            // $(".content").not($(".content").eq(indexerror).show()).hide();

            // indexerror = $('label.error:visible').first().parent().index();

            // $(".content").not($(".content").eq(indexerror).show()).hide();

           

            length = $(".content").length;
            // console.log(length);
            formindex = $(".content").eq(indexerror).index();
            // console.log(formindex);
            indexbutton = formindex;
            x = indexbutton;

            if (x==0) {
              console.log("submitbool else if");
              $("button.update, button.cancel,button.submit,button.previous").hide();
              $("button.next").show();
            }

            else if (length==formindex+1) {
              $(".content").eq(length-1).show();
              console.log("submitbool else if1");
              $("button.update, button.cancel,button.next").hide();
              $("button.previous,button.submit").show();
              
            }

            else {
              console.log("submitbool else if2");
              $("button.update, button.cancel,button.submit").hide();
              $("button.next,button.previous").show();
              
            }
    }
    e.preventDefault();
  });

  //   -----------edit button------------
  $(document).on("click", ".edit", function () {
    bool = true;
    length = $(".content").length;

    $(this).parents("tr").find(".deleterow").attr("disabled", true);

    var eindex = $(".edit").index(this);
    var index = $(".no").eq(eindex).text();
    var efname = $(".efname").eq(eindex).text();
    var elname = $(".elname").eq(eindex).text();
    var egender = $(".egender").eq(eindex).text();
    var eeemail = $(".eeemail").eq(eindex).text();
    var econtact = $(".econtact").eq(eindex).text();
    var edob = $(".edob").eq(eindex).text();
    var ehour = $(".ehour").eq(eindex).text();
    var emoney = $(".emoney").eq(eindex).text();
    var ezipcode = $(".ezipcode").eq(eindex).text();
    var eipaddress = $(".eipaddress").eq(eindex).text();
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

    $("input.setedittexthour").val(ehour);
    $("input.setedittextmoney").val(emoney);
    $("input.setedittextzipcode").val(ezipcode);
    $("input.setedittextipaddress").val(eipaddress);

    if (esports == "cricket") {
      $("option[value=cricket]").prop("selected", true);
    } else if (esports == "football") {
      $("option[value=football]").prop("selected", true);
    } else {
      $("option[value=chess]").prop("selected", true);
    }

    eterms == "Accept" ? $("#terms").prop("checked", true) : $("#terms").prop("checked", false);

    $("#aboutyourself").val(eaboutyourself);
    // if (eterms == " Accept ") {
    //   $("#terms").prop("checked", true);
    // } else {
    //   $("#terms").prop("checked", false);
    // }

    //function for button set click edit buuton click event
    buttonset();
  });

  //   -----------update button------------
    $(".update").click(function () {
    //form data get
    // formdateget();
    // console.log($("#formvalidation").valid());

    if($("#formvalidation").valid() == true){
      console.log("ifformvalidation");
      $(".update,.cancel").hide();
      $(".submit").show();
      bool = false;

      //form data get
      formdateget();

        if ($("#terms").is(":checked")) {
        var tterms = "Accept";
        } else {
        var tterms = "Not Accept";
        }

      $(".deleterow").attr("disabled", false);
    
    index = parseInt($(".index").val());
    let html = `<td class="no">${index}</td>,
         <td class="efname">${ffname}</td>,
         <td class="elname">${llname}</td>,
         <td class="egender">${ggender}</td>,
         <td class="eeemail">${eemail}</td>,
         <td class="econtact">${ccontact}</td>,
         <td class="edob">${ddob}</td>,
         <td class="ehour">${hhour}</td>,
         <td class="emoney">${mmoney}</td>,
         <td class="ezipcode">${zzipcode}</td>,
         <td class="eipaddress">${iipaddress}</td>,
         <td class="esports">${ssports}</td>,
         <td class="eaboutyourself">${aaboutyourself}</td>,
         <td class="eterms">${tterms}</td>,
         <td> <button class="edit">Edit</button> </td>,
         <td> <button class="deleterow">Delete</button> </td>`;
         console.log("ifformvalidation");
        //  console.log(index);
    $(".removerow")
      .eq(parseInt(index - 1))
      .html(html);

      buttonset();
    //clear text box
    $('.formreset')[0]. reset();
   }
   else{
    $(".update,.cancel").show();
    $(".submit").hide();

    indexerror = $(".content").has("input.error").eq(0).index();
    console.log(indexerror+"indexerror");
    $(".content").hide();
    $(".content").has("input.error").eq(0).show();

    length = $(".content").length;
    // console.log(length);
    formindex = $(".content").eq(indexerror).index();
    // console.log(formindex);
    indexbutton = formindex;
    x = indexbutton;

    // indexerror = $(".error").first().parents(".content").index();
    // $(".content").not($(".content").eq(indexerror).show()).hide();
    // length = $(".content").length;
    // console.log(length);
    // formindex = $(".content").eq(indexerror).index();
    // console.log(formindex);
    // buttonindex = formindex;

    if (x==0) {
      // console.log("submitbool else if");
      $("button.update, button.cancel,button.submit,button.previous").hide();
      $("button.next").show();
    }

    else if (length==formindex+1) {
      $(".content").eq(length-1).show();
      // console.log("submitbool else if1");
      $("button.submit,button.next,").hide();
      $("button.update, button.cancel,button.previous").show();
    }

    else {
      // console.log("submitbool else if2");
      $("button.submit,button.update, button.cancel").hide();
      $("button.previous,button.next").show();
    }
  }
  });

  //   -----------cancel button------------

  $(document).on("click", ".cancel", function () {

        $(".content").hide();
        $(".content").eq(0).show();
        $(".next").eq(0).show();
        $(".previous,.submit").hide();
        


    bool = false;
    //function for button set click edit buuton click event
    buttonset();
    indexbutton=0,x=0;
    
    $(".deleterow").attr("disabled", false);
    //clear text box
    $('.formreset')[0]. reset();
    $(".update,.cancel").hide();
    $(".submit").hide();
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


