
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
function $(select){
	var s=select.charAt(0);
	if(s=='.'){
		return getClass(select.substring(1),document);
	}else if(s=='#'){
        return document.getElementById(select.substring(1));
	}

}