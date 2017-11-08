jQuery(document).ready(function () { 
    jQuery('.menu li a').click(function () {
        alert('clicked');
        jQuery('.menu li a').css('background-color', '#FFFD');
        jQuery(this).css('background-color', '#1a89bf');
        jQuery(this).data('bgColor', '#1a89bf');
        return false;
    });
    jQuery('.menu li a').hover(function () {
        jQuery(this).data('bgColor', jQuery(this).css('background-color'));
        jQuery(this).css('background-color', '#104d6b');
    }, function () {
        jQuery(this).css('background-color', jQuery(this).data('bgColor'));
    });

});