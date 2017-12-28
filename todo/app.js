Vue.directive('focus',{
    inserted: function (val1,val2) {
        val1.focus();
    },
})
new Vue({
    el:'.app',
    data:{
        all:[],
    }
})