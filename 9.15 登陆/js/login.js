/*
* @Author: surpe
* @Date:   2017-09-15 17:10:25
* @Last Modified by:   surpe
* @Last Modified time: 2017-09-15 17:58:45
*/
let user=document.getElementById('user');
let pass=document.getElementById('pass');
let but=document.getElementById('but');
// let u=user.value.trim();
// let p=pass.value.trim();
but.onclick=function(){
    if(user.value.trim()=='liu'&&pass.value.trim()=='123'){
	alert('succes');
    }
    	location.replace('file:///F:/%E4%BC%98%E9%80%B8%E5%AE%A2/Javascript/9.15%20%E7%99%BB%E9%99%86/error.html');
    
}

