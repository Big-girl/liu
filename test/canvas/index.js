/*
* @Author: surpe
* @Date:   2017-10-11 15:51:13
* @Last Modified by:   surpe
* @Last Modified time: 2017-10-29 15:10:16
*/
window.addEventListener('load',function(){
	let lis=document.querySelectorAll('.left>li');
	let canvas=document.querySelector('canvas');
	let cxt=canvas.getContext("2d");
	let line=document.querySelector('#line');
	let dash=document.querySelector('#dash');
	let circle=document.querySelector('#circle');
	let rect=document.querySelector('#rect');
	let pencil=document.querySelector('#pencil');
	let poly=document.querySelector('#poly');
	let polyj=document.querySelector('#polyj');
	let eraser=document.querySelector('#eraser');
	let xpc=document.querySelector('.xpc');
	let mask=document.querySelector('.mask');
	let font=document.querySelector('#font');
	let clip=document.querySelector('#clip');
	let cliper=document.querySelector('.cliper');
	let btn=document.querySelectorAll('li#fill,li#stroke');
	let btnStyle=document.querySelectorAll('#fillStyle,#strokeStyle');
	let backone=document.querySelector('.backone');
	let clear=document.querySelector('.clear');
	let save=document.querySelector('.save');
	console.log(btnStyle)
	console.log(btn[0].id)
	let pal=new palette(canvas,cxt,mask);
    
   

	line.onclick=function(){
       pal.draw('line');
       console.log(lis);
       for(let i=0;i<lis.length;i++){
       	lis[i].style.border='1px solid #ccc';
       }
       line.style.border='1px solid #ff6700';
	}
	 line.onclick();
	dash.onclick=function(){
		pal.draw('dash');
		for(let i=0;i<lis.length;i++){
       	lis[i].style.border='1px solid #ccc';
       }
		dash.style.border='1px solid #ff6700';
	}
	circle.onclick=function(){
		pal.draw('circle');
		for(let i=0;i<lis.length;i++){
       	lis[i].style.border='1px solid #ccc';
       }
		circle.style.border='1px solid #ff6700';
	}
	rect.onclick=function(){
		pal.draw('rect');
		for(let i=0;i<lis.length;i++){
       	lis[i].style.border='1px solid #ccc';
       }
		rect.style.border='1px solid #ff6700';
	}
	pencil.onclick=function(){
		pal.pencil();
		for(let i=0;i<lis.length;i++){
       	lis[i].style.border='1px solid #ccc';
       }
		pencil.style.border='1px solid #ff6700';
	}
	poly.onclick=function(){
		let num=1*prompt('请输入多边形的边数',5);
		pal.draw('poly',num);
		for(let i=0;i<lis.length;i++){
       	lis[i].style.border='1px solid #ccc';
       }
        poly.style.border='1px solid #ff6700';
	}
	polyj.onclick=function(){
		let num=1*prompt('请输入多边形的边数',5);
		pal.draw('polyj',num);
		for(let i=0;i<lis.length;i++){
       	lis[i].style.border='1px solid #ccc';
       }
		polyj.style.border='1px solid #ff6700';
	}
	eraser.onclick=function(){
		pal.eraser(xpc);
		for(let i=0;i<lis.length;i++){
       	lis[i].style.border='1px solid #ccc';
       }
		eraser.style.border='1px solid #ff6700';
	}
	font.onclick=function(){
		pal.font();
		for(let i=0;i<lis.length;i++){
       	lis[i].style.border='1px solid #ccc';
       }
        font.style.border='1px solid #ff6700';
	}
    clip.onclick=function(){
    	pal.clip(cliper);
    	for(let i=0;i<lis.length;i++){
       	lis[i].style.border='1px solid #ccc';
       }
        clip.style.border='1px solid #ff6700';
    }
    btn.forEach(element=>{
    	element.onclick=function(){
    		for(let i=0;i<btn.length;i++){
    			btn[i].style.border='1px solid #ccc';
    		}
    		pal.style=element.id;
    		element.style.border='1px solid #ff6700';
    	}
    })
    
    btnStyle.forEach(element=>{
    	element.onblur=function(){
    		for(let i=0;i<btnStyle.length;i++){
    			btnStyle[i].parentNode.style.border='1px solid #ccc';
    		}
    		element.parentNode.style.border='1px solid #ff6700';
    		pal[element.id]=element.value;
    	}
    })
    backone.onclick=function(){
    	pal.backone();
    }
    clear.onclick=function(){
    	pal.clear();
    }
	save.onclick=function(){
		let data=canvas.toDataURL('image/png');
		save.href=data;
		save.download='img.png';
	}
})