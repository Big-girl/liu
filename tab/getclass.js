window.onload=function(){
		function getClass(classname,ranger){
		ranger=ranger?ranger:document;
		if(document.getElementsByClassName){
			return  ranger.getElementsByClassName(classname);
		}
		var newarr=[];
		var alls=ranger.getElementsByTagName('*');
		for(var i=0;i<alls.length;i++){
			if(checkClass(alls[i].className,classname)){
				newarr.push(alls[i]);
			}
			
		}
		return newarr;
	}
	function checkClass(className,classname){
		var arr=className.split(' ');
		for(var i=0;i<all.length;i++){
			if(arr[i]==classname){
				return true;
			}
		}
		return false;
	}
var box=getClass('box',document);
    box[0].innerHTML='这是设置的内容';
    console.log(box);

        //$函数
		function $(select){
			var s=select.charAt(0);
			if(s=='.'){
				return getClass(select.substring(1),document);
			}else if(s=='#'){
		        return document.getElementById(select.substring(1));
			}

		}

	var box=$('.box')[0];
	//box.innerHTML='这是select的classname';
	// var one=$('#one');
	// one.innerHTML='这是select的idname';

	// 	var box=getClass('box',document);
	//     box[0].innerHTML='这是设置的内容';
	//     console.log(box);
	let one=document.getElementById('one');
    console.log(one);
    console.log(document.getElementsByTagName('*'));

}
