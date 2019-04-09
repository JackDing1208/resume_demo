!function(){
    var view=document.getElementsByClassName('progress')
    var controller={
        view:null,
        init:function (view) {
            this.view=view
            this.bindEvents()
        },
        bindEvents:function () {
            var view =this.view
            document.onscroll = function () {
                var skill = document.getElementById('site-skill')
                if (window.scrollY > (skill.offsetTop - 600)) {
                    for (i = 0; i < view.length; i++) {
                        view[i].classList.add('play')
                    }
                }
            }
        }
    }

    controller.init(view)


} .call()