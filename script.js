$(document).ready(function() {
// var slider = $('.slider');
// slider.find('img').first().wrap('<div class="first-picture"></div>');
// slider.find('img').last('img').wrap('<div class="last-picture"></div>');
// slider.append('<span>&Larr;Потяни&rarr;</span>');
// var widthSlide = slider.width();
// var newWidthSlide = widthSlide/2;
// $('.first-picture').css('width', newWidthSlide);
// $('.first-picture img').css('width', widthSlide);
// slider.mousemove(function(a){
//     var x = a.offsetX;
//     var lit = {
//         'width': x,
//     }
//     $('.first-picture').css(lit);
//     slider.find('span').remove();
// })
   
var slider  = $('.slider');
slider.each(function(){
    $(this).find('img').first().wrap('<div class="first-picture"></div>');
    $(this).find('img').last('img').wrap('<div class="last-picture"></div>');
    $(this).append('<span>&Larr;Потяни&rarr;</span>');
    var widthSlide = $(this).width();
    var newWidthSlide = widthSlide/2;
    $('.first-picture').css('width', newWidthSlide);
    $('.first-picture img').css('width', widthSlide);
    
})
slider.mousemove(function(a){
    console.log('jfjwer', a.target.currentSrc);
        var x = a.offsetX;
        var lit = {
            'width': x,
        }
        $(this).find('.first-picture').css(lit);
        slider.find('span').remove();
    })
});