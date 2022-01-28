console.log('ok', Vue);

Vue.config.devtools = true;

var app = new Vue({
    el: "#root",
    data: {
        userText: '',
        done: false,
        list: [
            {
                text: 'Inizia a fare la spesa',
                done: true,
            },
        ],
    },

    methods: {
        getText() {
            const newObject = {
                text: this.userText,
                done: false,
            }

            console.log(this.list);

            this.list.push(newObject);
        },

        toggleDone(index) {
            this.list[index].done = !this.list[index].done;
            console.log(this.list[index].done);
        }
    },
});