/*
* @Author: surpe
* @Date:   2017-10-24 23:29:52
* @Last Modified by:   surpe
* @Last Modified time: 2017-10-24 23:41:10
*/
$(function(){
	let img=$('.egg-content>img');
	console.log(img)
	img.on('click',function(){
		location.replace('details.html');
	})
})