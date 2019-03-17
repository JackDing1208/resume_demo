work1.onclick = function () {
    choice.className = 'bar state1'
}
work2.onclick = function () {
    choice.className = 'bar state2'
}
work3.onclick = function () {
    choice.className = 'bar state3'
}


document.onscroll = function () {
    if (window.scrollY > 100) {
        fixtop.classList.add('moving')
    }
    else {
        fixtop.classList.remove('moving')
    }
}


var progress = document.getElementsByClassName('progress')
document.onscroll = function () {
    var div = document.getElementById('skill')
    if (window.scrollY > (div.offsetTop - 600)) {
        for (i = 0; i < progress.length; i++) {
            progress[i].classList.add('play')
        }
    }
}


