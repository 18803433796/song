//$(function(){
//	$(".shouye").click(function(){
//		$(".img").hide();
//		$(".img1").show();
//	})
//})

	

    function resize(originSize,type){
	//alert(1)
        var type=type||"x";
        var widths=document.documentElement.clientWidth;
        var heights=document.documentElement.clientHeight;
  
        if(type=="x"){
        	 var scale=widths/originSize*100;
        	 alert(scale)
        }else if(type=="y"){
        	 var scale=heights/originSize*100;
        }
        //alert(widths)
       
        document.getElementsByTagName("html")[0].style.fontSize=scale+"px";

    }
    window.onload=function(){
        resize(1334,"y");
    }
    
$(function(){
	$(".left div").click(function(){	
		$(".left div").eq($(this).index()).addClass(" biaoti").siblings().
		removeClass('biaoti');
			$(".hide").eq($(this).index()).addClass("xian").siblings().
		removeClass('xian');
		$(".show").eq($(this).index()).addClass("mei").siblings().
		removeClass('mei');
//		$(".hide").eq($(this).index()).show();
//		$(".show").eq($(this).index()).hide();
		$(".diyi span").eq($(this).index()).addClass("re").siblings().
	removeClass('re');
		
		//alert(1)
		$(".right .right-center").eq($(".left div").index(this)).addClass("content")
		.siblings().removeClass('content');
});
 
 $(".zhong div").click(function(){
 	$(".zhong div").eq($(this).index()).addClass("dier")
 	.siblings().removeClass('dier');
 	$(".bigbox .imgbox").eq($(".zhong div").index(this)).addClass("anli-box")
 	.siblings().removeClass('anli-box');
 	
 })
})
