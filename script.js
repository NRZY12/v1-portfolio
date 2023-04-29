//  Toggle for Light/Dark mode

document.querySelector('.slider').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
})

// This code for the floating picture on the headline

$(document).mousemove(function (e) {
    $(".hiddenimg").css({ left: e.pageX, top: e.pageY });
});

// This code here is for the flowating 'About me' paragraph section

$(document).mousemove(function (e) {
    $(".about-me").css({ left: e.pageX, top: e.pageY });
});