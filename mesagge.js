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
        console.log(content)
        var Message = AV.Object.extend('Message');
        var post = new Message();
        post.save({
            content: content
        }).then(function (object) {
            alert('提交成功')
        })
    })

    var query = new AV.Query('Message');
    query.find()
        .then(function (x) {
            let content = x.map((value) => (value.attributes))
            console.log(content)
            content.forEach(function (value) {
                let li = $("<li></li>")
                li[0].innerText = value.content
                $('.allMessage').append(li[0])
            })
        }, function (error) {
            console.log(error) // 异常处理
        });
}.call()