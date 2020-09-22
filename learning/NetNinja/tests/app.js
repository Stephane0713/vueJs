Vue.component('test', {
    template: '<p>hello {{name}} </p>',
    data: function () {
        return {
            name: 'test'
        }

    }
})

new Vue({
    el: "#vue-app",
    data: {
        age: '31',
        x: 0,
        y: 0
    },
    methods: {
        add: function (inc) {
            this.age += inc
        },
        subtract: function (dec) {
            this.age -= dec
        },
        updateXY: function (e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})