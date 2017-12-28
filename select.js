Vue.component('select-input',{
    props:['state','title'],
    template:`
        <div class="select-input">
            <input type="text" @focus="focus" v-model="title">
        </div>  
    `,
    methods:{
        focus(){
            this.$emit('costomevent');
        }
    }
})
Vue.component('select-list',{
    props:['data','state'],
    template:`
        <div class="select-list" v-show="state==true">
            <li v-for="item in data" @click="click(item.title)">{{item.title}}</li>
        </div>
    `,
    methods:{
        click(val){
           this.$emit('costomevent',val)
        }
    }
})