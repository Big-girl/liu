/*
* @Author: surpe
* @Date:   2017-10-24 01:13:54
* @Last Modified by:   surpe
* @Last Modified time: 2017-10-27 14:42:46
*/
$(function(){
	let lis=$('.con');
    let mask=$('.mask');
	let mask1=$('.mask1');
	let del=$('.del');
    let left=$('.left');
    let right=$('.right');
    let tips=$('.tips');
    let index;
    lis.on('click',function(){
    	index=$(this).index();
    	let src=$(this).find('img').attr('src');
        let txt=$(this).find('span').text();
        mask.addClass('active');
    	mask1.addClass('active');
    	mask.find('img').attr('src',src);
        tips.animate({left:0}).find('span').text(txt);
    })
    left.on('click',function(e){
         e.preventDefault();
        tips.css({left:-150});
        index--;
        if(index<0){
            index=lis.length-1;
        }
        let src=lis.eq(index).find('img').attr('src');
        let txt=lis.eq(index).find('span').text();
        mask.find('img').attr('src',src);
        tips.animate({left:0}).find('span').text(txt);
    })
    right.on('click',function(e){
         e.preventDefault();
        tips.css({left:-150});
        index++;
        if(index>lis.length-1){
            index=0;
        }
        let src=lis.eq(index).find('img').attr('src');
        mask.find('img').attr('src',src);
        let txt=lis.eq(index).find('span').text();
        tips.animate({left:0}).find('span').text(txt);
    })
    del.on('click',function(){
        mask.removeClass('active');
    	mask1.removeClass('active');
    }).on('mouseenter',function(){
        tips.stop();
        tips.animate({left:-150}).stop();
    }).on('mouseleave',function(){
        tips.stop();
        tips.animate({left:0});
    })
    // mask1.on('click',function(e){
    //     e.preventDefault();
    //     location.replace('details.html');
    // })
    // $.ajax({
    //     url:'classquery.php',
    //     success:function(data){
    //         console.log(data);
    //     }
    // })
})