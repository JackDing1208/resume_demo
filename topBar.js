!function () {
    var view = document.querySelector('.fixtop')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            var view = this.view
            window.addEventListener("scroll", () => {
                if (window.scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
        },
        active: function () {
            view.classList.add('moving')
        },
        deactive: function () {
            view.classList.remove('moving')
        }
    }
    controller.init(view) //  一个对象调用函数，那么函数里的默认就是这个对象

}.call()
