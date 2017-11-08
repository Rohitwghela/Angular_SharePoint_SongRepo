/****************************Left Navigation CSS*************************************/

    $(function () {
    	$('[data-toggle="tooltip"]').tooltip()
    	$(".tableBorder th").css("font-size","14px")
    });
/*
    $("ul.dfwp-list li.level-section ").removeClass("level-header");
    $("ul.dfwp-list li ").removeClass("level-section");
	$("ul.dfwp-list li div span a").css({ 'color': 'White'  });
	
    $(".navmenu ul:nth-child(2) li div ").removeClass("level-header");
    $(".navmenu ul:nth-child(2) li ").removeClass("level-section");
    $(".navmenu ul:nth-child(2) li ul").removeClass("dfwp-list");
    $(".navmenu div  ul:nth-child(2) li ul li").removeClass("level-item-pos level-item level-bullet");

    $(".navmenu div  ul:nth-child(2) li ul").addClass("dropdown-menu navmenu-nav");
    $(".navmenu ul li").addClass("dropdown");
    $(".navmenu-nav .dropdown  div span").addClass("glyphicon glyphicon-chevron-right");
    $(".navmenu div ul:nth-child(2) li").addClass("dropdown")
    $(".navmenu ul:nth-child(2) li div ").addClass("dropdown-toggle");
    $(".navmenu ul:nth-child(2) li div ").attr("data-toggle", "dropdown");
    $(".navmenu ul:nth-child(2) li div ").attr("aria-expanded", "false");

    $(".dropdown-toggle span").removeClass("headertitle headermarker");
    $(".dropdown li ul li div").attr("data-toggle", "");
	$(".navmenu span:contains('Table Of Content')").hide(); // to remoce table of contents
*/
$("#sideNavBox").css("width","100%")
$("#sideNavBox").css("margin-left","0px ");
$("ul.ms-core-listMenu-root").addClass("dfwp-list")
$("ul.dfwp-list li span ").css({ 'color': 'White'  });
$("ul.dfwp-list li span.menu-item").addClass("dropdown-toggle");
$("ul.dfwp-list li span.menu-item").attr("data-toggle", "dropdown");
$("ul.dfwp-list li span.menu-item").attr("aria-expanded", "false");
$("ul.dfwp-list li ul").addClass("dropdown-menu navmenu-nav");

	//console.log("2013 Master Page")
    /*****************************************************************/
    
	function openNav() {
		document.getElementById("mySidenav").style.width = "250px";
	}
	
	function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
	}

	function bindAreaNavigation() {
		var ullength = $(".dfwp-list .dropdown .dfwp-list ul").length;
		for(var i=1;i<=ullength;i++)
		{
			var ddlength = $(".dfwp-list .dropdown .dfwp-list li:nth-child("+i+") .dropdown").length;
			var j = 0;
			while(j<ddlength)
			{	
				var variable = $(".dfwp-list .dropdown .dfwp-list li:nth-child("+i+") .dropdown ")[0];
				variable.appendChild($(".dfwp-list .dropdown .dfwp-list li:nth-child("+i+") .dropdown div span a")[0]); 
				j++;
			}
			
			$(".dfwp-list .dropdown .dfwp-list li:nth-child("+i+") ul li").not(':first').remove();
		}
		
		$(".dfwp-list .dropdown .dfwp-list li .dropdown div").remove(); 
		$( ".dfwp-list .dropdown .dfwp-list li .dropdown a" ).css("background-color", "black");
		
		$(".dfwp-list .dropdown .dfwp-list li .dropdown a").hover(
			function() {
				$(this).css("background-color", "#DA291C");
			},
			function(){
				$(this).css("background-color", "black");
		});
	}
    function bindAreaNavigationSuccess() {
      
    }
    function bindAreaNavigationFailed(sender, args) {
        console.log(sender);
        console.log(args);
    }
	