//Put your custom functions and variables in this file

eval(g_helper.Include("../../Common.js"));

/** @scenario Login*/
function Login()
{
	var userName = Common_GetParameter("UserName");
	var password = Common_GetParameter("Password");

	SeS('User_account').DoSetText(userName);
	Tester.Assert("Password.DoSetText(['**************'])", false!=SeS('Password')._DoSetText(password));
	SeS('Sign_in').DoClick();
	Global.DoWaitFor('Account');
}

/** @scenario Logout*/
function Logout()
{
	SeS('Account').DoClick();
	SeS('Sign_out').DoClick();
}

/** @scenario OpenMailbox*/
function OpenMailbox()
{
	SeS('Mail').DoClick();
	Global.DoWaitFor('EnailItem');

}

/** @scenario SelectEmail*/
function SelectEmail(index)
{
	var xpath = "//div[@id='_ariaId_24']";
	xpath = xpath.replace("24", "" + (24 + index * 2));
	SeS('EmailItem', {xpath:xpath}).DoClick();
}

/** @scenario LogoutFromMailbox*/
function LogoutFromMailbox()
{
	SeS('USER').DoClick();
	SeS('SIGNOUT').DoClick();
	
	var res = Global.DoWaitFor('You_signed_out_of_your_account');
	Tester.Assert("Logout Complete", res);
	if (res)
	{
		Navigator.Close();
	}
}
