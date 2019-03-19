// function showLocale(objD){

//   var str,colorhead,colorfoot;

//   var yy = objD.getYear();

//   if(yy<1900) yy = yy+1900;

//   var MM = objD.getMonth()+1;

//   if(MM<10) MM = '0' + MM;

//   var dd = objD.getDate();

//   if(dd<10) dd = '0' + dd;

//   var hh = objD.getHours();

//   if(hh<10) hh = '0' + hh;

//   var mm = objD.getMinutes();

//   if(mm<10) mm = '0' + mm;

//   var ss = objD.getSeconds();

//   if(ss<10) ss = '0' + ss;

//   var ww = objD.getDay();

//   if  ( ww==0 )  colorhead="<font color=\"#000000\">";

//   if  ( ww > 0 && ww < 6 )  colorhead="<font color=\"#000000\">";

//   if  ( ww==6 )  colorhead="<font color=\"#000000\">";

//   if  (ww==0)  ww="星期日";

//   if  (ww==1)  ww="星期一";

//   if  (ww==2)  ww="星期二";

//   if  (ww==3)  ww="星期三";

//   if  (ww==4)  ww="星期四";

//   if  (ww==5)  ww="星期五";

//   if  (ww==6)  ww="星期六";

//   colorfoot="</font>"

//   str = colorhead + yy + "-" + MM + "-" + dd + " " + ww + colorfoot;

//   return(str);

// }

// function tick(){

//   var today;

//   today = new Date();

//   document.getElementById("localtime").innerHTML = showLocale(today);

//   window.setTimeout("tick()", 1000);

// }

// tick();

$(function(){

  $(".list1-ul li").hover(function(){

    console.log($(this).index());

    $(".list1-b").hide().eq($(this).index()).show();

    $(this).css({"color":"#0071b9","font-size":"20px","font-weight":"bold"}).

    siblings().css({"color":"#000","font-size":"18px","font-weight":"100"});

  });

});

$(function(){

  $(".list2-ul li").hover(function(){

    $(".list2-b").hide().eq($(this).index()).show();

    $(this).css({"color":"#0071b9","font-size":"20px","font-weight":"bold"}).
    siblings().css({"color":"#000","font-size":"18px","font-weight":"100"});

  });


});

$(function(){

  $(".list3-ul li").hover(function(){

    $(".list3-b").hide().eq($(this).index()).show();

    $(this).css({"color":"#0071b9","font-size":"20px","font-weight":"bold"}).

    siblings().css({"color":"#000","font-size":"18px","font-weight":"100"});

  });

});

$(function(){

  $(".lie-li5").hover(function(){

    $(".li5-img").attr('src','/template/pc/protest/static/image/mu2.png');

  },function(){

    $(".li5-img").attr('src','/template/pc/protest/static/image/mu1.png');

  });

});

$(function(){

  $(".lie-li4").hover(function(){

    $(".li4-img").attr('src','/template/pc/protest/static/image/earth1.png');

  },function(){

    $(".li4-img").attr('src','/template/pc/protest/static/image/earth.png');

  });

}); 

$(function(){

  $(".lie-li3").hover(function(){

    $(".li3-img").attr('src','/template/pc/protest/static/image/xia1.png');

  },function(){

    $(".li3-img").attr('src','/template/pc/protest/static/image/xia.png');

  });

}); 

$(function(){

  $(".lie-li2").hover(function(){

    $(".li2-img").attr('src','/template/pc/protest/static/image/mailbox1.png');

  },function(){

    $(".li2-img").attr('src','/template/pc/protest/static/image/mailbox.png');

  });

}); 

$(function(){

  $(".lie-li1").hover(function(){

    $(".li1-img").attr('src','/template/pc/protest/static/image/iphone1.png');

  },function(){

    $(".li1-img").attr('src','/template/pc/protest/static/image/iphone.png');

  });

});   