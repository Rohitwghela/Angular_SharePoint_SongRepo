	
	//-------------------------show/hide editing tool-------------------------------------
	
	document.getElementById("ToggleRibbon").style.display = "block";
	document.getElementById("ms-designer-ribbon").style.display = "none";
	document.getElementById("suiteBar").style.display = "none";
	$("#suiteBar").hide();
	
	jQuery("#ShowEditRibbon").click(function () {
		
	    jQuery(this).hide();
	    jQuery("#HideEditRibbon").show();
	    jQuery("#ms-designer-ribbon").slideDown();
	    jQuery("#RibbonContainer-TabRowRight").css("visibility", "hidden");
	});
	jQuery("#HideEditRibbon").click(function () {
	    jQuery(this).hide();
	    jQuery("#ShowEditRibbon").show();
	    jQuery("#ms-designer-ribbon").slideUp();
	    $("#s4-workspace").css("height","100vh");
	});

$("<style type='text/css'> li[text='Personalize this Page'], li[text='Show Shared View'], li[text='Reset Page Content']{display: block;}</style>").appendTo("head");

var EcbMenuStyle = "<style type='text/css'>";
EcbMenuStyle += "li.ms-core-menu-item[text='Version History'],li.ms-core-menu-item[text='Compliance Details'],li.ms-core-menu-item[text='Alert Me'],li.ms-core-menu-item[text='Shared With'],li.ms-core-menu-item[text='Delete Item'],li.ms-core-menu-item[text='Workflows']{display: block;}";
EcbMenuStyle += "</style>";
$(EcbMenuStyle).appendTo("head");

