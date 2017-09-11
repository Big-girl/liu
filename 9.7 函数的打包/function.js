/*
* @Author: surpe
* @Date:   2017-09-09 15:28:34
* @Last Modified by:   surpe
* @Last Modified time: 2017-09-11 11:18:25
*/
//实现任意数组的升序和降序,默认的几种方法
function sort(arr,type='<'){
   //默认的第一种 分支
   	  // if(type==undefined){
   	  // 	type='<';
   	  // }
  //默认的第二中  三木运算
      // type= type==undefined?'<':type;
  //默认的第三种 逻辑或
       // type=type||'>'
  //默认的第四种 直接改
      if(type=='<'){
      	sortUp(arr);
      }
      else if(type=='>'){
      	sortDown(arr);
      }
   }

//降序
function sortDown(arr){
	for(i=0;i<arr.length;i++){
		for(j=i+1;j<arr.length;j++){
			if(arr[j]>arr[i]){
				var temp=arr[i];
				arr[i]=arr[j];
				arr[j]=temp;
			}
		}
	}
	console.log(arr);
};
//升序
function sortUp(arr){
	for(var i=0;i<arr.length;i++){
		for(var j=i+1;j<arr.length;j++){
			if(arr[j]<arr[i]){
				var temp=arr[i];
				arr[i]=arr[j];
				arr[j]=temp;
			}
		}
	}
	console.log(arr);
};
//往任意数组添加任意数
function push(arr,...value){
  for(i=0;i<value.length;i++){
  	arr[arr.length]=value[i];
  }
  console.log(arr);
}

function exist(arr,value){
	if(!(typeof arr=='object' && arguments.length>1)){
     return '输入错误';
	}
	for(var i=0;i<arr.length;i++){
		if(arr[i]==value){
			return true;
		}
	}
return false;
}
//某一个函数中存在某一个数，并返回这个数，判断一下参数的条件
function exist(arr,value){
	   		if(!(typeof arr=='object' && arguments.length>1)){
                 return '输入错误';
	   		}
	   		for(var i=0;i<arr.length;i++){
	   			if(arr[i]==value){
	   				return true;
	   			}
	   		}
            return false;
	   	}
//将数组转换为字符串
function transform(arr,str){
	       	var result='';
	       	for(i=0;i<arr.length;i++){
	       		if(i<arr.length-1){
	       	       result+=arr[i]+str;
	           }else{
	           	   result+=arr[i];
	           }
	         }
	          return result;
	       }
//函数作为参数的四则运算	
function aa(num1,num2){
	      	return num1+num2;
	      } 
function bb(num1,num2){
	      	return num1-num2;
	      } 
function cc(num1,num2){
	return num1*num2;
} 
function match(num1,num2,fn){
   return fn(num1,num2)
} 
	      alert(match(1,2,aa));	
	      alert(match(1,2,bb));
	      alert(match(1,2,cc));
//找出任意数组中指定的数第一次出现的位置  
function indexof(arr,value){
	     	for(i=0;i<arr.length;i++){
	     		if(arr[i]==value){
	     			return i;
	     		}
	     	}
	     	return -1;
	     }
//找出任意数组指定的数最后一次出现的位置
function lastIndexof(arr,value){
	     	for(i=arr.length-1;i>=0;i--){
	     		if(arr[i]==value){
	     			return i;
	     		}
	     	}
	     	return -1;
	     } 	
//将一个数组的所有的元素反过来存放
function reverse(arr){
	     	var newarr=[];
	     	for(var i=arr.length-1;i>=0;i--){
              push(newarr,arr[i]);
	     	}
	     	return newarr;
	     }
//往任意数组的后面添加元素
function push(arr,...rest){
	     	for(var i=0;i<rest.length;i++){
              arr[arr.length]=rest[i];
	     	}
	     }
//万能的删除
function spliceCancle(arr,pos,num){
	     	var newarr=[];
	     	for(var i=0;i<arr.length;i++){
	     		if(!(i>=pos&&i<pos+num)){
                  push(newarr,arr[i]);
	     		}	
	     	}
	     	return newarr;
	     }
//万能的添加
//pos前面的元素
//添加的元素
//pos以及pos后面的元素  newarr中的元素直接加就可以，pos以及添加的元素的长度直接往里放就行	     
function spliceAdd(arr,pos,...add){
	     	var newarr=[];
	     	for(var i=0;i<pos;i++){
	     		push(newarr,arr[i]);
	     	}
	        for(var i=0;i<add.length;i++){
                push(newarr,add[i]);
	     	}
	     	for(var i=pos;i<arr.length;i++){
	     		push(newarr,arr[i]);
	     	}
	     	return newarr;
	     }
//万能的添加和删除，先删除，num后面有值得情况下进行添加，在删除之后的新数组中进行添加	     
function Splice(arr,pos,num,...add){
	        var newarr=spliceCancle(arr,pos,num);
	        if(add.length>0){
	        	newarr=spliceAdd(newarr,pos,...add);
	        }
	        return newarr;
	     }
//映射	     
function map(arr,fn){
          	var newarr=[];
          	for(var i=0;i<arr.length;i++){
                newarr[newarr.length]=fn(arr[i]);
          	}
          	return newarr;
          }
	     
function filter(arr,fn){
           var newarr=[];
           for(var i=0;i<arr.length;i++){
           	if(fn(arr[i])==true)
            push(newarr,arr[i]);
           }
           return newarr;
         }
//some
function some(arr,fn){
	    	for(i=0;i<arr.length;i++){
	    		if(fn(arr[i])){
	    			return true;
	    		}
	    	}
	    	return false;
	    } 
//every
function every(arr,fn){
    	for(i=0;i<arr.length;i++){
    		if(!fn(arr[i])){
    			return false;
    		}
    	}
    	return ture;
    }	                    	     	     	     	                     	     	     	     	     
// 深浅拷贝加上递归函数
function copy(arr){
    	var newarr=[];
    	for(var i=0;i<arr.length;i++){
    		if(typeof arr[i]=='object'){
    			newarr[i]=copy(arr[i]);
    		}else{
    			newarr[i]=arr[i];
    		}  
    	}
    	return newarr;
    }
//递归函数
//闭包函数
//箭头函数