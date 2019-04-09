!function () {
    var view = document.getElementsByClassName('isSub')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            view = this.view
            for (var i = 0; i < view.length; i++) {
                view[i].onmouseenter = function (x) {
                    x.target.classList.add('active')
                }
                view[i].onmouseleave = function (x) {
                    x.target.classList.remove('active')
                }
            }
        }
    }
    controller.init(view)

}.call()