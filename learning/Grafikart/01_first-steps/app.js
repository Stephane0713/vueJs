// create a new vue object
new Vue({
    // set the html element on which vue is active
    el: "#app",
    // data stocks the variables we use on our element
    data: {
        message: "Allo ?",
        link: "#",
        success: true,
        closed: false,
        color: true,
        cls: 'is-success',
        list: ['Hollow Knight', 'Risk of Rain 2', 'Dark souls', 'Monster Hunter World', 'Path of Exile']
    }, 
    // methods stocks the function we use on our element
    methods: {
        close: function() {
            // 'this' refer to the Vue object
            this.closed = true
        }
    }
})