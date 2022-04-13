$(document).ready(function(){

//패밀리사이트    
let vi=true;
    $("#family_btn").click(function(e){
        e.preventDefault();
        
        /*두번째 클릭하면 background-position좌표값이 0,0으로 되돌아가게 하세요*/
        $(".family_menu").toggle();
        $(".btn_arrow").css("background-position","0 0");
    });


 //상단 메뉴 고정
    var $header = $('#header');

    $(window).scroll(function(){
    var $currentsct = $(this).scrollTop();
      if($currentsct > 0){
          $header.addClass('sticky');
      }else{
          $header.removeClass('sticky');
      }
  });

  /*숫자 애니메이션*/ 
    var $window = $(window),
        $targetE1 = $('.data'),
        $targetOST = $targetE1.offset().top - 500;
        console.log($targetOST);

        var executed = false;

        $window.scroll(function(){
            if(executed == false){

                if($(this).scrollTop() >= $targetOST){
                    //number animation
                    var $data = $(".data");

                    $data.each(function(){

                        var currentdata = $(this),
                            $rateNum = currentdata.attr('data-rate');
                            
                        $({mycount : 0}).animate({mycount:$rateNum},{
                            duration : 2500,
                            progress:function(){
                                var now = this.mycount;
                                currentdata.text(Math.floor(now)+'+');
                            }      
                        });

                    });
                    executed = true;
                }
            }
        });//scroll

        // top_메뉴
        $(".top_menu>a:first-child").click(function(){
            $(".nav_sub").toggle(250);
        });

        $(".search_btn").click(function(){
            $(".nav_search").toggle(250);            
        });
        
    


});//ready(funtion())