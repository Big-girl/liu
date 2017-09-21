/*
* @Author: surpe
* @Date:   2017-09-18 19:54:52
* @Last Modified by:   surpe
* @Last Modified time: 2017-09-20 20:02:49
*/
window.onload=function(){

	//侧导航
	let aside=$('.aside')[0];
	let asideitems=document.getElementsByClassName('asideitems');
	let lis=aside.getElementsByTagName('li');
    let next=0,now=0;
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			asideitems[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			asideitems[i].style.display='none';
		}
	}
	//轮播
	let=banners=$('.banner-box')[0];
	let banner=document.getElementsByClassName('banner-list')[0];
	let bannerlis=banner.getElementsByTagName('li');
	let point=document.getElementsByClassName('banner-list-point')[0];
	let pointlis=point.getElementsByTagName('li');
	let imgW=banners.offsetWidth;
    let flag=true;
    for(let i=0;i<pointlis.length;i++){
    	pointlis[i].onclick=function(){
    		if(now==i){
    			return;
    		}
    		pointlis[i].style.background='#ff6700';
			pointlis[now].style.background='#333';
			bannerlis[i].style.left=imgW+'px';
			animate(bannerlis[now], {left:-imgW});
			animate(bannerlis[i], {left:0});
			now=next=i;
    	}
    	
    }

	//自动轮播
	let t=setInterval(move,3000);
	function move(){
		next++;
		if(next==bannerlis.length){
			next=0;
		}
		pointlis[next].style.background='#ff6700';
		pointlis[now].style.background='#333';
		bannerlis[next].style.left=imgW+'px';
		animate(bannerlis[now], {left:-imgW});
		animate(bannerlis[next], {left:0},function(){
			flag=true;
		});
		now=next;
	}
	function movel(){
		next--;
		if(next<0){
			next=bannerlis.length-1;
		}
		pointlis[next].style.background='#ff6700';
		pointlis[now].style.background='#333';
		bannerlis[next].style.left=`${-imgW}px`;
		animate(bannerlis[now], {left:imgW});
		animate(bannerlis[next], {left:0},function(){
			flag=true;
		});
		now=next;
	}
	//放上就停下
	banners.onmouseover=function(){
		clearInterval(t);
	}
	banners.onmouseout=function(){
		t=setInterval(move,3000);
	}
	//箭头的效果
	let bannerleft=document.getElementsByClassName('banner-left')[0];
	let bannerright=document.getElementsByClassName('banner-right')[0];
	bannerright.onclick=function(){
		if(!flag){
			return;
		}
		move();
		flag=false;
	}
	bannerleft.onclick=function(){
		if(!flag){
			return;
		}
		movel();
		flag=false;
	}
}