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
              <button type="button" class="addsubmit addsubmitstyle">Submit</button>
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



//Submit Button
$(document).on("click", ".addsubmit",function()
  {
    var addsubmitindex = $(".addsubmit").index(this);
    var trlength = $(this).parents(".addmoreadd").find(".addchildforaddingstyle").length;
    var tabletitle = $(".tabletitle").eq(addsubmitindex).val();

    $("table").eq(addsubmitindex).find("th").remove();
    $("table").eq(addsubmitindex).find("tbody").empty();
    $("table thead tr").eq(addsubmitindex).append(`<th colspan="2">${tabletitle}</th>`);
    
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
          var addchildindex = $(".addchild").index(addchildbtnindex);
          
          $(".addmoreadd").eq(addchildindex).append(`<div class="addchildforaddingstyle">
          <input class="subtitle" type="text" placeholder="SubTitle">
          <input class="value" type="text" placeholder="Value">
          <button type="button" class="deletechild adddeletestyle">Delete</button>
          </div>`);
        }
      }
    });
    
});
     
//Parent Delete Button with confirm box
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
        $(".deleteleftrightside").eq(addmoredelete).remove();
        $(".addmoreadd").eq(addmoredelete).remove();
      }
    }
  });
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
      }
    }
  });
});