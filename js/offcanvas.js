/* 侧边栏 */
$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
});

/* 顶部导航 */
$(document).ready(function(){  
  var p=0,t=0;
  $(window).scroll(function(e){  
    p = $(this).scrollTop();  
    
    if(t<=p){//下滚
      $('nav.navbar').animate({top: '-50px'}, 10);
    }else{//上滚
      $('nav.navbar').animate({top: '0'}, 10);
    }  
    setTimeout(function(){t = p;},0);         
  });  
});  