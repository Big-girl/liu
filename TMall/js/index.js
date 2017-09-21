/*
* @Author: surpe
* @Date:   2017-09-18 18:22:13
* @Last Modified by:   surpe
* @Last Modified time: 2017-09-20 17:21:28
*/
window.onload=function(){
	//侧导航
	let asidelist=document.getElementsByClassName('aside-list')[0];
	let lis=asidelist.getElementsByTagName('li');
	let asideitem=document.getElementsByClassName('aside-item');

  let next=0,now=0;
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			asideitem[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			asideitem[i].style.display='none';
		}
	}


    //轮播图
    let banner1=$('.banner1')[0];
    let imgW=parseInt(getComputedStyle(banner1,null).width);
    let banner=document.getElementsByClassName('banner')[0];
    let bannerlis=banner.getElementsByTagName('li');
    let point=document.getElementsByClassName('point')[0];
    let pointlis=point.getElementsByTagName('li');
    for(let i=0;i<pointlis.length;i++){
    	pointlis[i].onclick=function(){
        if(now==i){
          return;
        }
         pointlis[now].style.background='#a2a2a2';
         pointlis[i].style.background='#f1f1f1';
         bannerlis[i].style.left=`${imgW}px`;
         animate(bannerlis[now], {left:-imgW});
         animate(bannerlis[i], {left:0});
         now=next=i;
    	}
    }

    //自动轮播
    let t;
    t=setInterval(move,3000);
    function move(){
       next++;
       if(next==bannerlis.length){
        next=0;
       }
       pointlis[now].style.background='#a2a2a2';
       pointlis[next].style.background='#f1f1f1';
       bannerlis[next].style.left=`${imgW}px`;
       animate(bannerlis[now], {left:-imgW});
       animate(bannerlis[next], {left:0});
       now=next;
    }
    //放上就停止
    banner1.onmouseover=function(){
      clearInterval(t);
    }
    banner1.onmouseout=function(){
      t=setInterval(move,3000);
    }

}