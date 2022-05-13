$(document).ready(function(){
    $("#update").hide();
    var idIncre = 1;

    $("#add").click(function(){
        var inputVal = $('#inputValue').val();

        if($("#all-dropdown").find('select').length > 1) {
            var targetSel = $("#all-dropdown").find('select').last();
            if(targetSel.val()=='none'){
                
                var targetEle = $(`#menu-list`).find(`li[data-id=${targetSel.prev().val()}]`);
                targetEle.find('>ul').append(`<li data-id='${idIncre}' data-text='${inputVal}'><p>${inputVal}</p><button class="edit">Edit</button><button class="remove">Remove</button></li>`);
                $("#all-dropdown").find('select').last().append(`<option value='${idIncre}'>${inputVal}</option>`);               
            } else {
                
                var targetEle = $(`#menu-list`).find(`li[data-id=${targetSel.val()}]`);
                $("#all-dropdown").append(`<select><option value='none'>none</option><option value='${idIncre}'>${inputVal}</option></select></br>`);
                targetEle.append(`<ul><li data-id='${idIncre}' data-text='${inputVal}'><p>${inputVal}</p><button class="edit">Edit</button><button class="remove">Remove</button></li></ul>`);
            }
            
        } 
        
        else {
            if($('.parent-dropdown').val() == 'none'){
                $('#menu-list>ul').append(`<li data-id='${idIncre}' data-text='${inputVal}'><p>${inputVal}</p><button class="edit">Edit</button><button class="remove">Remove</button></li>`);
                $('.parent-dropdown').append(`<option value='${idIncre}'>${inputVal}</option>`);
            } else {
                var targetEle = $("#menu-list").find(`li[data-id=${$('.parent-dropdown').val()}]`);
                if(targetEle.find('ul').length>0){
                    targetEle.find('>ul').append(`<li data-id='${idIncre}' data-text='${inputVal}'><p>${inputVal}</p><button class="edit">Edit</button><button class="remove">Remove</button></li>`);
                    $("#all-dropdown").find('select').last().append(`<option value='${idIncre}'>${inputVal}</option>`);
                } else{
                    $("#all-dropdown").append(`<select><option value='none'>none</option><option value='${idIncre}'>${inputVal}</option></select></br>`);
                    targetEle.append(`<ul><li data-id='${idIncre}' data-text='${inputVal}'><p>${inputVal}</p><button class="edit">Edit</button><button class="remove">Remove</button></li></ul>`);
                }
            }
        }
        $('#inputValue').val("");
        idIncre++;
    });

    $(document).on('change','select',function(){
        $(this).nextAll().remove();
        if($(this).val() != 'none'){
            var targetEle = $(`#menu-list`).find(`li[data-id=${$(this).val()}]`);
            if(targetEle.find('ul').length>0){
                $("#all-dropdown").append(`<select><option value='none'>none</option></select></br>`);
                for(i=0;i<targetEle.find('ul:first').children().length;i++){
                    var dataId = targetEle.find('ul:first').children().eq(i).attr('data-id')
                    var dataText = targetEle.find('ul:first').children().eq(i).attr('data-text')
                    $("#all-dropdown").find('select').last().append(`<option value='${dataId}'>${dataText}</option>`);
                }
            }
        }
    });

    $(document).on('click','.remove',function(){
            
        $("select:first option[value='none']").attr("selected",true);
        dataidvalue = $(this).closest("li").attr("data-id");
        $("#all-dropdown").find('select').first().find(`option[value="${dataidvalue}"]`).remove();
        $(this).closest("li").remove();
        $("ul").not(':has(li),.ulmain').remove();
        $("select").trigger("change");  
    });

    $(document).on('click','.edit',function(){
        dataidvalue = $(this).closest("li").attr("data-id");
        gettext = $(this).closest("li").attr("data-text");
        $("#inputValue").val(gettext);

        $('.edit,.remove').prop('disabled', true);

        $("#update").show();
        $("#add").hide();
    });
     
    $(document).on('click','#update',function(){
        
        inputVal = $('#inputValue').val();
        console.log("dataidvalue :"+dataidvalue);

        var targetEle = $("#menu-list").find(`li[data-id=${dataidvalue}]`);
        
        targetEle.attr("data-id",`${dataidvalue}`);
        targetEle.attr("data-text",`${inputVal}`);
        targetEle.find(">p").text(inputVal);
        $(`option[value='${dataidvalue}']`).text(inputVal);

        $('.edit,.remove').prop('disabled', false);

        $("#update").hide();
        $("#add").show();
        $('#inputValue').val("");
    });
});
