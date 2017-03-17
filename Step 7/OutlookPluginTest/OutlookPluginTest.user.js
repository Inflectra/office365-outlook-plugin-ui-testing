//Put your custom functions and variables in this file

eval(g_helper.Include('../../Common.js'));
g_browserAutoOpen = false;


function OnXPathNotFound(xpath)
{
	if (l3) Log3("OnXPathNotFound");
	
	var parts = xpath.split("@@@");
	var newXpath = parts[parts.length - 1];
	return newXpath;
}

if (typeof(g_xpathNotFoundCallbacks) != "undefined")
{
	g_xpathNotFoundCallbacks.push(OnXPathNotFound);
}


Log("Ensure Outlook Profile");
var appData = Global.GetSpecialFolderPath("CommonApplicationData");
var outlookProfilePath = appData + "\\Inflectra\\Rapise\\BrowserProfiles\\Outlook.json";

if(g_helper.FileExists(outlookProfilePath))
{
	Log("Outlook Profile Exists");
}
else
{
	Log("Creating Outlook Profile");
	var outlook2016ExecutablePath = "C:\\Program Files (x86)\\Microsoft Office\\root\\Office16\\Outlook.exe";
	var outlook2013ExecutablePath = "C:\\Program Files\\Microsoft Office\\Office15\\Outlook.exe";
	var outlookExecutablePath = outlook2016ExecutablePath;
	if (g_helper.FileExists(outlook2013ExecutablePath))
	{
		outlook2016ExecutablePath = outlook2013ExecutablePath;
	}

	var outlookProfile = {
		  "browserLibrary": "Internet Explorer HTML",
		  "browserPath": outlookExecutablePath,
		  "browserParams": "",
		  "clickMode": "click"
		};
	g_helper.FileWrite(outlookProfilePath, JSON.stringify(outlookProfile, undefined, 2));
}
