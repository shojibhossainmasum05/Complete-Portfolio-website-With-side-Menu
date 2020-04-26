$(document).ready(function(e){
    $win = $(window);
    $navbar = ('#header');
    $toggle = ('.tiggle-button')
    var width = $navbar.width();
    tiggle_onclick($win,$navbar,width);

    // resize evevnt
    $win.resize(function(){
    tiggle_onclick($win,$navbar,$width);
    });

    $tiggle.click(function(e){
        $navbar.tiggleClass("tiggle-left");
})

});

function tiggle_onclick ($win,$navbar,width) {
    if ($win.width()<= 768) {
        $navbar.css({left:`-${width}px`});
        }else{ 
            $navbar.css({left:'0px'});
}}

var typed = new Typed('#typed',{
    strings: [
        'Web Developer',
        'Graphics Designer',
        'Freelancer'
    ],
    typeSpeed:60,
    typeSpeed:60,
    typeSpeed:60,
    loop:true
});
var typed_2 = new Typed('#typed_2',{
    strings: [
        'Web Developer',
        'Graphics Designer',
        'Freelancer'
    ],
    typeSpeed:60,
    typeSpeed:60,
    typeSpeed:60,
    loop:true
});