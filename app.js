new Vue({
    el:'.app',
    data:{
        datas:[
            {
                title:11111,
                id:1
            },
            {
                title:22222,
                id:2
            },
            {
                title:33333,
                id:3
            }

        ],
        state:false,
        title:'',
    },
    methods:{
        aa(){
            this.state=true;
        },
        bb(val){
            this.title=val;
            this.state=false;
        }
    }

})