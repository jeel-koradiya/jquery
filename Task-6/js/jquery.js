$(document).ready(function(){

    $(".form_exp").keypress(function(event){
    event.preventDefault();
    });

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

    //Value Fatch
    $(".clickbutton").click(function(){
        var value = $(this).val();
        var t = eval($(".form_exp").val($('.form_exp').val()+ value)); 
    });

    //equal button
    $(".equalto").click(function(){
        try {
           var value = $('.form_exp').val();
           console.log(value);
           var value = value.replace(/x/g,"*");
           var value = value.replace(/÷/g,"/");
           var value = value.replace(/√/g,"**0.5 ");
           var value = value.replace(/²/g,"**2 ");
           var s = value;
            for (var i = 0; i < s.length; i++) {
                  if(s.charAt(i)=="/" && s.charAt(i+1)=="/"){
                    throw "Malformed expression";
              }
            }
           var cal_result = (eval(value));
           if(cal_result=="Infinity") throw "Division by zero is undefined";
           if(cal_result=="%") throw "Malformed expression";
           $(".form_exp").val(cal_result);
        } 
        catch (e){
            if (e instanceof SyntaxError) {        
                $(".form_exp").val("Malformed expression");
            }
            else{
                $(".form_exp").val(e);
            } 
        }
    });
});

// keypress code
$(document).on('keydown', function(event) {

  // if ((event.which < 0 || event.which > 57) && (event.which == 116) && (event.which < 95 || event.which > 111) && (event.which !== 13)) {
  //   this.location.reload()
  //   return false;
  // }
   if(event.keyCode == '8'){
    event.preventDefault();
    var valuebackspace = $(".form_exp").val();
    if (!(parseInt(parseFloat(valuebackspace)) == 0 && valuebackspace.length == 1))
        $(".form_exp").val(valuebackspace.slice(0, valuebackspace.length-1));
    if (valuebackspace.length == 1)
        $(".form_exp").val("");
  } else {
     var value = $(".form_exp").val();
     if(event.keyCode  == '13'){
        $(".equalto").trigger("click");
     }
     else if(event.keyCode  == '116'){
        this.location.reload()
     }
     else if(event.shiftKey == true && event.keyCode == '57'){
        $(".form_exp").val(value+'(');
     }
     else if(event.shiftKey == true && event.keyCode == '48'){
        $(".form_exp").val(value+')');
     }
     else if(event.shiftKey == true && event.keyCode == '53'){
        $(".form_exp").val(value+'%');
     }
     else if(event.shiftKey == true && event.keyCode == '56'){
      $(".form_exp").val(value+'x');
     }
     else if (event.key == "Escape") {
        $(".form_exp").val("");
     }
     else if(event.keyCode == '48' || event.keyCode == '96'){
        $(".form_exp").val(value+'0');
     }
     else if(event.keyCode == '49' || event.keyCode == '97'){
        $(".form_exp").val(value+'1');
     }
     else if(event.keyCode == '50' || event.keyCode == '98'){
        $(".form_exp").val(value+'2');
     }
     else if(event.keyCode == '51' || event.keyCode == '99'){
        $(".form_exp").val(value+'3');
     }
     else if(event.keyCode == '52' || event.keyCode == '100'){
        $(".form_exp").val(value+'4');
     }
     else if(event.keyCode == '53' || event.keyCode == '101'){
        $(".form_exp").val(value+'5');
     }
     else if(event.keyCode == '54' || event.keyCode == '102'){
        $(".form_exp").val(value+'6');
     }
     else if(event.keyCode == '55' || event.keyCode == '103'){
        $(".form_exp").val(value+'7');
     }
     else if(event.keyCode == '56' || event.keyCode == '104'){
        $(".form_exp").val(value+'8');
     }
     else if(event.keyCode == '57' || event.keyCode == '105'){
        $(".form_exp").val(value+'9');
     }
     else if(event.keyCode == '107' || event.keyCode == '187'){
        $(".form_exp").val(value+'+');
     }
     else if(event.keyCode == '109' || event.keyCode == '189'){
        $(".form_exp").val(value+'-');
     }
     else if(event.keyCode == '106'){
        $(".form_exp").val(value+'x');
     }
     else if(event.keyCode == '111' || event.keyCode == '191'){
        $(".form_exp").val(value+'÷');
     }
     else if(event.keyCode == '8'){
        var valuebackspace = $(".form_exp").val();
        if (!(parseInt(parseFloat(valuebackspace)) == 0 && valuebackspace.length == 1))
            $(".form_exp").val(valuebackspace.slice(0, valuebackspace.length - 1));
        if (valuebackspace.length == 1)
            $(".form_exp").val("");
        }
    else if(event.keyCode == '110' || event.keyCode == '190'){
        $(".form_exp").val(value+'.');
    }
    else {
        $(".form_exp").val(value);
    }
      return true;
    }
});
