g_savePlaybackScreenshotsBeforeAction = true;
g_savePlaybackScreenshotsAfterAction = false;
g_browserAutoOpen = false;


function Common_GetParameter(name)
{
	var localParametersFileName = '../../LocalParameters.xlsx';
	var fso = new ActiveXObject("Scripting.FileSystemObject"); 
	if(fso.FileExists(localParametersFileName))
	{
		Spreadsheet.DoAttach(localParametersFileName);
	}
	else
	{
		Spreadsheet.DoAttach('../../Parameters.xlsx');
	}
	var rowCount = Spreadsheet.GetRowCount();
	for(var i = 0; i < rowCount; i++)
	{
		var paramName = Spreadsheet.GetCell(0, i);
		if (paramName == name)
		{
			return Spreadsheet.GetCell(1, i);
		}
	}
	return null;
}


function Common_VerifyPlugin()
{
	Global.DoWaitFor('ContactsCount', 30000);
	if (Tester.Assert("2 contacts found", SeS('ContactsCount') != null && SeS('ContactsCount').GetNodeText() == "2"))
	{
		Tester.Assert("Sheldon found", SeS('Sheldon_Cooper') != null);
		Tester.Assert("Leonard found", SeS('Leonard_Hofstadter') != null);
	}
}

function Common_VerifyPluginParameterized()
{
	Global.DoWaitFor('ContactsCount', 30000);
	if (Tester.Assert("2 contacts found", SeS('ContactsCount') != null && SeS('ContactsCount').GetNodeText() == "2"))
	{
		if (
		Tester.Assert("Contact 1 found", SeS('Contact1') != null)
		&&
		Tester.Assert("Contact 2 found", SeS('Contact2') != null))
		{
			var contact1Name = Global.DoTrim(SeS('Contact1').GetNodeText());
			var contact2Name = Global.DoTrim(SeS('Contact2').GetNodeText());
			
			Spreadsheet.DoAttach('../../Data.xlsx');
			var expectedContact1Name = Spreadsheet.GetCell("Contact 1", 1);
			var expectedContact2Name = Spreadsheet.GetCell("Contact 2", 1);
			
			Tester.AssertEqual("Contact is " + expectedContact1Name, expectedContact1Name, contact1Name);
			Tester.AssertEqual("Contact is " + expectedContact2Name, expectedContact2Name, contact2Name);
		}
	}
}


