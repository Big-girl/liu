/*
* @Author: surpe
* @Date:   2017-10-27 15:59:07
* @Last Modified by:   surpe
* @Last Modified time: 2017-10-29 13:05:02
*/
$(function(){
	let submit=$('.submit');
	let user=$('.mes-user');
	let emil=$('.mes-emil');
	let con=$('.mes-con');
	console.log(submit)
	let mesArea=$('.mesarea-box')
	submit.on('click',function(){
		$('<li>').prependTo(mesArea).html(function(index,value){
			return value=`
                <div class="mes-left">
					<img src="image/about9.jpg" alt="">
				</div>
				<div class="mes-right">
					<span>${user.val()}</span>
					<span>${emil.val()}</span>
					<p>${con.val()}</p>
				</div>
			`;
		});
        user.val('');
        emil.val('');
        con.val('');
	})
})