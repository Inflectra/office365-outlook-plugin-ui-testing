
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

