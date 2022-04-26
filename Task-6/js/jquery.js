$(document).ready(function(){

    $("body").click(function(){
        $(".form_exp").focus();
    })

    // All Clear
    $("#allClear").click(function() {
        $(".form_exp").val("");
        $(".form_exp").focus();
    });

    // Backspace
    $('#backspace').click(function() {
        var valuebackspace = $(".form_exp").val();
        if (!(parseInt(parseFloat(valuebackspace)) == 0 && valuebackspace.length == 1))
            $(".form_exp").val(valuebackspace.slice(0, valuebackspace.length - 1));
        if (valuebackspace.length == 1)
            $(".form_exp").val("");
    });

    //Adding to the expression
    $(".clickbutton").click(function(){
        var value = $(this).val();
        var t = eval($(".form_exp").val($('.form_exp').val()+ value)); 
    });

    $(".equalto").click(function(){
       
        try {
           var value = $('.form_exp').val();
           console.log(value);
           var value = value.replace(/x/g,"*");
           var value = value.replace(/÷/g,"/");
           var value = value.replace(/√/g,"**0.5");
           var value = value.replace(/²/g,"**2 ");
           
           

           var cal_result = (eval(value));
           if(cal_result=="Infinity") throw "Division by zero is undefined";
           if(cal_result=="%") throw "Malformed expression";
           $(".form_exp").val(cal_result);

        } catch (e) {

            if (e instanceof SyntaxError) {        
                $(".form_exp").val("Malformed expression");
            }
            else{
                $(".form_exp").val(e);
            } 
        }
    });


});

$(document).on('keydown', function(event) {
      if (event.key == "Escape") {
        $(".form_exp").val("");
      }

    keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            cal_result = (eval(($(".form_exp").val())));
            $(".form_exp").val(cal_result);
        }
});
