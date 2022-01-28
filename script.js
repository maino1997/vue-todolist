console.log('ok', Vue);

Vue.config.devtools = true;

var app = new Vue({
    el: "#root",
    data: {
        userText: '',
        list: [

        ],
    },

    methods: {
        getText() {
            const newObject = {
                text: this.userText,
            }

            console.log(this.list);

            this.list.push(newObject);
        },
    },
});