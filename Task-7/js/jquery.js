var trlength;
$(document).ready(function(){

    //add parent
    $(".addmore").click(function(){
        $(".addmoreaddboxmain").append(`<div class="addmoreadd addmoreaddstyle"><input type="text" placeholder="Title">
        <button type="button" class="addchild addchildstyle">Add Child</button>
        <button type="button" class="addsubmit addsubmitstyle">Add Submit</button>
        <button type="button" class="addmoredelete adddeletestyle">Delete</button> </div> `);
    });

});



//table
$(document).on("click", ".addsubmit",function()
  {
    var addsubmit = $(".addsubmit").index(this);
    console.log(addsubmit);

    trlength = $(".addmoreadd").children().length;

    console.log("trlength"+trlength-4);

    var tabletitle = $(".tabletitle").val();
    console.log(tabletitle);


    $(".showtable").append(`
    <table border="1">
      <tr>
        <td colspan="2">${tabletitle}</td>
      </tr>
      <tbody>
      </tbody>
    </table>`);


    for(i=0;i<trlength-4;i++){
        var subtitle = $(".subtitle").eq(i).val();
        var value = $(".value").eq(i).val();
        console.log(subtitle,value);

         $("table").append(`
          <tr>
            <td>${subtitle}</td>
            <td>${value}</td>
          </tr>
    `)
    }

});

//add child
$(document).on("click", ".addchild",function()
  {
    var addchildindex = $(".addchild").index(this);
    console.log(addchildindex);
    $(".addmoreadd").eq(addchildindex).append(`<div class="addchildforaddingstyle">
    <input class="subtitle" type="text" placeholder="SubTitle">
    <input class="value" type="text" placeholder="Value">
    <button type="button" class="deletechild adddeletestyle">Delete</button>
  </div>`);
});

       
//parent delete
$(document).on("click", ".addmoredelete",function(){
    var addmoredelete = $(".addmoredelete").index(this);
    console.log("addmoredelete:"+addmoredelete);
    $(".addmoreadd").eq(addmoredelete).remove();
});

//child delete
$(document).on("click", ".deletechild",function(){
    var deletechildindex = $(".deletechild").index(this);
    console.log("deletechildindex:"+deletechildindex);
    $(".addchildforaddingstyle").eq(deletechildindex).remove();
});





