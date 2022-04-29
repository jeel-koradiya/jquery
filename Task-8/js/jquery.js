var trlength;
var addchildindex,addmorelength;


var tabletitleindex,tablesubtitleindex,tablevalueindexx;
$(document).ready(function(){

    $(".showtable").append(`
    <table id="0" class="deleteleftrightside table-bordered" border="1">
      <thead>
        <tr>
          
        </tr>
      </thead>
      <tbody></tbody>
    </table>`);

    //Add More Button with confirm box
    $(".addmore").click(function(){

      bootbox.confirm({ 
        message: "Are you sure add one more field?",
        buttons: {
          confirm: {
              label: 'Yes',
              className: 'btn-success'
          },
          cancel: {
              label: 'No',
              className: 'btn-danger'
          }
      },
        callback: function(result){
          if(result==true){
   
            var addmoreindex = $(".addmore").index(this);

              $(".addmoreaddboxmain").append(`<div class="addmoreadd addmoreaddstyle">
              <input type="text" class="tabletitle" placeholder="Title">
              <button type="button" class="addchild addchildstyle">Add Child</button>
              <button type="button" class="addmoredelete adddeletestyle">Delete</button> </div> `);
      
              $(".showtable").append(`
              <table id="${addmoreindex}" class="deleteleftrightside table-bordered" border="1">
                <thead> <tr></tr> </thead>
                <tbody></tbody>
              </table>`);
            }
          }
      })
    });
});


//subtitle
$(document).on("keyup",".subtitle",function(){
  tablesubtitleindex = $(this).parents().parents().index();

  // console.log("tablesubtitleindex:",tablesubtitleindex);
  trlength = $(this).parents(".addmoreadd").find(".addchildforaddingstyle").length;

  $("table").eq(tablesubtitleindex).find("tbody").empty();

  for(i=0;i<trlength;i++){
    var subtitle = $(this).parents(".addmoreadd").find(".subtitle").eq(i).val();
    var value = $(this).parents(".addmoreadd").find(".value").eq(i).val();

    if ($('.subtitle').val()=="" && $('.value').val()=="") {
      $(".tabledelete").eq(tablesubtitleindex).remove();
    }
  else{
        $(this).parents().find("table").eq(tablesubtitleindex).find("tbody").append(`
        <tr class="tabledelete">
          <td>${subtitle}</td>
          <td>${value}</td>
        </tr>`);
  }
    // console.log("subtitle: "+subtitle,value);
    
  }
 
})

//value
$(document).on("keyup",".value",function(){
  tablesubtitleindex = $(this).parents().parents().index();
  // console.log("tablesubtitleindex:",tablesubtitleindex);
  trlength = $(this).parents(".addmoreadd").find(".addchildforaddingstyle").length;

  $("table").eq(tablesubtitleindex).find("tbody").empty();

  for(i=0;i<trlength;i++){
    var subtitle = $(this).parents(".addmoreadd").find(".subtitle").eq(i).val();
    var value = $(this).parents(".addmoreadd").find(".value").eq(i).val();
    // console.log("subtitle: "+subtitle,value);
     
    if ($('.value').val()=="" && $('.subtitle').val()=="") {
      $(".tabledelete").eq(tablesubtitleindex).remove();
    }
    else{
          $(this).parents().find("table").eq(tablesubtitleindex).find("tbody").append(`
          <tr class="tabledelete">
            <td>${subtitle}</td>
            <td>${value}</td>
          </tr>`);
    }
  }

})

//onkeydown Button
$(document).on("keyup",".tabletitle",function()
  {
    tabletitleindex = $(this).parents().index();
    // console.log("tabletitleindex:",tabletitleindex);
    
    // console.log("trlength:",trlength);

    var tabletitle = $(".tabletitle").eq(tabletitleindex).val();
  
    var tabletitlelenght = tabletitle.length

    

    // console.log("tabletitle :  tabletitlelenght: "+tabletitle,tabletitlelenght);
  
    $("table").eq(tabletitleindex).find("th").remove();
  
    $("table thead tr").eq(tabletitleindex).append(`<th colspan="2">${tabletitle}</th>`);
    
    if(tabletitlelenght==0){
      $("table").eq(tabletitleindex).find("th").remove();
    }
});


//Add-Child Button with confirm box
$(document).on("click", ".addchild",function()
  {
          var addchildbtnindex = this;
          bootbox.confirm({ 
            message: "Are you sure add one more Childfield?",
            buttons: {
              confirm: {
                  label: 'Yes',
                  className: 'btn-success'
              },
              cancel: {
                  label: 'No',
                  className: 'btn-danger'
              }
          },
            callback: function(result){
      
              if(result==true){
          addchildindex = $(".addchild").index(addchildbtnindex);
          $(".addmoreadd").eq(addchildindex).append(`<div class="addchildforaddingstyle">
          <input class="subtitle" type="text" placeholder="SubTitle">
          <input class="value" type="text" placeholder="Value">
          <button type="button" class="deletechild adddeletestyle">Delete</button>
          </div>`); 
        }
      }
    });
});

$(document).on("mouseenter", ".addmoredelete",function(){

    addmorelength = $(this).parents(".addmoreaddboxmain").find(".addmoreadd").length;
    // console.log(addmorelength);

});
     
//Parent Delete Button with confirm box
$(document).on("click", ".addmoredelete",function(){

        trlength = $(this).parents(".addmoreadd").find(".addchildforaddingstyle").length;
        console.log(trlength);

        if(trlength>0){
          bootbox.alert("Please Delete a child first of all")
          $('.addmoredelete').prop('disabled', false);
        }
        else if(trlength==0 && addmorelength>1){
          var addmoredeleteindex = this;
          bootbox.confirm({ 
            message: "Are you sure want to delete?",
            buttons: {
              confirm: {
                  label: 'Yes',
                  className: 'btn-success'
              },
              cancel: {
                  label: 'No',
                  className: 'btn-danger'
              }
          },
            callback: function(result){
      
              if(result==true){
          
          var addmoredelete = $(".addmoredelete").index(addmoredeleteindex);
          $(".deleteleftrightside").eq(addmoredelete).remove();
          $(".addmoreadd").eq(addmoredelete).remove();
        }
      }
    });
        }
        else if(addmorelength==1){
          // bootbox.alert("Last Add more so you can not delete this");
          $('.addmoredelete').prop('disabled', false);
          console.log("hello"+addmorelength);
        }
        else{
          $('.addmoredelete').prop('disabled', false);
        }
        console.log("hello"+addmorelength); 
});

//Child Delete Button with confirm box
$(document).on("click", ".deletechild",function(){
        var addmoredeleteindex = this;
        bootbox.confirm({ 
          message: "Are you sure want to delete?",
          buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
          callback: function(result){
            if(result==true){
            var deletechildindex = $(".deletechild").index(addmoredeleteindex);
            $(".addchildforaddingstyle").eq(deletechildindex).remove();

            // if ($('.value').val()=="" && $('.subtitle').val()=="") {
            //   $(".tabledelete").eq(deletechildindex).empty();
            // }
        
        $(".tabledelete").eq(deletechildindex).remove();

        $(".value").trigger('keyup');
        $(".subtitle").trigger('keyup');


      }
    }
  });
});