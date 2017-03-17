//Put your custom functions and variables in this file


/** @scenario RunTestCase*/
function RunTestCase(params)
{
	Global.DoInvokeTest('../DataSeeding/DataSeeding.sstest', params);
		
	Navigator.SelectBrowserProfile("Outlook");
	Global.DoInvokeTest('../OutlookPluginTest/OutlookPluginTest.sstest', params);
	Navigator.Detach();
	
	Navigator.SelectBrowserProfile("Internet Explorer HTML");
	Global.DoInvokeTest('../BrowserPluginTest/BrowserPluginTest.sstest', params);
	Navigator.Detach();
}
