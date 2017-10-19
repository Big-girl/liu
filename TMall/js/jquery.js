/*
* @Author: surpe
* @Date:   2017-10-15 19:21:20
* @Last Modified by:   surpe
* @Last Modified time: 2017-10-16 23:54:56
*/
$(document).ready(function(){
	//头部的部分效果
	$('.head-nav>li').mouseover(function(){
		$(this).children('div').css({display:'block'});
	}).mouseout(function(){
		$(this).children('div').css({display:'none'});
	});
	//侧导航
	asidecolor=['#ED678E','#ED67DE','#AF46D8','#6F46D8','#244BC6','#2490C6','#24C6A5','#24C655','#B7C624','#C68624','#C64024','#9521C9','#085A6A','9DDE76','#ED316A','#ED31AD']
	$('.aside-list>li').mouseover(function(){
		let index=$(this).index();
		$(this).find('.aside-item').css({display:'block'});
		$('.aside-list>li').children('a').css({color:'#000'})
		$(this).children('a').css({color:`${asidecolor[index]}`});
		$(this).find('.contaier>div>a').mouseover(function(){
			$(this).css({color:`${asidecolor[index]}`});
		}).mouseout(function(){
			$(this).css({color:'#B7B5B4'});
		})
	}).mouseout(function(){
		$(this).find('.aside-item').css({display:'none'})
	});
	//banner
	let now=0,next=0;
	let banner=$('.banner-box');
	let lis=$('.banner>li')
	let imgW=lis.width();
	let points=$('.point>li');
	let t=setInterval(move,3000);
	banner.mouseover(function(){
		clearInterval(t);
	}).mouseout(function(){
		t=setInterval(move,3000);
	});
	points.click(function(){
		let index=$(this).index();
		points.css({background:'#a2a2a2'})
		points.eq(index).css({background:'#f1f1f1'})
		lis.eq(now).animate({left:-imgW});
		lis.eq(index).css({left:imgW}).animate({left:0});
		now=next=index;
	})
	function move(){
		next++;
		if(next>=lis.length){
			next=0;
		}
		points.css({background:'#a2a2a2'})
		points.eq(next).css({background:'#f1f1f1'})
		lis.eq(now).animate({left:-imgW});
		lis.eq(next).css({left:imgW}).animate({left:0});
		now=next;
	}
	function movel(){
		next--;
		if(next<0){
			next=lis.length-1;
		}
		lis.eq(now).animate({left:imgW});
		lis.eq(next).css({left:-imgW}).animate({left:0});
		now=next;
	}
	//按需加载
	let rasidelis=$('.raside>ul>li');
	let floorArr=[];
	let floor=$('section');
	let baside=$('.Baside');
	let bsearch=$('.Bsearch');
	let basidelis=$('.bside>li');
	let color=['#C6F75F','#F08936','#4636F0','#F0366C','#76D3D3','#F0ED43','#F09340'];
	let flag=true;
	let ch=$(window).height();
	basidelis.click(function(){
		let index=$(this).index()-1;
		basidelis.css({background:'#626262'})
		$(this).css({background:`${color[index]}`});
		$(window).scrollTop(floorArr[index]);
	})
	for(let i=0;i<floor.length;i++){
		floorArr.push(floor.eq(i).offset()['top']);
	}
	$(window).scroll(function(){
		rasidelis.last().click(function(){
			$(window).scrollTop(0);
		})
		let scrolltop=$(window).scrollTop();
		floorArr.forEach((value,index)=>{
			if(ch+scrolltop>value+500){
				basidelis.css({background:'#626262'})
		        basidelis.eq(index).css({background:`${color[index]}`});
				floor.eq(index).find('img').attr('src',function(){
					return this.title;
				})
			}
		})
		if(scrolltop>=500){
		     if(!flag){
		     	return;
		     }			
	 			baside.animate({left:10});
			    bsearch.animate({top:0});
			    flag=!flag;	
		}else if(scrolltop<500){		
		     if(flag){
		     	return;
		     }	
	 			baside.animate({left:-50});
			    bsearch.animate({top:-50});
			    flag=!flag;
		}
		
	})
    //右边的侧导航
	let raside=$('.raside').height(ch);
    rasidelis.mouseover(function(){
        rasidelis.css({background:'#000'})
    	$(this).css({background:'#D82127'});
    	aw=$(this).children('a').width()
    	$(this).children('a').animate({left:`${-aw-20}`,opacity:1});  
    	$(this).children('div').css({display:'block'});  	
    }).mouseout(function(){
    	$(this).children('a').animate({left:`${-aw-50}`,opacity:0});
    	$(this).children('div').css({display:'none'});
    });
    // rasidelis.eq(last).click(function(){
    // 	$(window).scrollTop(0);
    // })

    
	
})