!function () {
    var APP_ID = 'LNmUtNUhTf2zwoO4FkPJ8o2X-gzGzoHsz';
    var APP_KEY = 'agbvBxzmPGTDIzeNjgppoNNl';

    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });
    let $postMassage = $('#postMessage')
    $postMassage.on('submit', function (e) {
        e.preventDefault()
        let content = $('.messageBandContent')[0].value
        let name = $('.messageBandName')[0].value
        var Message = AV.Object.extend('Message');
        var post = new Message();
        post.save({
            content: content,
            name: name
        }).then(function (x) {
            let li = $("<li></li>")
            li[0].innerText = x.attributes.name + ':' + x.attributes.content
            $('.allMessage').append(li[0])
            $('.messageBandContent')[0].value=''
            $('.messageBandName')[0].value=''
        })
    })

    var query = new AV.Query('Message');
    query.find()
        .then(function (x) {
            let content = x.map((value) => (value.attributes))
            content.forEach(function (value) {
                let li = $("<li></li>")
                li[0].innerText = value.name + ':' + value.content
                $('.allMessage').append(li[0])
            })
        }, function (error) {
            console.log(error) // 异常处理
        });
}.call()