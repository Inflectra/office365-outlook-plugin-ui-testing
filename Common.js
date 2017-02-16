
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

