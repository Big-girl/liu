/*
* @Author: surpe
* @Date:   2017-10-24 23:43:12
* @Last Modified by:   surpe
* @Last Modified time: 2017-10-27 14:50:51
*/
$(function(){

	let img=$('.con>img')
	let height=img.eq(0).height()
	let txt=$('.con-txt');
	let txt1=$('.con-txt>.con-txt1')
	console.log(txt1)
	console.log(txt)
	console.log(img)
	txt.height(height-2);
	txt1.height(height*0.7)

	$(window).on('resize',function(){
		height=img.eq(0).height()
		txt.height(height-2);
		txt1.height(height*0.7)
	})




	let con=$('.con:nth-child(2n)');
	console.log(con)
    for(let i=0;i<con.length;i++){
    	let spans=$(con[i]).find('span');
    	console.log($(con[i]))
    	spans.eq(0).animate({width:'100%'},1000)
		spans.eq(1).animate({height:'100%'},1000)
		spans.eq(2).animate({width:'100%'},1000)
		spans.eq(3).animate({height:'100%'},1000)

    }
	
})