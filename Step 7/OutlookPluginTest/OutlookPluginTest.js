


function Test()
{
	Global.DoLoadObjects('../PluginStateVerification/PluginStateVerification.objects.js');

	var pid = Global.DoLaunch(g_browserExecutablePath, null, true);

	Global.DoWaitFor('Mail_Folders', 20000);
	var userName = Common_GetParameter("UserName");

	SeS('Mail_Folders').DoClickNode(userName + ";Inbox");
	
	var tableView = SeS('Table_View');
	if (Tester.Assert("Table View is present", tableView != null))
	{
		var textObject = tableView.DoFindByText("Imported from Rapise Email 1", 5);
		if (Tester.Assert("Text Object found", textObject != null))
		{
			var firstEmail = textObject.GetParent();
			if (Tester.Assert("Email found", firstEmail != null))
			{
				firstEmail.DoClick();
				SeS('TextMinerButton').DoClick();
				Common_VerifyPluginParameterized();
			}
		}
	}
	
	Global.DoKillByPid(pid);

}

g_load_libraries=["UIAutomation", "%g_browserLibrary:Internet Explorer HTML%"];

