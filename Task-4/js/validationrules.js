$(document).ready(function(){

    $( "#dob" ).datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1930:2022",
        maxDate:"-1d"
    
    });

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
            required: true,
            
        },

        dob:"required",
        hour:{
            required: true,
            min:1,
            max:24
        },
        money:"required",
        zipcode:"required",
        ipaddress:"required",
        select:"required",
        aboutyourself:"required",
       
        

    },
    messages:{
        fname:"Enter First Name",
        lname:"Enter Last Name",
        gender:"Select Gender",
        email:"Enter Emailid",
        contact:"Enter Contect No",
        dob:"Enter Date of Birth ",
        hour:"Enter Hour",
        money:"Enter Money",
        zipcode:"Enter Zipcode",
        ipaddress:"Enter ipaddress",
        select:"Select any one",
        aboutyourself:"Enter about info"
        
        
    }
  
  });
});