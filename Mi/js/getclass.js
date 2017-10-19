
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
///////////////////////////////////////////////////////////////////
function $(select){
	var s=select.charAt(0);
	if(s=='.'){
		return getClass(select.substring(1),document);
	}else if(s=='#'){
        return document.getElementById(select.substring(1));
	}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
		return document.getElementsByTagName(select);
	}

}
// function children(parent){
// 	let newarr;
// 	let childs=parent.childNodes;
// 	childs.forEach(element=>{
// 		if(element.nodeType==1){
// 			newarr.push(element);
// 		}
// 	})
// 	return newarr;
// }
// ////////////////////////////////////////////////////////////////////
function children(parent){
	let newarr=[];
	let childs=parent.childNodes;
	let arr=Array.from(childs);
	newarr=arr.filter(element=>element.nodeType==1);
	return newarr;
}
function firstElement(parent){
   return children(parent)[0];
}
function lastElement(parent){
	//return children(parent)[length-1];
	return children(parent).pop();
}
///////////////////////////////////////////////////////////////////////
///通过for遍历得到的后面的元素
function next(element,tagname){
	let parent=element.parentNode;
	let childAll=children(parent);
	let index;
	for(let i=0;i<childAll.length;i++){
		if(childAll[i]==element){
		    index=i;
		    break;
		}
	}
	let nextAll=childAll.slice(index+1);
	for(let i=0;i<nextAll.length;i++){
		if(nextAll[i].nodeName==tagname.toUpperCase()){
			return nextAll[i];
		}
	}
    return null;
}
////////////////////////////////////////////////////////////////
///通过while得到后面的元素
		function next1(element,tagname){
			let next=element.nextElementSibling;
			console.log(next);
			if(next){
				while(next.nodeName!=tagname.toUpperCase()){
					next=next.nextElementSibling;
					if(next==null){
						return null;
					}
				}
               return next;
			}else{
				return null;
			}
		
		}
////////////////////////////////////////////////////////////////
function nextAll(element,tagname){
	let parent=element.parentNode;
	let childAll=children(parent);
	let index;
	for(let i=0;i<childAll.length;i++){
		if(childAll[i]==element){
			index=i;
			break;
		}
	}
	let nextAll=childAll.slice(index+1);
	if(nextAll.length==0){
		return null;
	}
    return nextAll;
}
/////////////////////////////////////////////////////////////////
function nextAll1(element,tagname){
	let newarr=[];
   let next=element.nextElementSibling;
   if(next){     
      while(next!=null){
      	if(next.nodeName==tagname.toUpperCase()){
      		newarr.push(next);
      	}      	
      	next=next.nextElementSibling;
      }
      return newarr;
   }else{
     return null;
   }
}
///////////////////////////////////////////////////////////////////
///父级中指定标签名的数组
function closed(element,tagname){
	let newarr=[];
	if(element.nodeName=='BODY'||element.nodeName=='HTML'){
		return ;
	}
	let parent=element.parentNode;
	if(parent.nodeName=='BODY'){
		return null;
	}
    while(parent.nodeName!='BODY'){
    	if(parent.nodeName==tagname.toUpperCase()){
    		newarr.push(parent);
    	}
    	element=parent;
    	parent=element.parentNode;
    }
    return newarr;
}
///////////////////////////////////////////////////////////////////////////
///所有的父级
function closedAll(element){
	let newarr=[];
	if(element.nodeName=='BODY'||element.nodeName=='HTML'){
		return ;
	}
	let parent=element.parentNode;
	if(parent.nodeName=='BODY'){
		return null;
	}
    while(parent.nodeName!='BODY'){   	
    	newarr.push(parent);
    	element=parent;
    	parent=element.parentNode;
    }
    return newarr;
}
////////////////////////////////////////////////////////////////////////////
///在父级元素里插入一个元素
HTMLElement.prototype.prependTo=function(element){
	element.appendChild(this);
}
///////////////////////////////////////////////////////////////////////////////
///在一个元素的后面插入一个元素
HTMLElement.prototype.insertAfter=function(element){
	let parent=this.parentNode;
	let next=this.nextElementSibling;
	if(next){
		parent.insertBefore(element,next);
	}else{
		parent.appendChild(element);
	}
}
///////////////////////////////////////////////////////////////////////////////
///将创建的元素插入到最前面   谁调用插入到谁的同级的最前面
HTMLElement.prototype.prependChild=function(element){
   let first=this.firstElementChild;
   if(first){
      this.insertBefore(element,first);
   }else{
      this.appendChild(element);
   }
}
/////////////////////////////////////////////////////////////////////////////////
///去掉元素里的内容
HTMLElement.prototype.empty=function(){
   this.innerHTML='';
}