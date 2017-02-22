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
