//Put your custom functions and variables in this file

eval(g_helper.Include("../../Common.js"));

/** @scenario Login*/
function Login()
{
	Tester.Message("Login");
	var userName = Common_GetParameter("UserName");
	var password = Common_GetParameter("Password");

	SeS('User_account').DoSetText(userName);
	Tester.Assert("Password.DoSetText(['**************'])", false!=SeS('Password')._DoSetText(password));
	SeS('Sign_in').DoClick();
	
	Global.DoSleep(5000);
	Global.DoWaitFor('Account');
}

/** @scenario Logout*/
function Logout()
{
	Tester.Message("Logout");
	SeS('Account').DoClick();
	SeS('Sign_out').DoClick();
}

/** @scenario OpenMailbox*/
function OpenMailbox()
{
	Tester.Message("Open Mailbox");
	SeS('Mail').DoClick();
	Global.DoWaitFor('EnailItem');
}

/** @scenario SelectEmail*/
function SelectEmail(index)
{
	Tester.Message("Select Email");
	var xpath = "//div[@id='_ariaId_24']";
	xpath = xpath.replace("24", "" + (24 + index * 2));
	SeS('EmailItem', {xpath:xpath}).DoClick();
}

/** @scenario LogoutFromMailbox*/
function LogoutFromMailbox()
{
	Tester.Message("Logout");
	SeS('USER').DoClick();
	SeS('SIGNOUT').DoClick();
	
	var res = Global.DoWaitFor('You_signed_out_of_your_account');
	Tester.Assert("Logout Complete", res);
	if (res)
	{
		Navigator.Close();
	}
}

/** @scenario LaunchPlugin*/
function LaunchPlugin()
{
	Tester.Message("Launch Plugin");
	SeS('PLUGIN').DoClick();
}

/** @scenario VerifyPlugin*/
function VerifyPlugin()
{
	Tester.Message("Verify Plugin");
	Global.DoWaitFor('TextMiner', 30000);
	if (Tester.Assert("Plugin panel opened", SeS('TextMiner') != null && SeS('TextMiner').GetNodeText() == "TextMiner"))
	{
		Common_VerifyPlugin();
	}
}
