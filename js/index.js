const app = Vue.createApp({
    data() {
        return {
            query: '',
            data : [],
            found: []
        }
    },
    methods: {
        search: _.debounce(function() {
            let q = this.query.toLowerCase();
            this.found = this.data.filter((d) => {
                if(Array.isArray(d)) {
                    return d[0].toString().toLowerCase().includes(q)
                        || d[1].toString().toLowerCase().includes(q)
                        || d[2].toString().toLowerCase().includes(q)
                        || d[3].toString().toLowerCase().includes(q)
                        || d[4].toString().toLowerCase().includes(q)
                        || d[5].toString().toLowerCase().includes(q)
                        || d[6].toString().toLowerCase().includes(q)
                        || d[7].toString().toLowerCase().includes(q)
                }
                return false;
            });
        }, 300)
    },
    created() {
        this.data  = JSON.parse(atob(encoded));
        this.found = this.data;
    }
});

app.mount('#app');
