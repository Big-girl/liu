/*
* @Author: surpe
* @Date:   2017-09-15 17:10:41
* @Last Modified by:   surpe
* @Last Modified time: 2017-09-16 13:12:19
*/
let time=document.getElementById('time');
setInterval(function(){
	if(time.innerText>0){
		time.innerText--;
	}
	else{
		location.replace('file:///F:/%E4%BC%98%E9%80%B8%E5%AE%A2/Javascript/9.15%20%E7%99%BB%E9%99%86/login.html')
	}
}, 1000)