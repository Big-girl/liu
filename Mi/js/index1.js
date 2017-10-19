/*
* @Author: surpe
* @Date:   2017-10-15 10:36:05
* @Last Modified by:   surpe
* @Last Modified time: 2017-10-15 19:11:40
*/
$(document).ready(function(){
  //头部的购物车的隐藏和显示
    $('.shopcar-box').mouseover(function(){
    	$(this).find('.car-mini').css({display:'block'});
    }).mouseout(function(){
    	$(this).find('.car-mini').css({display:'none'});
    })
  //导航的下边内容的显示
    let windowWidth=window.innerWidth;
    $('.navlist>li').mouseover(function(){
        $(this).find('.navitems').css({display:'block',background:'#fff',width:`${windowWidth}`});
    }).mouseout(function(){
        $(this).find('.navitems').css({display:'none'});
    })
  //侧导航
	$('.aside>li').mouseover(function(){
		$(this).find('ul').css({display:'flex'})	
	}).mouseout(function(){
		$(this).find('ul').css({display:'none'})
	});


 //banner的效果
    let now=0,next=0;
    let bannerW=parseInt($('.banner-box').css('width'));
    let t=setInterval(move,3000)
    $('.banner-box').mouseover(function(){
    	clearInterval(t);
    }).mouseout(function(){
    	t=setInterval(move,3000)
    })
    //轮播点的效果
    $('.banner-list-point>li').click(function(){
    	let index=$(this).index();
    	if(now==index){
    		return;
    	}
    	$('.banner-list-point>li').css({background:'#333'})
        $('.banner-list-point>li').eq(index).css({background:'#ff6700'});
        $('.banner-list>li').eq(index).css({left:bannerW})
    	$('.banner-list>li').eq(now).animate({left:-bannerW});
    	$('.banner-list>li').eq(index).animate({left:0});
    	now=next=index;
    })
    //左右箭头的效果
    let flag=true;
    $('.banner-left').click(function(){
        if(!flag){
        	return;
        }
    	move();
    	flag=false;
    });
    $('.banner-right').click(function(){
        if(!flag){
        	return;
        }
    	movel();
    	flag=false;
    });

    function move(){
    	next++;
    	if(next>=$('.banner-list>li').length){
    		next=0;
    	}
        $('.banner-list-point>li').eq(now).css({background:'#333'});
        $('.banner-list-point>li').eq(next).css({background:'#ff6700'});
        $('.banner-list>li').eq(now).animate({left:-bannerW});
        $('.banner-list>li').eq(next).css({left:bannerW}).animate({left:0},function(){
        	flag=true;
        });
    	now=next;
    }
    function movel(){
    	next--;
    	if(next<0){
    		next=$('.banner-list>li').length-1;
    	}
        $('.banner-list-point>li').eq(now).css({background:'#333'});
        $('.banner-list-point>li').eq(next).css({background:'#ff6700'});
        $('.banner-list>li').eq(now).animate({left:bannerW});
        $('.banner-list>li').eq(next).css({left:-bannerW}).animate({left:0},function(){
        	flag=true;
        });
    	now=next;
    }
  //小米明星单名的效果
    $('.singleimg')
    $('.lablebox-left').click(function(){
    	if(parseInt($('.singleimg').css('left'))<=-3720){
    		$('.singleimg').css({left:-3720})
    		return;
    	}    	
        $('.singleimg').animate({left:'-=1240'})
    })
    $('.lablebox-right').click(function(){
    	if(parseInt($('.singleimg').css('left'))>=0){
    		$('.singleimg').css({left:0})
    		return;
    	}
       $('.singleimg').animate({left:'+=1240'})
    })

   //按需加载
     let floorArr=[];
     let floor=$('.content-box>.main1>section');
     let ch=$(window).width();
     for(let i=0;i<floor.length;i++){
     	floorArr.push(floor.eq(i).offset()['top']);
     }
     $(window).scroll(function(){
     	let scrolltop=$(this).scrollTop();
     	floorArr.forEach((value,index)=>{
            if(ch+scrolltop>=value+1000){
            	floor.eq(index).find('img').attr('src',function(){
            	     return this.title;
            	})
            }
     	})
     })

  //小轮播的效果
     let miconlis=$('.micon>li')

     for(let i=0;i<miconlis.length;i++){
     	let miconitems=miconlis.eq(i).find('.miconitem');
     	let divs=miconitems.find('div');
     	let points=miconlis.eq(i).find('.list>span');
     	let now1=0,next1=0;
        let flag1=true;
     	//点击的效果
     	points.click(function(){     		
     		let index=$(this).index();
            if(index==next1){
            	return;
            }
     		points.css({background:"#b0b0b0"});
            points.eq(index).css({background:"#ff6700"});
            divs.eq(now1).animate({left:-216});
	        divs.eq(index).css({left:216}).animate({left:-0});
	        now1=next1=index;

     	})
	    function mimove(){
	      next1++;
	      if(next1>=divs.length){
	      	next1=divs.length-1;
	      	return;
	      }
          points.css({background:"#b0b0b0"});
          points.eq(next1).css({background:"#ff6700"});
          divs.eq(now1).animate({left:-216});
          divs.eq(next1).css({left:216}).animate({left:-0},function(){
          	flag1=true;
          });
          now1=next1;
	    }
	   function mimovel(){
	     next1--;
	      if(next1<0){
	      	next1=0;
	      	return;
	      }
	      points.css({background:"#b0b0b0"});
          points.eq(next1).css({background:"#ff6700"});
          divs.eq(now1).animate({left:216});
          divs.eq(next1).css({left:-216}).animate({left:0},function(){
          	flag1=true;
          });
          now1=next1;
	   }
       miconlis.eq(i).find('.left').click(function(){
       	if(!flag1){
       		return;
       	}
       	mimovel();
       	flag1=false;
       })
       miconlis.eq(i).find('.right').click(function(){
       	if(!flag1){
       		return;
       	}
       	mimove();
        flag1=false;
       })
     }
    
     
});
