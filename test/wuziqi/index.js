$(function(){
    let hei={};
    let bai={};
    let kongbai={};
    let isAI=false;
    let flag=true;
    $('.ren').on('click',function(){
        isAI=false;
    })
    $('.ji').on('click',function(){
        isAI=true;
    })
    for(let i=0;i<15;i++){
        $('<div>').appendTo('.qipan').addClass('hang');
        $('<span>').appendTo('.qipan').addClass('shu');
        for(let j=0;j<15;j++){
            kongbai[`${i}_${j}`]={x:i,y:j};
            $('<li>').appendTo('.qipan').addClass('qizi').attr('id',i+"_"+j).data('pos',{x:i,y:j});
        }
    }

    $('.qipan>.qizi').on('click',function(){
        if(isAI){
            if($(this).hasClass('hei') || $(this).hasClass('bai')){
                return
            }
            $(this).addClass('hei');
            let data=$(this).data('pos');
            hei[`${data.x}_${data.y}`]=true;
            delete kongbai[`${data.x}_${data.y}`];
            if(panduan(data,hei)>=5){
                alert('黑棋胜利');
                $('.qipan>.qizi').off();
            }
            
            let pos=ai();
            $(`#${pos.x}_${pos.y}`).addClass('bai');
            bai[`${pos.x}_${pos.y}`]=true;
            delete kongbai[`${pos.x}_${pos.y}`];
            if(panduan(pos,bai)>=5){
                alert('白棋胜利');
                $('.qipan>.qizi').off();
            }
            
        }else{
            if(flag){
                if($(this).hasClass('hei') || $(this).hasClass('bai')){
                    return
                }
                $(this).addClass('hei');
                let data=$(this).data('pos');
                hei[`${data.x}_${data.y}`]=true;
                delete kongbai[`${data.x}_${data.y}`];
                if(panduan(data,hei)>=5){
                    alert('黑棋胜利');
                    $('.qipan>.qizi').off();
                }
            }else{
                if($(this).hasClass('hei') || $(this).hasClass('bai')){
                    return
                }
                $(this).addClass('bai');
                let data=$(this).data('pos');
                hei[`${data.x}_${data.y}`]=true;
                delete kongbai[`${data.x}_${data.y}`];
                if(panduan(data,bai)>=5){
                    alert('白棋胜利');
                    $('.qipan>.qizi').off();
                }
            }
            flag=!flag;
        }
        
    })

    function ai(){
        let max= -Infinity,max1=-Infinity;
        let pos=null,pos1=null;
        for(let i in kongbai){
           let score = panduan(kongbai[i],hei);
           if(score>max){
            max=score;
            pos=kongbai[i];
           }
        }
        for(let i in kongbai){
            let score=panduan(kongbai[i],bai);
            if(score>max1){
                max1=score;
                pos1=kongbai[i];
            }
        }
        return max>max1?pos:pos1;
    }


    function panduan(pos,obj){
        let rows=1,cols=1,zx=1,yx=1;
        let i=pos.x,j=pos.y+1;
        while(obj[i+'_'+j]){
           rows++;
           j++;
        }
        j=pos.y-1;
        while(obj[i+'_'+j]){
            rows++;
            j--;
        }
    
        i=pos.x+1,j=pos.y;
        while(obj[i+'_'+j]){
            cols++;
            i++;
        }
        i=pos.x-1;
        while(obj[i+'_'+j]){
            cols++;
            i--;
        }
    
        i=pos.x+1,j=pos.y+1;
        while(obj[i+'_'+j]){
            yx++;
            i++;
            j++;
        }
        i=pos.x-1;j=pos.y-1
        while(obj[i+'_'+j]){
            yx++;
            i--;
            j--;
        }
    
        i=pos.x-1,j=pos.y+1;
        while(obj[i+'_'+j]){
            zx++;
            i--;
            j++;
        }
        i=pos.x+1;j=pos.y-1;
        while(obj[i+'_'+j]){
            zx++;
            i++;
            j--;
        }
        return Math.max(rows,cols,zx,yx);
    
    }  
})