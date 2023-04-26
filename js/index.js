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
                    return d[0].toLowerCase().includes(q)
                        || d[1].toLowerCase().includes(q)
                        || d[2].toLowerCase().includes(q)
                        || d[3].toLowerCase().includes(q)
                        || d[4].toLowerCase().includes(q)
                        || d[5].toLowerCase().includes(q)
                        || d[6].toLowerCase().includes(q)
                        || d[7].toLowerCase().includes(q)
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
