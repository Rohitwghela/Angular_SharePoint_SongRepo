
(function () {

    function removeHyperlink(renderCtx) { // this function is called after page is rendered
    	debugger;
        var rows = renderCtx.ListData.Row;
            for (var i = 0; i < rows.length; i++) 
            {
                var date = rows[i].Department;
                console.log(date);
    
                rows[i].Department.FriendlyDisplay = date;

                var rowId = GenerateIIDForListItem(renderCtx, rows[i]);
                var row = document.getElementById(rowId); 
            }
    }

    function registerRenderer() {
        var ctxForm = {};
        ctxForm.Templates = {};
        ctxForm.Templates = {

            Fields : {
            
                'LinkTitleNoMenu': { //------ Change Hyperlink from LinkTitleNoMenu field
                    View : function (ctx) {
                        var url = String.format('{0}?ID={1}', "http://www.google.com", ctx.CurrentItem.ID);
                        return String.format('<a href="{0}" onclick="EditItem2(event, \'{0}\');return false;">{1}</a>', url, ctx.CurrentItem.Title);
                    }
                },
            }
        };
        ctxForm.OnPostRender = removeHyperlink;
        SPClientTemplates.TemplateManager.RegisterTemplateOverrides(ctxForm);
    }
    ExecuteOrDelayUntilScriptLoaded(registerRenderer, 'clienttemplates.js');


})();
