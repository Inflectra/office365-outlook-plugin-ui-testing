


function Test()
{
	g_browserParams = "-private";

	Login();

	OpenMailbox();
	SelectEmail(1);

	LogoutFromMailbox();
}

g_load_libraries=["%g_browserLibrary:Internet Explorer HTML%"];


