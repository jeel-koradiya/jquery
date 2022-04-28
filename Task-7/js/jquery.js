var trlength;
$(document).ready(function(){

  $(".showtable").append(`
  <table id="0" class="deleteleftrightside table-bordered" border="1">
    <thead>
      <tr>
        
      </tr>
    </thead>
    <tbody></tbody>
  </table>`);

    //add parent
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
            console.log("addmore-index: "+addmoreindex);
      
              $(".addmoreaddboxmain").append(`<div class="addmoreadd addmoreaddstyle"><input type="text" class="tabletitle" placeholder="Title">
              <button type="button" class="addchild addchildstyle">Add Child</button>
              <button type="button" class="addsubmit addsubmitstyle">Submit</button>
              <button type="button" class="addmoredelete adddeletestyle">Delete</button> </div> `);
      
      
              $(".showtable").append(`
              <table id="${addmoreindex}" class="deleteleftrightside table-bordered" border="1">
                <thead>
                  <tr>
                    
                  </tr>
                </thead>
                <tbody></tbody>
              </table>`);
          }
        }
    })


  
      
  
    });

});



//table
$(document).on("click", ".addsubmit",function()
  {
    var addsubmitindex = $(".addsubmit").index(this);
    console.log("submit-index: "+addsubmitindex);

    var trlength = $(this).parents(".addmoreadd").find(".addchildforaddingstyle").length;
    console.log("trlength :"+trlength);
    
    var tabletitle = $(".tabletitle").eq(addsubmitindex).val();
    console.log(tabletitle);

    $(this).parents().find(`table`).eq(addsubmitindex).find("th").remove();
    $(this).parents().find(`table`).eq(addsubmitindex).find("tbody").empty();
    $(this).parents().find(`table thead tr`).eq(addsubmitindex).append(`<th colspan="2">${tabletitle}</th>`);
    
    for(i=0;i<trlength;i++){
      var subtitle = $(this).parents(".addmoreadd").find(".subtitle").eq(i).val();
      var value = $(this).parents(".addmoreadd").find(".value").eq(i).val();
      console.log(subtitle,value);
      $(this).parents().find(`table`).eq(addsubmitindex).find("tbody").append(`
          <tr class="tabledelete">
            <td>${subtitle}</td>
            <td>${value}</td>
          </tr>`);
    }
});

//add child
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
                var addchildindex = $(".addchild").index(addchildbtnindex);
          // console.log(addchildindex);
          $(".addmoreadd").eq(addchildindex).append(`<div class="addchildforaddingstyle">
          <input class="subtitle" type="text" placeholder="SubTitle">
          <input class="value" type="text" placeholder="Value">
          <button type="button" class="deletechild adddeletestyle">Delete</button>
        </div>`);
        }
      }
    });
    
});

       
//parent delete
$(document).on("click", ".addmoredelete",function(){
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
        // console.log("addmoredelete:"+addmoredelete);
        $(".deleteleftrightside").eq(addmoredelete).remove();
        $(".addmoreadd").eq(addmoredelete).remove();
      }
    }
  });
   
});

//child delete
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
        // console.log("deletechildindex:"+deletechildindex);
        $(".addchildforaddingstyle").eq(deletechildindex).remove();
      }
    }
  });
});





