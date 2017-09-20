/*
* @Author: surpe
* @Date:   2017-09-18 17:12:29
* @Last Modified by:   surpe
* @Last Modified time: 2017-09-19 23:12:21
*/
  window.onload=function(){
  		let aside=document.getElementsByClassName('aside')[0];
	let item=document.getElementsByClassName('item');
	let lis=aside.getElementsByTagName('li');
	let num=0;
	for(let i=0; i<lis.length;i++){
		lis[i].onmouseover=function(){
			item[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			item[i].style.display='none';
		}
	}


	let image=document.getElementsByClassName('imgbox')[0];
	let imgs=image.getElementsByTagName('li');
	let point=document.getElementsByClassName('point')[0];
	let points=point.getElementsByTagName('li');



    //let的now的方法
    let now=0
    for(let i=0;i<points.length;i++){
    	points[i].onclick=function(){
    	      imgs[now].style.opacity='0'
    	      points[now].style.background='green';
              points[i].style.background='red';
    	      imgs[i].style.opacity='1';
            now=i;
            num=i;
    	}
    }
    //var的添加属性的方法    闭包   getclass  兼容  ${ }  自动轮播  放到上面就停下
	   /*var now=0;
	   for(var i=0;i<points.length;i++){
	   	    points[i].index=i;
	   	    console.log(points);
	    	points[i].onclick=function(){
		      imgs[now].style.opacity='0';
		      imgs[this.index].style.opacity='1';
		      now=this.index;
	    	}
	    
	    }*/  //作为属性将index加进对象的属性，只是将数字存下来，在调用的时候还是第i个元素的调用，但是对应的图片要调用哪个不知道，这是的this。index就起到作用
   //var 的闭包的方法v  做轮播的方法  不是解决var出现的问题


// 自动轮播
     let t;
     
	 t=setInterval(move,1000);
	 function move(){	 	
      for(let i=0;i<imgs.length;i++){
      	imgs[i].style.opacity='0';
      	points[i].style.background='green';
      }
	 imgs[num].style.opacity='1';
	 points[num].style.background='red';
	 num++;
	 if(num==imgs.length){
	 	num=0;
	 }
	 }
//放到图上轮播停止
let main=document.getElementsByTagName('main')[0];
  main.onmouseover=function(){
  	clearInterval(t);
  }
  main.onmouseout=function(){
  	t=setInterval(move, 1000);
  }


   //getclass的方法
  //  function getClass(){

  //  }

  // 

}

