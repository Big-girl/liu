/*
* @Author: surpe
* @Date:   2017-10-11 10:27:16
* @Last Modified by:   surpe
* @Last Modified time: 2017-10-13 00:38:22
*/
class palette{
	constructor(canvas,cxt,mask){
		this.mask=mask;
		this.canvas=canvas;
		this.cxt=cxt;
		this.cw=this.canvas.width;
		this.ch=this.canvas.height;
		this.lineWidth=1;
		this.lineCap='butt';
		this.style='fill';
		this.fillStyle='#000';
		this.strokeStyle='#000';
		this.history=[];
        this.xpc=document.querySelector('.xpc');
	    this.temp=null;
	};
	init(){
        this.lineWidth=1;
		this.lineCap='butt';
		this.cxt.style=this.style;
		this.cxt.fillStyle=this.fillStyle;
		this.cxt.strokeStyle=this.strokeStyle;
	};
	line(cx,cy,ox,oy){
		this.cxt.setLineDash([20,0]);
		this.cxt.beginPath();
		this.cxt.moveTo(cx, cy);
		this.cxt.lineTo(ox, oy);
		this.cxt.stroke();
	};
    dash(cx,cy,ox,oy){
        this.cxt.setLineDash([5,10]);
        this.cxt.beginPath();
        this.cxt.moveTo(cx, cy);
        this.cxt.lineTo(ox, oy);
        this.cxt.stroke();
    };
    circle(cx,cy,ox,oy){
    	let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
    	this.cxt.beginPath();
    	this.cxt.arc(cx, cy,r, 0, Math.PI*2);
    	this.cxt.closePath();
    	this.cxt[this.style]();
    };
    rect(cx, cy, ox, oy){
    	this.cxt.beginPath();
    	this.cxt.rect(cx, cy, ox,oy);
    	this.cxt.closePath();
    	this.cxt[this.style]();
    };
    poly(cx,cy,ox,oy,n){
        let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
        this.cxt.beginPath();
        this.cxt.moveTo(cx+r, cy);
        let rad=Math.PI*2/n;
        for(let i=0;i<n;i++){
        	let x=cx+r*Math.cos(rad*i);
        	let y=cy+r*Math.sin(rad*i);
        	this.cxt.lineTo(x, y);
        }
  	        this.cxt.closePath();
	        this.cxt[this.style]();
        
    };

    polyj(cx,cy,ox,oy,n){
    	let r=Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cy-oy,2));
    	this.cxt.beginPath();
    	this.cxt.moveTo(cx+r, cy);
    	let rad=Math.PI*2/n;
    	for(let i=0;i<n*2;i++){
    		let r1;
    		r1=i%2==0?r:r/2;
    		let x=cx+r1*Math.cos(rad*i);
        	let y=cy+r1*Math.sin(rad*i);
        	this.cxt.lineTo(x, y);
    	}
    	
    	this.cxt.closePath();
    	this.cxt[this.style]();
    };
   
    pencil(cx,cy,ox,oy){
      this.canvas.onmousedown=function(e){
      	this.cxt.setLineDash([20,0]);
          cx=e.offsetX;
          cy=e.offsetY;
         this.cxt.beginPath();
         this.cxt.moveTo(cx, cy);
         this.canvas.onmousemove=function(e){
            let ox=e.offsetX;
            let oy=e.offsetY;            
            if(this.history.length){
            	this.cxt.putImageData(this.history[this.history.length-1],0,0);
            }
            this.cxt.lineTo(ox, oy);
            this.cxt.stroke();
         }.bind(this)
         this.canvas.onmouseup=function(){
         	this.history.push(this.cxt.getImageData(0, 0, this.cw, this.ch));
         	this.canvas.onmousemove=null;
         	this.canvas.onmouseup=null;         	
         }.bind(this)
      }.bind(this)
    };
    draw(type,num){
      this.canvas.onmousedown=function(e){
      	this.init();
        let cx=e.offsetX;
        let cy=e.offsetY;
        this.canvas.onmousemove=function(e){
        	let ox=e.offsetX;
        	let oy=e.offsetY;
        	this.cxt.clearRect(0, 0, this.cw, this.ch);
        	if(this.history.length){
              this.cxt.putImageData(this.history[this.history.length-1],0,0);
        	}
        	this.cxt.setLineDash([20,0]);
        	this[type](cx,cy,ox,oy,num);
        	this.cxt[this.style]();
        }.bind(this)
        this.canvas.onmouseup=function(){
        	this.history.push(this.cxt.getImageData(0, 0, this.cw, this.ch));
        	this.canvas.onmousemove=null;
        	this.canvas.onmouseup=null;
        }.bind(this)

      }.bind(this)
    };



    //橡皮擦
    eraser(xpc){
    	console.log(this)
        this.mask.style.display='block';
        this.mask.onmousedown=function(e){
           xpc.style.display='block';
           xpc.style.left=e.offsetX+'px';
           xpc.style.top=e.offsetY+'px';
           this.mask.onmousemove=function(e){
	           	let ox=e.offsetX-15;
	           	let oy=e.offsetY-15;
	           	if(ox>=this.cw-xpc.offsetWidth){
	           		ox=this.cw-xpc.offsetWidth
	           	}
	           	if(ox<=0){
	           		ox=0;
	           	}
	           	if(oy<=0){
	           		oy=0;
	           	}
	           	if(oy>=this.ch-xpc.offsetHeight){
	           		oy=this.ch-xpc.offsetHeight;
	           	}
	           	xpc.style.top=oy+'px';
	           	xpc.style.left=ox+'px';
	           	this.cxt.clearRect(ox, oy, 30, 30);
           }.bind(this)


           this.mask.onmouseup=function(){
	           	console.log(1)
	           	this.history.push(this.cxt.getImageData(0,0,this.cw,this.ch));
	           	xpc.style.display='none';
	           	this.mask.onmousemove=null;
	           	this.mask.onmouseup=null;
           }.bind(this)
           
        }.bind(this)
    };

    ////////////////////////////////////////////////////////////////////////////////
    font(){
      this.mask.style.display='block';
      this.mask.onmousedown=function(e){
      	this.mask.onmousedown=null;
        let fx,fy;
        let divs=document.createElement('div');
        divs.contentEditable=true;
        divs.style.cssText=`
          width:100px;
          height:30px;
          border:1px dashed #0085d0;
          position:absolute;
          left:${e.offsetX}px;
          top:${e.offsetY}px;
          cursor:move;
        `;
        this.mask.appendChild(divs);
        
        //拖拽
        divs.onmousedown=function(e){
	        let left=divs.offsetLeft;
	        let top=divs.offsetTop;
            let cx=e.clientX;
            let cy=e.clientY;
            divs.onmousemove=function(e){
	           	let ox=e.clientX;
	           	let oy=e.clientY;
	           	fx=left+ox-cx;
	           	fy=top+oy-cy;
	           	if(fx>=this.cw-100){
	           		fx=this.cw-100
	           	}
	           	if(fx<=0){
	           		fx=0;
	           	}
	           	divs.style.left=fx+'px';
	           	divs.style.top=fy+'px';
           }
		   divs.onmouseup=function(){
			    divs.onmousemove=null;
			    divs.onmouseup=null;	
		   }
        }
        divs.onblur=function(){
        	let value=divs.innerText;
        	this.mask.removeChild(divs);
        	this.cxt.font='bold 20px sans-serif';
        	this.cxt.fillText(value,fx,fy);
            this.history.push(this.cxt.getImageData,0,0,this.cw,this.ch);
        }.bind(this)

      }.bind(this) 
    };
//// /////////////////////////////////////////////////////////////////////////////////////
	clip(cliper){
	  let that=this;
	  let minx,miny;
	  let w,h;
	  that.mask.style.display='block';
	  that.mask.onmousedown=function(e){
	  	cliper.style.display='block';
	  	that.mask.onmousedown=null;
          let cx=e.offsetX;
          let cy=e.offsetY;
          cliper.style.left=cx+'px';
          cliper.style.top=cy+'px';
	      that.mask.onmousemove=function(e){
             let ox=e.offsetX;
             let oy=e.offsetY;
             minx=ox-cx>0 ? cx:ox;
             miny=oy-cy>0 ? cy:oy;
             w=Math.abs(cx-ox);
             h=Math.abs(cy-oy);
             cliper.style.left=minx+'px';
             cliper.style.top=miny+'px';
             cliper.style.width=w+'px';
             cliper.style.height=h+'px';
  
	      }
	      that.mask.onmouseup=function(){
	      	that.temp=that.cxt.getImageData(minx,miny,w,h);
	      	that.cxt.clearRect(minx, miny, w, h);
            that.history.push(that.cxt.getImageData(0,0,that.cw,that.ch));
            that.cxt.putImageData(that.temp,minx,miny);
	      	that.mask.onmousemove=null;
	      	that.mask.onmouseup=null;
	      	that.drag(minx,miny,cliper);
	      }
	  }

	};
	drag(minx,miny,cliper){
      let that=this;
      that.mask.onmousedown=function(e){
      	let cx=e.offsetX;
      	let cy=e.offsetY;
  	    that.mask.onmousemove=function(e){
           let ox=e.offsetX;
           let oy=e.offsetY;
           let lefts=minx+ox-cx;
           let tops=miny+oy-cy;
           that.cxt.clearRect(0, 0, that.cw, that.ch);
           if(that.history.length){
           	that.cxt.putImageData(that.history[that.history.length-1],0,0);
           }
           cliper.style.left=lefts+'px';
           cliper.style.top=tops+'px';
           console.log(that.temp)
           that.cxt.putImageData(that.temp,lefts,tops);    
  	    }
  	    that.mask.onmouseup=function(){
  	       that.history.push(that.cxt.getImageData(0, 0, that.cw,that.ch));
  	       console.log(that.temp)
  	       that.temp=null;
  	       cliper.style.display='none';
           that.mask.onmousemove=null;
           that.mask.onmouseup=null;
  	    }
      }
	};
///////////////////////////////////////////////////////////
///backon
    backone(){
    	if(!this.history){
    		return;
    	}
    	this.cxt.clearRect(0,0 ,this.cw,this.ch);
        this.history.pop();
        this.cxt.putImageData(this.history[this.history.length-1],0,0);
        //this.history.push(this.cxt.getImageData(0,0,this.cw,this.ch));加不加这句呢
    };
    ///////////////////////////////////////////////////////////////
    ///clear
    clear(){
    	this.cxt.clearRect(0, 0,this.cw,this.ch);
    	this.history.push(this.cxt.getImageData(0,0,this.cw,this.ch));
    };
    ////////////////////////////////////////////////////////////////////////
    ///save
    save(){

    };
}