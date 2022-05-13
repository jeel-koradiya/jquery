$(document).ready(function () {
   
    $(".showlabel").hide()
    $(".refresh").hide()
    var stoptimecount = 0;

    function genrate(){

        mainarray = ["fa-coffee","fa-bath","fa-car","fa-book","fa-etsy","fa-id-card","fa-quora","fa-shower","fa-arrows","fa-facebook","fa-user-o","fa-vcard","fa-close","fa-cog","fa-cube","fa-copyright","fa-deaf","fa-download","fa-code","fa-desktop","fa-bed","fa-bell","fa-eye","fa-blind","fa-birthday-cake","fa-bluetooth"]
        new_arraym=[];
        var randomm;
        var m=0;
        
        while(m<mainarray.length){
            randomm = Math.floor(Math.random() * mainarray.length);
            if(new_arraym.length == 0){
                new_arraym.push(mainarray[randomm]);
                m++;
            }
            else if(new_arraym.length>=1){
                if(new_arraym.includes(mainarray[randomm])){
                continue;
                }
                else{
                    new_arraym.push(mainarray[randomm]);
                    m++;
                }
            }
        }
        
        // console.log(new_arraym);
        new_array12=[];
        for(l=0;l<12;l++){
            new_array12.push(new_arraym[l])
        }

        // console.log(new_array12);


        // arraya=["fa-coffee","fa-bath","fa-car","fa-book","fa-etsy","fa-id-card","fa-quora","fa-shower","fa-arrows","fa-facebook","fa-user-o","fa-vcard"]
        new_arraya=[];
        var randoma;
        var i=0;
       

        while(i<new_array12.length){
            randoma = Math.floor(Math.random() * new_array12.length);
            if(new_arraya.length == 0){
                new_arraya.push(new_array12[randoma]);
                i++;
            }
            else if(new_arraya.length>=1){
                if(new_arraya.includes(new_array12[randoma])){
                continue;
                }
                else{
                    new_arraya.push(new_array12[randoma]);
                    i++;
                }
            }
        }

        // console.log(new_arraya);

        // --------


        // arrayb=["fa-coffee","fa-bath","fa-car","fa-book","fa-etsy","fa-id-card","fa-quora","fa-shower","fa-arrows","fa-facebook","fa-user-o","fa-vcard"]
        new_arrayb=[];
        var randomb;
        var j=0;

        while(j<new_array12.length){
            randomb = Math.floor(Math.random() * new_array12.length);
            if(new_arrayb.length == 0){
                new_arrayb.push(new_array12[randomb]);
                j++;
            }
            else if(new_arrayb.length>=1){
                if(new_arrayb.includes(new_array12[randomb])){
                continue;
                }
                else{
                    new_arrayb.push(new_array12[randomb]);
                    j++;
                }
            }
        }

        for(k=0;k<new_arrayb.length;k++){
            new_arraya.push(new_arrayb[k])
        }
    
        console.log(new_arraya);

        count=1;
        

    }

    for(i=0;i<4;i++){
        $(".addrow").append(`<tr></tr>`);
        for(j=0;j<6;j++){
            $(".addrow").append(`<td><button class="buttonclass"><i class="fa fa-coffee" aria-hidden="true"></i></button></td>`);
            $("button").addClass("green")
        }
    }

    $("i").removeClass("fa-coffee");

    firsttime=1

    if(firsttime=1){
        genrate()
        firsttime=0;
    }

    storearray = [];

    count=1;

    $(".refresh").click(function(){

        $(".buttonclass").prop('disabled', false);
        $(".clockhide").hide()
        $(".buttonclass").addClass("green")
        $(".buttonclass").removeClass("pink")
        $(".buttonclass").removeClass("dis")
        $("i").attr("class","")
        $("i").addClass("fa")

        count=1;
        stoptimecount = 0;

        // $("tr").remove();
        genrate()
        
        // location.reload();
        
    });

        $(".buttonclass").click(function(){

            if(count==1){
                    var h = 0,m = 0,s = 0,c = 0;
                    TimeClockSet(h, m, s, c);
                    timestart(h, m, s, c);
                    count=0;
            }

            buttonindex =  $(".buttonclass").index(this);
            console.log(buttonindex);
            settext = new_arraya[buttonindex];
            console.log("settext"+settext);
            $(".buttonclass").eq(buttonindex).find("i").addClass(settext);
            $(".buttonclass").eq(buttonindex).addClass("pink");

            storearray.push(settext,buttonindex)
        
            st1 = storearray[1]
            st2 = storearray[3]
            console.log(st1,st2)
            console.log("length:"+storearray.length)

            if(st1==st2){
                console.log("st1 st2");
                        firstset = storearray[0];
                        secondset = storearray[2]; 
                     
                        $(".buttonclass").eq(st1).addClass("pink")
                        $(".buttonclass").eq(st2).addClass("pink")
                        storearray.pop()
                        storearray.pop()
                        // storearray=[];
                        
            }

            if(storearray.length==4){
                for(i=0;i<1;i++){
                    if(storearray[i]==storearray[i+2]){
                        console.log("hello");
                        $('.buttonclass').eq(st1).prop('disabled', true);
                        $('.buttonclass').eq(st2).prop('disabled', true);
                        $('.buttonclass').eq(st1).addClass("dis")
                        $('.buttonclass').eq(st2).addClass("dis")
                        $('.buttonclass').not(".dis").prop('disabled', false);
                        stoptimecount = stoptimecount + 2;
                        console.log("stoptimecount :"+stoptimecount);
                        storearray=[];
                    }
                    if(storearray[i+1]==storearray[i+3]){
                        console.log("st1 st2");
                                firstset = storearray[0];
                                secondset = storearray[2]; 
                             
                                $(".buttonclass").eq(st1).addClass("pink")
                                $(".buttonclass").eq(st2).addClass("pink")
                                storearray=[];
                                
                    }
                    else if(storearray[i]!=storearray[i+2]){

                        // if($('.buttonclass').prop('disabled')){
                                $('.buttonclass').prop('disabled', true);
                                $('.buttonclass.dis').prop('disabled', true);
                              
                        // }
                        

                        if(storearray.length==4){

                             setTimeout(() => {
                              
                            // $('.buttonclass').prop('disabled', false);
                            console.log("hiii");
                            firstset = storearray[0];
                            secondset = storearray[2]; 
                            $('.buttonclass').eq(st1).find("i").removeClass(firstset);
                            $('.buttonclass').eq(st2).find("i").removeClass(secondset);
                            $(".buttonclass").eq(st1).removeClass("pink")
                            $(".buttonclass").eq(st2).removeClass("pink")
                            $(".buttonclass").eq(st1).addClass("green")
                            $(".buttonclass").eq(st2).addClass("green")
                            $('.buttonclass').not(".dis").prop('disabled', false);
                            storearray=[];

                              }, 500);
                        }

                    
                     
                    }
                }
            }

            if(stoptimecount==24){
            console.log("stoptimecount in yes:"+stoptimecount);
            h = $(".hour").text();
            m = $(".minute").text();
            s = $(".second").text();
            

            $(".refresh").show();
            $(".showlabel,.clockhide").show()
            clearInterval(timer);
            }

        });

       //Time

      function TimeClockSet(h, m, s, c) {

        $(".hour").text((parseInt(h) < 10) ? ("0" + parseInt(h)) : h);
        $(".minute").text((parseInt(m) < 10) ? ("0" + parseInt(m)) : m);
        $(".second").text((parseInt(s) < 10) ? ("0" + parseInt(s)) : s);
        $(".csecond").text((parseInt(c) < 10) ? ("0" + parseInt(c)) : c);

      }

      function timestart(h, m, s, c) {
        var h, m, s, c;
        timer = setInterval(function () {
          if (c == 0 || c >= 0) {
            c++;
            if (c == 100) {
              c = 0;
              s++;
              if (s == 60) {
                s = 0;
                s++;
                m++;
                if (m == 60) {
                  m = 0;
                  m++;
                  h++;
                }
              }
            }
          }

          TimeClockSet(h, m, s, c);
        }, 10);
      }

});

