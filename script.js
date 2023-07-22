let back = document.getElementById('back');
let middle = document.getElementById('middle');
let front = document.getElementById('front');
let title = document.getElementById('searchcontent');
var triangle = document.getElementById('triangle');
var header = document.querySelector('header');

//parallax
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    triangle.style.bottom = (Math.max(value * -1.6, -200)) + 'px';
    title.style.top =  Math.max(value * -0.7, -200) + 'px';
    front.style.top = value * 0 + 'px';
    middle.style.top = Math.min(value * 0.4, middle.height * 0.4)+ 'px';
    back.style.top = Math.min(value * 0.6, back.height * 0.6) + 'px';
    header.classList.toggle('sticky', window.scrollY > 0);
})

triangle.click(function(){
    document.element
})

$("#triangle").click(function(){
    $('html, body').animate({
        scrollTop: $("#sec").offset().top
    }, 1500);
});

$("#logo").click(function(){
    $('html, body').animate({
        scrollTop: $(".block").offset().top
    }, 1500);
});

var sekrol = document.getElementById('sekrol');

$("#sekrol").mouseover(function(){
    window.addEventListener('scroll', function() {
        var leftPos = $('.sec').scrollLeft();
        $(".sec").animate({scrollLeft: leftPos - scroll})
    })
})