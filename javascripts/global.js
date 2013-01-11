jQuery(function($){

    var colors={
        meat: '#ba4b58',
        bread: '#d5b146',
        vegetables: '#5fbf35',
        nuts: '#c06c12',
        results: '#a52a2a'
    };

    $('#main').find('ul li').click(function(){
        $(this).toggleClass('selected');
    });


    $('#main-steps').find('a').click(function(){

        var step = this.id;

        toggleActiveList(step);
        changeBgColors(step);
        fadeIngredients(step);

    });


    var changeBgColors = function(step) {
        $('#main-steps').find('a').stop().css('background', '#333');

        $('#main-steps').find('a#' + step).animate({
            backgroundColor: colors[step]
        }, 1000);
        $('body').animate({
           backgroundColor: colors[step]
        }, 1000);
    }

    var toggleActiveList = function(step){
        $('#main').find('ul li').addClass('opacity-zero');
        $('#main').find('ul.active').removeClass();
        $('#main').find('ul#' + step + '-list').addClass('active');
    }

    var fadeIngredients = function(step){
        $('#main').find('ul#' + step + '-list li').fadeTo("slow", 1);

    }

});
