new Vue({
    el: '#vue_app',
    data: {
        db: database,
        i: 0,
        details: false,
        page: 0,
        search: ''
    },
    methods: {
        iUpdate: function(index, bool) {
            this.i = index
            this.details = bool
        },
        pageUpdate: function(e) {
            this.page = e
        },
        pageInc: function() {
            if (this.page < this.dbPages.length - 1) {
                this.page++
            }
        },
        pageDec: function() {
            if (this.page > 0) {
                this.page--
            }
        }
    },
    computed: {
        actives: function() {
            let activeMembers = []

            this.db.forEach((m) => {
                if (m.isActive) {
                    activeMembers.push(m)
                }
            })
            return activeMembers.length
        },
        ageAverage: function() {
            let average = 0
            this.db.forEach((m) => {
                average += m.age
            })

            return parseInt(average / this.db.length)
        },
        dbFilter: function () {
            this.page = 0
            let arr = []
            this.db.forEach((e)=> {
                if(e.name.toLowerCase().includes(this.search.toLowerCase())) {
                    arr.push(e)
                }
            })
            return arr
        },
        dbPages: function() {
            let pages = []
            const N = 20
            for (let i = 0; i < (this.dbFilter.length / N); i++) {
                let arr = []
                for (let j = 0; j < N; j++) {
                    let index = j + (N * i)
                    if (this.dbFilter[index]) {
                        arr.push(this.dbFilter[index])
                    }
                }
                pages.push(arr)
            }
            return pages
        },
        pageBtns: function() {
            let btns = []
            for(let i = 0; i < 5; i++) {
                
                let sub
                switch(this.page) {
                    case 0:
                        sub = +1
                        break
                    case 1:
                        sub = 0
                        break
                    case 2:
                        sub = -1
                        break
                    case this.dbPages.length - 3:
                        sub = -3
                        break
                    case this.dbPages.length - 2:
                        sub = -4
                        break
                    case this.dbPages.length - 1:
                        sub = -5
                        break
                    default:
                        sub = -2
                }
                let cur = this.page + i + sub
                if(cur > 0 && cur < this.dbPages.length -1) {
                    btns.push(cur)
                } 
            }
            return btns
        }
    }
})