
    $(document).ready(function () {
            SP.SOD.executeFunc('sp.js', 'SP.ClientContext', bindAreaNavigation);
            //----------hide Due Date in Approval Task Form--------
            var taskFormUrl = window.location.pathname;
            if (taskFormUrl.match('/IssueTracker/_layouts/15/WrkTaskIP.aspx') != null) {
                var approvalObj = $('input[value="Approve"]').closest('tbody');
                $(approvalObj).find('tr:nth-child(4)').hide();
            }
            //----------hide Due Date in Approval Task Form--------
            
            $('select[title=Facility] option').filter(function() {     
		 		return ($(this).text() == 'Apex');
			}).remove(); 
			            
    });
    
    
    /*************************Fix Scroll Bar Issue***********************/
    function FixWorkspace() {
        // if you are using a header that is affixed to the top (i.e. SharePoint Ribbon) put the ID or class here to change the workspace height accordingly.
        var header = '#myHeader';
        var width = $(window).width();
        var height;
        if ($(header).length) {
            height = $(window).height() - $(header).height();
        } else {
                height = $(window).height();
        }
        $('#s4-workspace').width(width).height(height);
    }
    $(document).ready(function() {
        FixWorkspace();
    });
    $(window).resize(function() {
        FixWorkspace();
    });
    /*************************Fix Scroll Bar Issue***********************/
    
    
	/*********************Fix for DataFormWebPart - column context menu sorting***********************/
	
	$(document).ready(function(){
		$("th.table-header > table").click(function(){
			console.log(intervalID);
			var intervalID = setInterval(startCheck, 500); // >>> on table header(column) click, execute startCheck function continously
			setTimeout(function(){clearInterval(intervalID);}, 5000); // >> stop execution after 5 seconds
		});
	});
	
	function startCheck(){
		if( $("li.ms-core-menu-item[text='Descending'][type='option']").length > 0 ){ // >>> Check if context menu is loaded			
			
			// >>> get onclick script from <li>
			var desScript = $("li.ms-core-menu-item[text='Descending'][type='option']").attr("onmenuclick").toString().replace("descending","'descending'"); 
			var ascScript = $("li.ms-core-menu-item[text='Ascending'][type='option']").attr("onmenuclick").toString().replace("ascending","'ascending'");
			
			// >>> set onclick and href attribute of <a> tags for Ascending and Descending
			$("li.ms-core-menu-item[text='Descending'] > a").attr("href", desScript);
			$("li.ms-core-menu-item[text='Ascending'] > a").attr("href", ascScript);

			$("li.ms-core-menu-item[text='Descending'] > a")[0].setAttribute('onclick',desScript);
			$("li.ms-core-menu-item[text='Ascending'] > a")[0].setAttribute("onclick", ascScript);
			
		}
	}
	
	/*********************Fix for DataFormWebPart - column context menu sorting***********************/
    


	/****** To convert lookup value hyperlinks into text in DataFormWebPart *******/
		
	function removeLookupHyperlinks(){
	    $('a[href*="RootFolder=*"]').each(
			function(index) {
				var link = $(this);
				$(this).after("<span>" + link.text() + "</span>");
				$(this).remove();
		});

		$('a[href*="listform"]').each(
			function(index) {
				var link = $(this);
				$(this).after("<span>" + link.html() + "</span>");
				$(this).remove();
		});
		
		$('a[href*="userdisp.aspx?ID"]').each(
			function(index) {
				var link = $(this);
				$(this).after("<span>" + link.html() + "</span>");
				$(this).remove();
		});
	}
	/****** To convert lookup value hyperlinks into text in DataFormWebPart *******/

	/********* To get an element by tagName , identifier and title *********/
    function getTagFromIdentifierAndTitle(tagName, identifier, title) {
	    var len = identifier.length;
	    var tags = document.getElementsByTagName(tagName);
	    for (var i = 0; i < tags.length; i++) {
	        var tempString = tags[i].id;
	        if (tags[i].title == title && (identifier == "" || tempString.indexOf(identifier) == tempString.length - len)) {
	            return tags[i];
	        }
	    }
	    return null;
	}
	/******************/
	
	/******** Script for Search ticket by ID **********/
	function MasterSearch1(){
		var ticketFromID=document.getElementById('txtSearch').value.trim();
		if(ticketFromID != ""){
			window.location.href = '/IssueTracker/Lists/TicketTracker/RedirectToDisplayPage.aspx?ID='+ ticketFromID +'&Source=SearchIssueByID.aspx';
		}
		else{
			alert('Please enter ticket number');
		}
	}
	/******************/
	
	/*** START **** Validation to check if file already exists in file attachment in forms *******/
	function attachEventHandlers() {
	    // override the default event handler with our custom method
	    $('#attachOKbutton').attr("onclick", "onAttachOKbuttonClicked()");
	}
	
	function onAttachOKbuttonClicked() {
	    // get the name of the file last attached to the item
	    var newFilePath = $('#attachmentsOnClient').find('input').last().val();
	    // get the file name from the file path as described at
	    // http://stackoverflow.com/questions/423376/how-to-get-the-file-name-from-a-full-path-using-javascript
	    // TrimWhiteSpaces is a js method of SharePoint to filter out special characters from the file name
	    var newFileName = TrimWhiteSpaces(newFilePath).replace(/^.*[\\\/]/, '');
	
	    var foundDuplication = false;
	
	    $('#idAttachmentsTable').find('tbody').find('tr').each(function () {
	        var existingFileName = $(this).find('.ms-vb').find('a').text();
	        // if the existingFileName is empty then the attachment was uploaded in this session
	        // that is, it is not saved yet
	        if (existingFileName == '') {
	            var existingFilePath = $(this).find('.ms-vb').find('span').text();
	            existingFileName = existingFilePath.replace(/^.*[\\\/]/, '');
	        }
	
	        if (newFileName == existingFileName) {
	            foundDuplication = true;
	            return false;
	        }
	    });
	
	    if (foundDuplication) {
	        alert("A file with name '" + newFileName + "' is already attached to this item.");
	    }
	    else {
	        // call the OkAttach js method of SharePoint
	        // this is the method that is originally called by uploading attachments
	        OkAttach();
	    }
	}
	/*** END **** Validation to check if file already exists in file attachment in forms *******/
