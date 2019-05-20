/**
 * Created by Administrator on 2016/9/7.
 */
$(function(){
    //轮播设置开始
    function roll(){
        setTimeout(function(){
            for (var i=0;i<=2;i++){
                var nowpic=$('#banner .banWrap img').eq(i);
                var nownum=$('#banner .navNum li').eq(i);
                if (nowpic.css("display")=="block"){
                    var showPicNum=i*1+1*1;
                    $('#banner .banWrap img').css("display","none");
                    $('#banner .navNum li').removeClass("nActive");
                    if(showPicNum==3){
                        $('#banner .banWrap img').eq(0).css("display","block");
                        $('#banner .navNum li').eq(0).addClass("nActive");
                    }else {
                        $('#banner .banWrap img').eq(showPicNum).css("display","block");
                        $('#banner .navNum li').eq(showPicNum).addClass("nActive");
                    }
                    break;
                }
            }
            roll();
        },2000)
    }
    roll();

    //prolist悬停效果
    $('.pro').hover(function(){
        var index=$(this).index()+4;
        var src="images/proIcon"+index+".png";
        $(this).find('img').attr('src',src)
        $(this).find('div.proBtn').css("background","url('images/indexBtnBg2.png') no-repeat left top");
    },function(){
        var index=$(this).index()+1;
        var src="images/proIcon"+index+".png";
        $(this).find('img').attr('src',src)
        $(this).find('div.proBtn').css("background","url('images/indexBtnBg1.png') no-repeat left top");
    })

    //about遮罩层hover效果
    $('.aboutList1,.aboutList2,.aboutList3').hover(function(){
        $(this).find('div.shade').css("display","none");
    },function (){
        $(this).find('div.shade').css("display","block");
    })

})
