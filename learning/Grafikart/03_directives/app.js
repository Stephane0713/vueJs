
// Create a custom directive that take a string as 1st arg and an object as its 2nd
Vue.directive('salut', {
    bind: function(el, binding, vnode) {
        console.log(el, binding)
    }
})

new Vue({
    el: "#app",
    data: {
        message: ""
    },
    methods: {
        demo: function() {
            alert("Prevented")
        }
    }
})