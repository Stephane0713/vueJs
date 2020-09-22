new Vue({
    el: "#app",
    
    data: {
        firstName: "Jean",
        lastName: "Tour",
        look: ''
    },
    // Works like methods except that it only uses the functions concerned by the variables changed
    computed: {
        fullName: {
            // You need to set a 'get' and 'set' for it to work both ways
            get: function() {
                return this.firstName + " " + this.lastName
            },
            set: function(value) {
                let parts = value.split(" ")
                this.firstName = parts[0]
                this.lastName = parts[1]
            }
        }
    },
    // Look for any changes applied to a variables and updates it
    watch: {
        look: function(value) {
            console.log(value)
        }
    }
})