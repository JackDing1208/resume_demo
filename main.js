!function () {

    var view = document.querySelectorAll('nav>ul>li>a')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            view = this.view

            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }

            requestAnimationFrame(animate);

            for (var i = 0; i < view.length; i++) {
                view[i].addEventListener('click', (x) => {
                    this.scroll(x)
                })
            }
        },
        scroll: function (x) {
            x.preventDefault()
            let href = x.target.getAttribute('href')

            let target = document.querySelector(href)

            //console.log(x.target.href)会包含全部http地址

            //window.scrollTo(0, target.offsetTop - 60)
            var coords = {y: window.scrollY};
            var tween = new TWEEN.Tween(coords)
                .to({y: target.offsetTop - 60}, 500)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start();
        }
    }

    controller.init(view)

}.call()








