


function Test()
{
	Global.DoLoadObjects('../PluginStateVerification/PluginStateVerification.objects.js');

	var pid = Global.DoLaunch('C:\\Program Files (x86)\\Microsoft Office\\root\\Office16\\Outlook.exe');

	var userName = Common_GetParameter("UserName");
	SeS('Mail_Folders')._DoClickNode(userName + ";Inbox");
	
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


