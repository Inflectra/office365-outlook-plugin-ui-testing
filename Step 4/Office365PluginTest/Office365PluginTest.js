


function Test()
{
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
			}
		}
	}

}

g_load_libraries=["UIAutomation"];


