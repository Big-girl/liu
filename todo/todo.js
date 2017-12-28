Vue.component('todo',{
    template:`
    <div class="box">
        <input type="text" placeholder="请输入事项" v-model="con" @keyup.13="add" v-focus>
        <div class="btns">
            <span @click="changeStatues('all')" :class="{check:statues=='all'}">全部</span>
            <span @click="changeStatues('1')" :class="{check:statues=='1'}">已经完成</span>
            <span @click="changeStatues('0')" :class="{check:statues=='0'}">未完成</span>
        </div>
        <ul class="list">
                <li v-for="item in filter" v-if="item.edit==false" @dblclick="edit(item)">
                    <span class="opt" @click="changeState(item)" :class="{red:item.state==1}"></span>
                    <p>{{item.title}}</p>
                    <span class="del" @click="del(item.id)">删除</span>
                </li>
                <li v-else="item.edit==true">
                    <input type="text" v-model="item.title" @blur="aa(item)">
                </li>
            <div v-show="filter.length==0">没有数据</div>
        </ul>
    </div>
    `,
    data(){
        return {
            statues:'all',
            all:localStorage.todo?JSON.parse(localStorage.todo):[],
            con:'',
        }
    },
    computed:{
        filter(){
            return this.all.filter(ele=>{
                if(this.statues=='all'){
                    return ele;
                }else{
                    if(ele.state==this.statues){
                        return ele;
                    }
                }
            })
        }
    },
    methods:{
        add(){
            var obj={};
            obj.title=this.con;
            if(!this.con){
                alert('请输入内容');
                return;
            }
            obj.id=Math.random();
            obj.state=0;
            obj.edit=false;
            this.all.push(obj);
            this.con='';
            localStorage.todo=JSON.stringify(this.all)
        },
        changeStatues(statues){
            this.statues=statues;
        },
        changeState(item){
            item.state=!item.state;
            localStorage.todo=JSON.stringify(this.all)
        },
        del(id){
            this.all=this.all.filter(ele=>ele.id!=id);
            localStorage.todo=JSON.stringify(this.all)
        },
        edit(item){
            item.edit=true;
            localStorage.todo=JSON.stringify(this.all)
        },
        aa(item){
            item.edit=false;
            localStorage.todo=JSON.stringify(this.all)
        }
    }
})