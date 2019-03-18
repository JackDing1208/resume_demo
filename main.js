work1.onclick = function () {
    choice.className = 'bar state1'
}
work2.onclick = function () {
    choice.className = 'bar state2'
}
work3.onclick = function () {
    choice.className = 'bar state3'
}


window.onscroll = function () {
    if (window.scrollY > 100) {
        fixtop.classList.add('moving')
    }
    else {
        fixtop.classList.remove('moving')
    }
}

var progress = document.getElementsByClassName('progress')
document.onscroll = function () {
    var skill = document.getElementById('site-skill')
    if (window.scrollY > (skill.offsetTop - 600)) {
        for (i = 0; i < progress.length; i++) {
            progress[i].classList.add('play')
        }
    }
}

var subnav = document.getElementsByClassName('isSub')
var submenu = document.getElementsByClassName('submenu')
for (var i = 0; i < subnav.length; i++) {
    subnav[i].onmouseenter = function (x) {
        x.target.classList.add('active')
    }
    subnav[i].onmouseleave = function (x) {
        x.target.classList.remove('active')
    }
}

var section = document.getElementsByTagName('section')
let aNav = document.querySelectorAll('nav>ul>li>a')
for (var i = 0; i < aNav.length; i++) {
    aNav[i].onclick = function (x) {
        x.preventDefault()
        let href = x.target.getAttribute('href')
        //     console.log(x.target.href)会包含全部http地址
        let target = document.querySelector(href)
        console.log(target)
        window.scrollTo(0, target.offsetTop - 60)
    }
}
