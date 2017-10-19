/*
* @Author: surpe
* @Date:   2017-09-18 18:22:13
* @Last Modified by:   surpe
* @Last Modified time: 2017-10-16 10:27:41
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


    //轮播图///////////////////////////////////////////////////////////////////////////////////////
    let bannerbox=$('.banner-box')[0];
    let banner1=$('.banner1')[0];
    let imgW=parseInt(getComputedStyle(banner1,null).width);
    let banner=document.getElementsByClassName('banner')[0];
    let bannerlis=banner.getElementsByTagName('li');
    let bannercolor=['#E7E7E7','#0E0903','#F69D15','#3174C2','#E8E8E8','#FFC2CD'];
    let point=document.getElementsByClassName('point')[0];
    let pointlis=point.getElementsByTagName('li');
    for(let i=0;i<pointlis.length;i++){
    	pointlis[i].onclick=function(){
        if(now==i){
          return;
        }
         bannerbox.style.background=bannercolor[next];
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
       bannerbox.style.background=bannercolor[next];
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

   //按需加载///////////////////////////////////////////////////////////////////////////
   let flagload=true;
   let flag3=true;
   let sections=document.querySelectorAll('section');
   let Bsearch=document.querySelector('.Bsearch');
   let Baside=document.querySelector('.Baside');
   let color=['#C6F75F','#F08936','#4636F0','#F0366C','#76D3D3','#F0ED43','#F09340'];
   let ch=window.innerHeight;
   let sectionArr=[];
   sections.forEach(element=>{
    sectionArr.push(element.offsetTop);
   })

   window.onscroll=function(){
    if(flagload){
      let scrolltop=document.body.scrollTop;
        if(scrolltop>=500){
          if(!flag3){
            return
          }
            Bsearch.style.top=0+'px';
            Baside.style.left=10+'px';
            console.log(1)
            flag3=!flag3;
            
        }    
        if(scrolltop<500&&scrolltop>0){
          if(flag3){
            return
          }
          Bsearch.style.top=-50+'px';
          Baside.style.left=-50+'px';
          console.log(2)
          flag3=!flag3;
          
        }






         sectionArr.forEach((element,index)=>{
         if(element+500<=ch+scrolltop){
          bsideli.forEach((value)=>{
          value.style.background='#626262';
          })
          bsideli[index].style.background=color[index];
          let imgs=sections[index].getElementsByTagName('img');
          for(let i=0;i<imgs.length;i++){
            imgs[i].src=imgs[i].title;
          }
        }
      })
    }
      
   
   }
   //固定的侧导航/////////////////////////////////////////////////////////////////////////
   let bsideli=document.querySelectorAll('.bside>li');
   bsideli.forEach((element,index)=>{
    element.onclick=function(){ 
      flagload=false;  
        bsideli.forEach((value)=>{
          value.style.background='#626262';
        })
        bsideli[index].style.background=color[index];
        animate(document.body,{scrollTop:sectionArr[index]},function(){
          flagload=true;
        });
    } 
   })
////////////////固定的导航/////////////////////////
    


}