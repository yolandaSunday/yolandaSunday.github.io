/**
 * Created by Administrator on 2016/9/7.
 */
$(function(){
    //下拉菜单
    $('.nav li').mousemove(function(){
        $(this).find('div.navP,div.navC,div.navY,div.navA').slideDown('slow').stop(true,true);
    });
    $('.nav li').mouseleave(function(){
        $(this).find('div.navP,div.navC,div.navY,div.navA').slideUp('fast').stop(true,true);
    })

})