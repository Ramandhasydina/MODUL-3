Vue.component('showform', {
    template: '#show-form',
    data(){
        return {
            data: { name: '', email: ''}
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.name = "";
            this.data.email = "";
        }
    }
})

Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data: {
        biodata: {}
    },
    methods: {
        getData: function (value) {
            this.biodata = {
                name : value.name,
                email : value.email
            }
        }
    }
})
