


function Test()
{
	var pid = Global.DoLaunch('C:\\Program Files (x86)\\Microsoft Office\\root\\Office16\\Outlook.exe');

	var userName = Common_GetParameter("UserName");
	SeS('Mail_Folders')._DoClickNode(userName + ";Inbox");
	var todayGroup = SeS('Group_By__Expanded__Date__Today');
	if (todayGroup)
	{
		var childrenCount = todayGroup.GetChildrenCount();
		if (Tester.Assert("Inbox is not empty", childrenCount > 0))
		{
			var firstEmail = todayGroup.GetChildAt(0);
			if (Tester.Assert("Email found", firstEmail != null))
			{
				firstEmail.DoClick();
				SeS('TextMiner').DoAction();
				
				//TODO
				Global.DoSleep(10000);
			}
		}
	}
	
	Global.DoKillByPid(pid);

}

g_load_libraries=["UIAutomation"];


