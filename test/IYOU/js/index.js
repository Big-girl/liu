/*
* @Author: surpe
* @Date:   2017-10-21 22:15:09
* @Last Modified by:   surpe
* @Last Modified time: 2017-10-23 23:07:12
*/
$(document).ready(function(){
	    let bannerR=$('.banner-right');
	    let bannerL=$('.banner-left');
		bannerR.on('click',function(){
			let next=$('.active').next();
			console.log(next)
			if (next.length==0) {
				next=$('.banner-list>li').eq(0);
			}
			scale(next);	
		})
		bannerL.on('click',function(){
			let prev=$('.active').prev();
			if (prev.length==0) {
				prev=$('.banner-list>li').eq(-1);
			}
			scale(prev);	
		})
		function scale(obj){
				let active=$('.active');
				active.addClass('fangda').delay(500).queue(function(){
					$(this).removeClass('fangda').removeClass('active');
					$(this).dequeue();
				}).children('.banner-mask').children().animate({opacity:0})
				obj.delay(500).queue(function(){
					$(this).addClass('fangda').children('.banner-mask')
					.children().animate({opacity:1})
					$(this)[0].offsetWidth;
					$(this).removeClass('fangda').addClass('active');
					$(this).dequeue();
				})				
			}







})
	
