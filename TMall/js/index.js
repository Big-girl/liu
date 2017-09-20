/*
* @Author: surpe
* @Date:   2017-09-18 18:22:13
* @Last Modified by:   surpe
* @Last Modified time: 2017-09-20 00:15:26
*/
window.onload=function(){
	//侧导航
	let asidelist=document.getElementsByClassName('aside-list')[0];
	let lis=asidelist.getElementsByTagName('li');
	let asideitem=document.getElementsByClassName('aside-item');
  let num=0;
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			asideitem[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			asideitem[i].style.display='none';
		}
	}


    //轮播图
    let banner=document.getElementsByClassName('banner')[0];
    let bannerlis=banner.getElementsByTagName('li');
    let point=document.getElementsByClassName('point')[0];
    let pointlis=point.getElementsByTagName('li');
    for(let i=0;i<pointlis.length;i++){
    	pointlis[i].onclick=function(){
        for(let j=0;j<bannerlis.length;j++){
          bannerlis[j].style.opacity='0';
          pointlis[j].style.background='#a2a2a2';
        }         
          pointlis[i].style.background='#f1f1f1';
          bannerlis[i].style.opacity='1';
          num=i;
    	}
    }

    //自动轮播
    let t;
    t=setInterval(move,1000);
    function move(){
      for(let i=0;i<bannerlis.length;i++){
        bannerlis[i].style.opacity='0';
        pointlis[i].style.background='#a2a2a2';
      }
      bannerlis[num].style.opacity='1';
      pointlis[num].style.background=' #f1f1f1';

      num++;
      if(num==bannerlis.length){
        num=0;
      }
    }
    //放上就停止
    let banner1=document.getElementsByClassName('banner1')[0];
    banner1.onmouseover=function(){
      clearInterval(t);
    }
    banner1.onmouseout=function(){
      t=setInterval(move,1000);
    }

}