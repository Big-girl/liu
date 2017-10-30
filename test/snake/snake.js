/*
* @Author: surpe
* @Date:   2017-09-29 15:41:29
* @Last Modified by:   surpe
* @Last Modified time: 2017-09-30 00:25:41
*/
//属性：蛇   移动的棋盘
//划线
//化蛇
function Snake(){
	this.snake=['10_0','10_1','10_2'];
	this.sence=document.querySelector('.sence');
	this.direction=40;
	this.flag={'0_0':true,'1_0':true,'2_0':true}
	this.food='';
}
Snake.prototype={
	start:function(){
      this.drawline();
      this.drawsnake();
      this.move();
      this.key();
      this.dropFood();
	},
	drawline:function(){
       for(let i=0;i<20;i++){
       	for(let j=0;j<20;j++){
       		this.sence.innerHTML+=`
       		<div class='box' id='${i}_${j}'></div>
       		`;
       	}
       }
	},
	drawsnake:function(){
      this.snake.forEach(element=>{
      	let arr=element.split('_');
      	document.getElementById(`${arr[0]}_${arr[1]}`).classList.add('hot');	
      })
	},
	move:function(){
		//加头  去尾
		//先算新头的坐标   新的根据旧的算
		this.t=setInterval(function(){

			let oldt=this.snake[this.snake.length-1];
	        let arr=oldt.split('_');
	        let newt='';
	        	if(this.direction==37){
                    newt=`${arr[0]*1}_${arr[1]*1-1}`;
	        	}else if(this.direction==38){
                    newt=`${arr[0]*1-1}_${arr[1]*1}`;
	        	}
	        	else if(this.direction==39){
	        		newt=`${arr[0]*1}_${arr[1]*1+1}`;
	        	}
	        	else if(this.direction==40){
	        		newt=`${arr[0]*1+1}_${arr[1]*1}`;
	        	}
	        	let newarr=newt.split('_');
	        	if(newarr[0]>19||newarr[0]<0||newarr[1]>19||newarr[1]<0){
	        		alert('game over');
	        		clearInterval(this.t);
                    return;
	        	}
	        	if(this.flag[newt]){
	        		alert('哎呀，碰到自己了');
	        		clearInterval(this.t);
	        		return;
	        	}
	        if(newt==this.food){
                    newt=this.food;
                    this.snake.push(newt);
			        this.flag[newt]=true;
			        this.drawsnake();
			        document.getElementById(this.food).classList.remove('food');
			        this.food='';
			        this.dropFood();
	          
	        }else{
	        	this.snake.push(newt);
		        this.flag[newt]=true;
		        this.drawsnake();
		        let weiba=this.snake.shift();
		        delete this.flag[weiba];
		        document.getElementById(weiba).classList.remove('hot');
	        }
	        

		}.bind(this),300)		
	},
	key:function(){
		document.onkeydown=function(e){
		   if(Math.abs(e.keyCode-this.direction)==2){
		   	return;
		   }
		   this.direction=e.keyCode;		   
		}.bind(this)	
	},
	dropFood:function(){
		let x=Math.floor(Math.random()*20);
		let y=Math.floor(Math.random()*20);       
        do{
            x=Math.floor(Math.random()*20);
            y=Math.floor(Math.random()*20);
        }while(this.flag[`${x}_${y}`])
        this.food=`${x}_${y}`;
        document.getElementById(this.food).classList.add('food');
	},

}