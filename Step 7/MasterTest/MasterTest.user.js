//Put your custom functions and variables in this file


/** @scenario RunTestCase*/
function RunTestCase(params)
{
	Global.DoInvokeTest('../DataSeeding/DataSeeding.sstest', params);
		
	g_browserLibrary = "Outlook";
	SeSPrepareBrowserVariables();
	Global.DoInvokeTest('../OutlookPluginTest/OutlookPluginTest.sstest', params);

	g_ieNavigator.process = 0;
	g_ieNavigator.path = null;
	
	g_browserLibrary = "Internet Explorer HTML";
	SeSPrepareBrowserVariables();
	Global.DoInvokeTest('../BrowserPluginTest/BrowserPluginTest.sstest', params);
	
	g_ieNavigator.process = 0;
	g_ieNavigator.path = null;
}
