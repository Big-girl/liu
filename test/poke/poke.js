/*
* @Author: surpe
* @Date:   2017-10-17 16:53:49
* @Last Modified by:   surpe
* @Last Modified time: 2017-10-29 15:21:29
*/
$(function(){
	let desk=$('.desk');
	let color=['d','h','c','s'];
	let poke=[];
	let flag={};
	let btnr=$('.btnr');
	let btnl=$('.btnl');
	while(poke.length<52){
		let hua=color[Math.floor(Math.random()*color.length)];
		let num=Math.floor(Math.random()*13+1);
		if(!flag[`${hua}_${num}`]){
			poke.push({hua,num});
			flag[`${hua}_${num}`]=true;
		}
	}
	let first=null;
	let index=0;
	for(let i=0;i<7;i++){
		for(let j=0;j<=i;j++){
			let left=295-50*i+110*j;
			let top=50*i;
			$('<div>').addClass('poke').appendTo(desk)
			.css('background-image',`url(img/${poke[index].num}${poke[index].hua}.png)`)
			.delay(index*20).animate({left:`${left}`,top:`${top}`}).attr('id',`${i}_${j}`)
			.data('num',`${poke[index].num}`).addClass('box');
            index++;
		}
		
	}
	for(;index<poke.length;index++){
		$('<div>').addClass('poke').appendTo(desk)
		.css('background-image',`url(img/${poke[index].num}${poke[index].hua}.png)`)
			.delay(index*20).animate({left:0,top:500}).attr('id',`100_100`)
			.data('num',`${poke[index].num}`).addClass('zuo');
	}
	// desk.on('click','.poke',function(e){
	// 	let index1,index2;
	// 	let element=e.target;
	// 	let id=$(element).attr('id');
 //        let idarr=id.split('_');
	//     let b1=$(`#${idarr[0]*1+1}_${idarr[1]}`)[0];
	//     let b2=$(`#${idarr[0]*1+1}_${idarr[1]*1+1}`)[0];
	//     if(b1==undefined && b2==undefined){
	//     	if(!first){
	//            first=element;
	//            $(element).animate({top:'-=10'}).css('box-shadow','0 0 3px 3px #0085d0');
	// 		}else{
	// 			index1=$(first).index();
	// 			index2=$(element).index();
	// 			if($(first).attr('id')==$(element).attr('id')){
	//             $(element).animate({top:'+=10'}).css('box-shadow','none');	            
	//             first=null;
	// 			}else{
	// 				$(element).animate({top:'-=10'}).css('box-shadow','0 0 3px 3px #0085d0');
	// 				if(poke[index1].num+poke[index2].num==13){
	// 					$(element).animate({top:-160,left:-200}).css('box-shadow','none')
	// 					$(first).animate({top:-160,left:-200}).css('box-shadow','none');
	// 					desk[0].removeChild(first)
	// 					desk[0].removeChild(element)
	// 					first=null;


	// 				}else{
	// 					$(element).animate({top:'+=10'}).css('box-shadow','none')
	// 					$(first).animate({top:'+=10'}).css('box-shadow','none')
	// 					first=null;
	// 				}					
	// 			}      

	// 		}
	//     }
	// })
	desk.on('click','.poke',function(e){
       let element=$(e.target);
       console.log(typeof element.data('num'))      
       let ids=element.attr('id').split('_');
       let element1=$(`#${ids[0]*1+1}_${ids[1]*1}`);
       let element2=$(`#${ids[0]*1+1}_${ids[1]*1+1}`);
       if(element1.length || element2.length){
       	return;
       }
       element.toggleClass('active');
       if(element.hasClass('active')){
       	element.animate({top:'-=10'});
       }else{
       	element.animate({top:'+=10'});
       }
       if(!first){
       	first=element;
       }else{
          if(first.data('num')*1+element.data('num')*1==14){
          	$('.active').animate({left:0,top:0},function(){
          		$(this).remove();
          	})
          }else{
          	$('.active').animate({top:'+=10'},function(){
          		$(this).removeClass('active');
          	})
          }
          first=null;
       }
	})
	    let zindex=0;
        btnr.on('click',function(){   	
        	if(!$('.zuo').length){
        		return;
        	}
   		    $('.zuo').last().animate({left:600}).removeClass('zuo')
   		    .addClass('you').css({zIndex:zindex++});  	
        })
       btnl.on('click',function(){  
            if(!$('.you').length){
        		return;
        	} 	
   		    $('.you').first().animate({left:0}).removeClass('you')
   		    .addClass('zuo').css({zIndex:zindex++});  	
        })

})
