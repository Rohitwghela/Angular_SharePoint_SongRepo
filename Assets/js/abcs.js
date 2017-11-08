  define(['jquery'], function($) {
  
  
  var $body = $('#s4-workspace');
    var navHeight = $('#ms-designer-ribbon').outerHeight(true) + 10;

    $body.scrollspy({
        target: '#leftCol',
        offset: navHeight
    });

    /* smooth scrolling sections */
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('#s4-workspace').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });

    var $affixNav = $('[data-spy=affix]'),
        $msDesignerRibbon = $('#ms-designer-ribbon');

    if ($affixNav.length) {
        $affixNav.affix({
            offset: {
                top: function() {
                    return (this.top === $('[role=heading]').outerHeight(true) + $('[role=menubar]').outerHeight(true));
                },
                bottom: function() {
                    return (this.bottom === $('footer').outerHeight() - parseInt($('footer').css('margin-top'), 10));
                }
            }
        });

        $affixNav.on('affix.bs.affix', function(e) {
            $affixNav.addClass('col-md-2')
                .css({
                    'top': 17 + ($msDesignerRibbon.height() + parseInt($msDesignerRibbon.css('margin-top'), 10)),
                    'position': ''
                });
        });
        $affixNav.on('affix-top.bs.affix', function(e) {
            $affixNav.removeClass('col-md-2')
                .css({
                    'top': 0,
                    'position': ''
                });
        });
        $affixNav.on('affix-bottom.bs.affix', function(e) {
            $affixNav.removeClass('col-md-2');
        });

        $(document).on('FixRibbonAndWorkspaceDimensions', function(e) {
            if ($affixNav.hasClass('col-md-2')) {
                $affixNav.css({
                    'top': 17 + ($msDesignerRibbon.height() + parseInt($msDesignerRibbon.css('margin-top'), 10))
                });
            }
        });
    }
 })
  