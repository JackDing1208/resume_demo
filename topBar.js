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
            window.addEventListener("scroll", function () {
                if (window.scrollY > 0) {
                    view.classList.add('moving')
                } else {
                    view.classList.remove('moving')
                }
            })
        }
    }
    controller.init(view) //  一个对象调用函数，那么函数里的默认就是这个对象
}.call()
