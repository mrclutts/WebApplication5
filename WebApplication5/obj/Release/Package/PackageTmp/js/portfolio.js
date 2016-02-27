$(document).ready(function () {
    $('.portfolioHolder').children('div:not(.javaScript)').hide();
    $('#filterOptions li a').click(function () {
        var ourClass = $(this).attr('class');
        $('#filterOptions li').removeClass('active');
        $(this).parent().addClass('active');

        if (ourClass == 'allWork') {
            $(".portfolioHolder").children(".portfolio-item").hide();
            $('.portfolioHolder').children(".portfolio-item").each(function(index) {
                $(this).delay(100*index).fadeIn(2000);
            });
            }
        else {
            $(".portfolioHolder").children(".portfolio-item").hide();
            $('.portfolioHolder').children('div:not(.' + ourClass + ')').hide();
            $('.portfolioHolder').children('div.' + ourClass).each(function(index) {
                $(this).delay(100*index).fadeIn(1500);
            });
        }
        return false;
    });
});