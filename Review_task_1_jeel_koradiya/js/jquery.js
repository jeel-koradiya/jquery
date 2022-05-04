$(document).ready(function () {

  $('.content').hide().first().show();
  $('.button').first().css("background-color","#ff0000");
  $('.icon,.rect,.rect1,.logohide,.companynamehide').hide();
  
  $('.button').click(function(){

    $('.content').hide().eq($(this).index()).show();

    $(this).css("background-color","#ff0000");

    $(".button").css("background-color","#EFEFEF").eq($(this).index()).css("background-color","#ff0000");
   
  });

  function htmlEncode(value) {
    return $('<div/>').text(value)
      .html();
    }
  
    $(function () {
  
    $('#websiteurl').keyup(function () {
  
      let finalURL =
  'https://chart.googleapis.com/chart?cht=qr&chl=' +
      htmlEncode($('#websiteurl').val()) +
      '&chs=160x160&chld=L|0'
  
      $('.qr-code').attr('src', finalURL);
    });
    });
  


  $("#primery").change(function(){
    $(".front").css('background', $(this).val());
    
    $("#primerytext").val($(this).val())
    
    $(".rect").css('background', $(this).val());
  });

  $("#secondary").change(function(){
    $(".back").css('background', $(this).val());
    $("#secondarytext").val($(this).val())
    $(".rect1").css('background', $(this).val());
    
  });

  $("#tertiary").change(function(){
    $(".restore1").css('color', $(this).val());
    $("#tertiarytext").val($(this).val())
   
  })

    

});

$(document).on("keyup","#cname",function(){

  var companyname = $("#cname").val();
  console.log("cn:"+companyname)
  $(".companyname").empty();
  $(".companyname").append(`${companyname}`);

});

$(document).on("keyup","#lname",function(){

  var logoname = $("#lname").val();
  console.log("ln:"+logoname)
  $(".quora").removeClass("fa-quora");
  $(".quora").addClass(`${logoname}`);

});

$(document).on("keyup","#websiteurl",function(){

  var websiteurl = $("#websiteurl").val();
    console.log(websiteurl)
    $(".frontweburl").empty();
    $(".frontweburl").append(`<i class="fa fa-link" aria-hidden="true"></i> `+`${websiteurl}`);
  
});

$(document).on("keyup","#fname",function(){

  var fullname = $("#fname").val();
    console.log(fullname)
    $(".fullname").empty();
    $(".fullname").append(`${fullname}`);
  
});

$(document).on("keyup","#designation",function(){

  var designationname = $("#designation").val();
    console.log(designationname)
    $(".designationname").empty();
    $(".designationname").append(`${designationname}`);
  
});

$(document).on("keyup","#contact",function(){

  var contactno = $("#contact").val();
    console.log(contactno)
    $(".contactno").empty();
    $(".contactno").append(`<i class="fa fa-phone-square" aria-hidden="true"></i> `+`${contactno}`);
  
});

$(document).on("keyup","#email",function(){

  var emailid = $("#email").val();
    console.log(emailid)
    $(".emailid").empty();
    $(".emailid").append(`<i class="fa fa-envelope" aria-hidden="true"></i> `+`${emailid}`);
  
});

$(document).on("click",".colorreset",function(){

  $("#primery").val("#ff0000");
  $("#secondary").val("#ff0000");
  $("#tertiary").val("#ff0000");
  $("#primerytext").val("#ff0000");
  $("#secondarytext").val("#ff0000");
  $("#tertiarytext").val("#ff0000");
  $(".front,.back").css("background","#ff0000")
  $(".rect,.rect1").css("background","#ff0000")
  $(".restore1").css("color","#000")
  
});


$(document).on("click",".resetallform",function(){

  $('#formvalidation')[0].reset();
  $("#primery").val("#ff0000");
  $("#secondary").val("#ff0000");
  $("#tertiary").val("#ff0000");
  $("#primerytext").val("#ff0000");
  $("#secondarytext").val("#ff0000");
  $("#tertiarytext").val("#ff0000");
  $('#clean').prop('checked',true);
  $('.content').hide().first().show();
  $(".front").css("background","#fff")
  $(".back").css("background","#ff0000")
  $(".companyname").empty();
  $(".companyname").text("Company name");

  $(".frontweburl").empty();
  $(".frontweburl").text("websiteurl");

  $(".fullname").empty();
  $(".fullname").text("fullname");

  $(".designationname").empty();
  $(".designationname").text("Designation");

  $(".contactno").empty();
  $(".contactno").text("contact");

  $(".emailid").empty();
  $(".emailid").text("emailid");

  var logoname = $("#lname").val();
  console.log("ln:"+logoname)
  $(".quora").removeClass(`${logoname}`);
  $(".quora").addClass("fa-quora");

  $(".rect,.rect1").css("background","#ff0000")
  $(".restore1").css("color","#000")

  $('.button').first().css("background-color","#ff0000");
  $(".button").css("background-color","#EFEFEF").eq($(".button").index()).css("background-color","#ff0000");

  var seturllink = "https://chart.googleapis.com/chart?cht=qr&chl=Hello+World&chs=160x160&chld=L|0"

  $('.qr-code').attr('src', seturllink);
  // $(".companyname,.fa-quora,.frontweburl,.fullname,.designationname,.contactno,.emailid").empty();
  
});



$(document).on("click","input[type='radio']",function(){

  temvalue = $("input[type='radio']:checked").val();
  if(temvalue=="standard"){
    console.log(temvalue);
    $('.icon,.rect,.rect1,.logohide,.companynamehide').show();
    $(".scanmetext").hide()
    $(".logohide").addClass("logohidestandard");
    
  }
  else{
    $('.icon,.rect,.rect1,.logohide,.companynamehide').hide();
    $(".scanmetext").show()
  }

});

$(document).on('click','#download',function(){

  
  if($("#formvalidation").valid() == true){
    
    var myImage = $('.qr-code').attr('src')
    console.log("hello"+myImage);

    var pdf = new jsPDF();
  
  // pdf.addImage(myImage, 'png', 10, 30, 150, 76);
  let section=$('.export');
  let page= function() {
      pdf.save('convertpdf.pdf');
     
  };
  pdf.addHTML(section,page);
  


}
else{
  alert("Please Fill all the field");
}
  
})

