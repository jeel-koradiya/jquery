$(document).ready(function () {

    var selectaddvalueindex,selectaddvaluechildindex,selectaddval;
    var count=1;
    
    
    
    $(".addbutton").click(function(){

        selectaddval = $("#selectaddvalue option:selected").val()
        selectaddvaluechildval = $("#selectaddvaluechild option:selected").val()

        

        if(selectaddval=="selectchild"){
            firstinputboxvalueget = $(".firstinputbox").val();
        
            $("#selectaddvalue").append(`<option value="${firstinputboxvalueget}">${firstinputboxvalueget}</option>`);
    
            $(".rightside").append(`<ul class="mainparent"><li>${firstinputboxvalueget}</li><br>
            <li class="lsn"><button type="button" class="editparent">Edit</button></li>
            <li class="lsn"><button type="button" class="removeparent">Remove</button></li></ul>`)
        }
        else{

           if(count==1){
            console.log("count-1");
            firstinputboxvalueget = $(".firstinputbox").val();

            $(".leftside").append(`<select name="addvalue" id="selectaddvaluechild">
            <option value="none">none</option>
            <option value="${firstinputboxvalueget}">${firstinputboxvalueget}</option>
            </select>`)
            count=0;

            $(".rightside .mainparent").eq(selectaddvalueindex-1).append(`<ul class="child"><li>${firstinputboxvalueget}</li><br>
            <li class="lsn"><button type="button" class="editparent">Edit</button></li>
            <li class="lsn"><button type="button" class="removeparent">Remove</button></li></ul>`)
           }

           else{
            console.log("count-0");
            firstinputboxvalueget = $(".firstinputbox").val();

            $(".leftside #selectaddvaluechild").append(`
            <option value="${firstinputboxvalueget}">${firstinputboxvalueget}</option>`)
         

            $(".rightside .mainparent").eq(selectaddvalueindex-1).append(`<ul class="child"><li>${firstinputboxvalueget}</li><br>
            <li class="lsn"><button type="button" class="editparent">Edit</button></li>
            <li class="lsn"><button type="button" class="removeparent">Remove</button></li></ul>`)
            
           }

            
      
           
          
            

            
                
        }



    });

    $("#selectaddvalue").change(function(){

        selectaddvalueindex = $("#selectaddvalue option:selected").index()
        console.log(selectaddvalueindex);

    });
    
});

$(document).on("change", "select#selectaddvalue",function(){

  

    selectaddvalueindex = $("#selectaddvalue option:selected").index()

    lengthofchild = $(".rightside").find(".mainparent").eq(selectaddvalueindex-1).find(".child").length

    console.log("lengthofchild"+lengthofchild);

    plus=0;
    var ids = [];
    for(i=0;i<lengthofchild;i++){
        childvalueforselect = $(".rightside").find(".mainparent").eq(selectaddvalueindex-1).find(".child").eq(lengthofchild-lengthofchild+plus).find("li:first").text();
        plus++;
        ids.push(childvalueforselect);
    }

    console.log(ids);

    $("#selectaddvaluechild").empty();
    $("#selectaddvaluechild").append(`<option value="none">none</option>`)

    for (let j = 0; j < ids.length; j++) {
        $("#selectaddvaluechild").append(`<option value="${ids[j]}">${ids[j]}</option>`)
    }


});

$(document).on("change", "select#selectaddvaluechild",function(){

    selectaddvaluechildindex = $("#selectaddvaluechild option:selected").index()
    console.log("selectaddvaluechildindex"+selectaddvaluechildindex);


});