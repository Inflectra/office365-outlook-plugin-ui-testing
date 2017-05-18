


function Test(params)
{
	if (typeof(params) == "undefined")
	{
		params = {dataRowNum: 1};
	}
	
	Global.DoLoadObjects('../PluginStateVerification/PluginStateVerification.objects.js');

	g_browserParams = "-private";

	Login();

	OpenMailbox();
	SelectEmail(0);

	LaunchPlugin();
	VerifyPlugin(params);

	LogoutFromMailbox();
}

g_load_libraries=["%g_browserLibrary:Internet Explorer HTML%"];


