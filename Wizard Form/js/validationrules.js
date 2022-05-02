$(document).ready(function(){

    $.validator.addMethod('IP4Checker', function(value) {
        return value.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/);
    }, 'Invalid IP address');
    
    $('#fname,#lname').keypress(function (e) {
        var regex = new RegExp("^[a-zA-Z]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }
        else
        {
        e.preventDefault();
        $('.error').show();
        $('.error').text('Please Enter Alphabate');
        return false;
        }
    });

    $( "#dob" ).datepicker({

        changeMonth: true,
        changeYear: true,
        yearRange: "1930:2022",
        maxDate:"-1d"
    
    }).on("change",function(){
        $(this).valid();
    })

$("#formvalidation").validate({
    ignore:[],
    rules: {
        fname:"required",
        lname:"required",
        gender:{ required:true },

        email: {
            required: true,
            email: true
        },
        contact:{
            minlength:10,
            maxlength:10,
            required: true
        },

        dob:"required",
        hour:{
            required: true,
            min:1,
            max:24
        },
        money:"required",
        zipcode:{
            minlength:7,
            maxlength:7,
            required: true
        },
        ipaddress:{
            required: true,
            IP4Checker:true
        },
        select:"required",
        aboutyourself:"required",
        terms:"required"
    },
    messages:{
        fname:"Please Enter Valid First Name",
        lname:"Please Enter Valid Last Name",
        gender:"Please Select Gender",
        email:"Please Enter Valid Email-id",
        contact:"Please Enter Valid Contect No",
        dob:"Please Enter Valid Date of Birth ",
        hour:"Please Enter Valid Hour(0 to 24)",
        money:"Please Enter Valid Money(INR)",
        zipcode:"Please Enter Valid Zipcode",
        ipaddress:{
            required:"Please Enter Valid Ip-address",
            IP4Checker:"Please Enter Valid Ip-address"
        },
        aboutyourself:"Please Enter about Your Information",
        terms:"Please accept the Terms & Conditions" 
    }
  });
});