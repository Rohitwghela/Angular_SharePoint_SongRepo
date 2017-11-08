jQuery(document).ready(function () {
    jQuery('.Mapping').click(function () {
        jQuery('.Mapping').addClass('MappingAct');
        jQuery('.DataGenerationAct').toggleClass('DataGenerationAct');
        jQuery('.ProjectAct').toggleClass('ProjectAct');
        jQuery('.TestManagerAct').toggleClass('TestManagerAct');
        jQuery('.ReportsAct').toggleClass('ReportsAct');
        jQuery('.SettingsnewAct').toggleClass('SettingsnewAct');
    });
    jQuery('.DataGeneration').click(function () {
        jQuery('.DataGeneration').addClass('DataGenerationAct');
        jQuery('.MappingAct').toggleClass('MappingAct');
        jQuery('.ProjectAct').toggleClass('ProjectAct');
        jQuery('.TestManagerAct').toggleClass('TestManagerAct');
        jQuery('.ReportsAct').toggleClass('ReportsAct');
        jQuery('.SettingsnewAct').toggleClass('SettingsnewAct');
    });
    jQuery('.Project').click(function () {
        jQuery('.Project').addClass('ProjectAct');
        jQuery('.MappingAct').toggleClass('MappingAct');
        jQuery('.DataGenerationAct').toggleClass('DataGenerationAct');
        jQuery('.TestManagerAct').toggleClass('TestManagerAct');
        jQuery('.ReportsAct').toggleClass('ReportsAct');
        jQuery('.SettingsnewAct').toggleClass('SettingsnewAct');
    });
    jQuery('.TestManager').click(function () {
        jQuery('.TestManager').addClass('TestManagerAct');
        jQuery('.MappingAct').toggleClass('MappingAct');
        jQuery('.ProjectAct').toggleClass('ProjectAct');
        jQuery('.DataGenerationAct').toggleClass('DataGenerationAct');
        jQuery('.ReportsAct').toggleClass('ReportsAct');
        jQuery('.SettingsnewAct').toggleClass('SettingsnewAct');
    });
    jQuery('.Reports').click(function () {
        jQuery('.Reports').addClass('ReportsAct');
        jQuery('.MappingAct').toggleClass('MappingAct');
        jQuery('.ProjectAct').toggleClass('ProjectAct');
        jQuery('.TestManagerAct').toggleClass('TestManagerAct');
        jQuery('.DataGenerationAct').toggleClass('DataGenerationAct');
        jQuery('.SettingsnewAct').toggleClass('SettingsnewAct');
    });
    jQuery('.Settingsnew').click(function () {
        
        jQuery('.Settingsnew').addClass('SettingsnewAct');
        jQuery('.DataGenerationAct').toggleClass('DataGenerationAct');
        jQuery('.ProjectAct').toggleClass('ProjectAct');
        jQuery('.TestManagerAct').toggleClass('TestManagerAct');
        jQuery('.ReportsAct').toggleClass('ReportsAct');
        jQuery('.MappingAct').toggleClass('MappingAct');
    });

/*    jQuery('.menu.ng-scope a').click(function () {
        alert('clicked');
        jQuery('.menu.ng-scope a').css('background-color', '#FFFD');
        jQuery(this).css('background-color', '#1a89bf');
        jQuery(this).data('bgColor', '#1a89bf');
        return false;
    });
    jQuery('.menu.ng-scope a').hover(function () {
        jQuery(this).data('bgColor', jQuery(this).css('background-color'));
        jQuery(this).css('background-color', '#104d6b');
    }, function () {
        jQuery(this).css('background-color', jQuery(this).data('bgColor'));
    });*/

    

});


