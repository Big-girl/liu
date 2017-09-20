/*
* @Author: surpe
* @Date:   2017-09-18 19:54:52
* @Last Modified by:   surpe
* @Last Modified time: 2017-09-20 01:24:22
*/
window.onload=function(){

	//侧导航
	let aside=document.getElementsByClassName('aside')[0];
	let asideitems=document.getElementsByClassName('asideitems');
	let lis=aside.getElementsByTagName('li');
	let num=0;
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			asideitems[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			asideitems[i].style.display='none';
		}
	}
	//轮播
	let banner=document.getElementsByClassName('banner-list')[0];
	let bannerlis=banner.getElementsByTagName('li');
	let point=document.getElementsByClassName('banner-list-point')[0];
	let pointlis=point.getElementsByTagName('li');
	for(let i=0;i<pointlis.length;i++){
		pointlis[i].onclick=function(){
			for(let j=0;j<bannerlis.length;j++){
			bannerlis[j].style.opacity='0';
			pointlis[j].style.background='#333';
			}
			bannerlis[i].style.opacity='1';
			pointlis[i].style.background='#ff6700';
			num=i;
		}
		
	}

	//自动轮播
	let t=setInterval(move,3000);
	function move(){
		for(let i=0;i<pointlis.length;i++){
			bannerlis[i].style.opacity='0';
			pointlis[i].style.background='#333';
		}
		bannerlis[num].style.opacity='1';
		pointlis[num].style.background="#ff6700";
		num++;
		if(num==bannerlis.length){
			num=0;
		}
	}
		function movel(){
		for(let i=0;i<pointlis.length;i++){
			bannerlis[i].style.opacity='0';
			pointlis[i].style.background='#333';
		}
		bannerlis[num].style.opacity='1';
		pointlis[num].style.background="#ff6700";
		num--;
		if(num<0){
			num=bannerlis.length-1;
		}
	}

	//放上就停下
	let main=document.getElementsByClassName('banner-box')[0];
	main.onmouseover=function(){
		clearInterval(t);
	}
	main.onmouseout=function(){
		t=setInterval(move,3000);
	}

	//箭头的效果
	let bannerleft=document.getElementsByClassName('banner-left')[0];
	let bannerright=document.getElementsByClassName('banner-right')[0];
	bannerright.onclick=function(){
		move();
	}
	bannerleft.onclick=function(){
		movel();
	}
}