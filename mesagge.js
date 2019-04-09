!function () {

    var model = {
        init: function () {
            var APP_ID = 'LNmUtNUhTf2zwoO4FkPJ8o2X-gzGzoHsz';
            var APP_KEY = 'agbvBxzmPGTDIzeNjgppoNNl';
            AV.init({appId: APP_ID, appKey: APP_KEY});
        },
        fetch: function () {
            var query = new AV.Query('Message');
            return query.find()  //返回一个promise对象
        },
        save: function (name, content) {
            var Message = AV.Object.extend('Message');
            var post = new Message();
            return post.save({
                name: name,
                content: content
            })
        }
    }
    var view = document.querySelector('.allMessage')
    var controller = {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.model.init()
            this.createMessage()
            this.bindEvents()
        },
        createMessage: function () {
            this.model.fetch()
                .then((x)=> {
                    let content = x.map((value) => (value.attributes))
                    content.forEach((value)=> {
                        let li = $("<li></li>")
                        li[0].innerText = value.name + ':' + value.content
                        this.view.append(li[0])
                    })
                })
        },
        bindEvents: function () {
            let $postMassage = $('#postMessage')
            $postMassage.on('submit', (e) => {
                e.preventDefault()
                this.addMessage()
            })
        },

        addMessage: function () {
            let name = $('.messageBandName')[0].value

            let content = $('.messageBandContent')[0].value
            this.model.save(name,content)
                .then((x)=> {
                    let li = $("<li></li>")
                    li[0].innerText = x.attributes.name + ':' + x.attributes.content
                    this.view.append(li[0])
                    $('.messageBandContent')[0].value = ''
                    $('.messageBandName')[0].value = ''
                })
        }
    }
    controller.init(view,model)

}.call()