$(document).ready(function(){

   
    
    $('#cname,#fname').keypress(function (e) {
        var regex = new RegExp("^[a-zA-Z /\s|.]+$");
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

 

$("#formvalidation").validate({
    ignore:[],
    rules: {
        cname:{
            required:true,
            minlength:2,  
            maxlength:20
        },
        lname:{
            required:true,
            minlength:2,  
            maxlength:20
        },
        websiteurl:{
            required:true,
            url: true
        },
        fname:{
            required:true,
            minlength:2,  
            maxlength:20
        },
        designation:{
            required:true,
            minlength:2,  
            maxlength:20
        },

        

        email: {
            required: true,
            email: true
        },
        contact:{
            minlength:10,
            maxlength:10,
            required: true
        } 
    },
    messages:{
        // cname:"Please Enter Company Name",
        // fname:"Please Enter Full Name",
        
        email:"Please Enter Valid Email-id",
        contact:"Please Enter Valid Contect No"
       
    }
  });
});