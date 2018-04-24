(function(){
    var resetNavSelector;
    var selectWidth = $('#selector');
    $(".nav li").hover(
        function(){
            var currentLink = $(this);
            clearTimeout(resetNavSelector);
            $(".nav li#selector").animate(
                {
                    width : selectWidth.width(),
                    left: currentLink.position().left + parseInt('47')
                }, {
                    duration : 300,
                    easing : "swing",
                    queue : false
            });
        }, 
        function(){
            var activesWidth = $('.actives')
            resetNavSelector = setTimeout(function() {  
                $(".nav li#selector").animate(
                    { 
                        width : selectWidth.width(), 
                        left: activesWidth.position().left + parseInt('47')
                    }, 200);
            }, 200); 
        });
})();