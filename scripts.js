$(document).ready(function(){
    $('.wilkommen').viewportChecker({
        classToAddForFullView: 'wilkommen-ann',
        offset: 250,
        repeat: false,
        callbackFunction: function(elem, action){}
    });
 });

 $(document).ready(function(){
    $('.img-curve').viewportChecker({
        classToAdd: 'img-curve-ann',
        offset: 250,
        repeat: false,
        callbackFunction: function(elem, action){}
    });
 });

$(document).ready(function(){
    $("a").click(function(e) {
        e.preventDefault();

        $("#framechange").attr("src", $(this).attr("href"));
        $("a").removeClass("nav-active ");
        $(this).addClass("nav-active ");
    })
})

$(document).ready(function (){
    $('.text-1').viewportChecker({
        classToAdd: 'text-1-ann',
        offset: 300,
        repeat: false,
        callbackFunction: function(elem, action){}
    });
    $('.text-2').viewportChecker({
        classToAddForFullView: 'text-2-ann',
        offset: 800,
        repeat: false,
        callbackFunction: function(elem, action){}
    });
    $('.bild-1').viewportChecker({
        classToAdd: 'bild-1-ann',
        offset: 300,
        repeat: false,
        callbackFunction: function(elem, action){}
    });
    $('.bild-2').viewportChecker({
        classToAdd: 'bild-2-ann',
        offset: 800,
        repeat: false,
        callbackFunction: function(elem, action){}
    });
});