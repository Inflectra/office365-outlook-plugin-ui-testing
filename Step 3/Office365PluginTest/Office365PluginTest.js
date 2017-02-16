


function Test()
{
	g_browserParams = "-private";

	Login();

	OpenMailbox();
	SelectEmail(0);

	LaunchPlugin();
	VerifyPlugin();

	LogoutFromMailbox();
}

g_load_libraries=["%g_browserLibrary:Internet Explorer HTML%"];


