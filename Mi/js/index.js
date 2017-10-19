/*
* @Author: surpe
* @Date:   2017-09-18 19:54:52
* @Last Modified by:   surpe
* @Last Modified time: 2017-10-15 10:00:54
*/
window.onload=function(){

	//侧导航
	let aside=$('.aside')[0];
	let asideitems=document.getElementsByClassName('asideitems');
	let lis=aside.getElementsByTagName('li');
    let next=0,now=0;
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			asideitems[i].style.display='flex';
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

	//小米明星单品的列表效果
	let Singlebox=$('.singleimg-box')[0];
	let single=document.querySelector('.singleimg');
	let singleleft=document.querySelector('.lablebox-left>a');
	let singleright=document.querySelector('.lablebox-right>a');
	let singleW=Singlebox.offsetWidth;
	let clicknum=0;
	let moveW=singleW+14;
	singleleft.onclick=function(){ 
	    clicknum++;       
	    if(clicknum>=4){
	    	clicknum=4;
	    	return;
	    }
        animate(single,{left:-1240*clicknum})
        console.log(clicknum);
	}
	singleright.onclick=function(){ 
	    clicknum--;       
	    if(clicknum<=0){
	    	clicknum=0;
	    	return;
	    }
        animate(single,{left:-3720+(1240*(4-clicknum))})
        console.log(clicknum);
	}
    //按需加载
    let floor=document.querySelectorAll('.content-box>.main1>section');
    let floorArr=[];
    let ch=window.innerHeight;
    floor.forEach(elements=>{floorArr.push(elements.offsetTop);})
    window.onscroll=function(){
    	let scrolltop=document.body.scrollTop;
    	floorArr.forEach((value,index)=>{
    	 if(value+500<=ch+scrolltop){
    	 	let imgs=floor[index].getElementsByTagName('img');
    	 	for(let i=0;i<imgs.length;i++){
    	 		imgs[i].src=imgs[i].title;
    	 	}
    	 }
    })
    }
    

    //小购物车的显示
    let shopcar=document.querySelector('.shopcar-box>a');
    let minicar=document.querySelector('.car-mini');
    shopcar.onmouseover=function(){
    	minicar.style.display='block';
    	minicar.style.bottom='-80px';
    }
    shopcar.onmouseout=function(){
    	minicar.style.bottom='0px';
    	minicar.style.display='none';
    }


    //导航的小项目
    let navitems=document.querySelector('.navitems');
    navitems.style.width=window.innerWidth+'px';
    let navlistlis=document.querySelectorAll('.navlist>li');
    for(let i=0;i<navlistlis.length;i++){
    	navlistlis[i].onmouseover=function(){
    	navitems.style.display='block';
       }
        navlistlis[i].onmouseout=function(){
    	navitems.style.display='none';
       }
    }
    


    //小轮播
    let miconitem=document.querySelector('.miconitem');
    let miconitems=document.querySelectorAll('.miconitem>div');
    let miconleft=document.querySelector('.micon .left');
    let miconright=document.querySelector('.micon .right');
    let miconlis=document.querySelectorAll('.list');
    console.log(miconlis)
    let miconnow=0,miconnext=0;
    let miconW=miconitem.offsetWidth;
    miconleft.onclick=function(){
    	miconmove();
    }
    miconright.onclick=function(){
    	miconmovel();
    }
    
    function miconmove(){
        miconnext++;
        if(miconnext>miconitems.length-1){
        	miconnext=0;
        }
        animate(miconitems[now],{left:-miconW} );
        animate(miconitems[next],{left:0} );    
    }
     function miconmovel(){
        miconnext--;
        if(miconnext<0){
        	miconnext=miconitems.length-1;
        }
        animate(miconitems[now],{left:miconW} );
        animate(miconitems[next],{left:0} );    
    } 
  
}
		
