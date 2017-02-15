var saved_script_objects={
	"User_account": {
		"locations": [
			{
				"locator_name": "HTML",
				"location": {
					"xpath": "param:xpath",
					"url": "param:url",
					"title": "param:title"
				}
			}
		],
		"window_text": "regex:Sign in to your account - Internet Explorer.*",
		"window_class": "IEFrame",
		"object_text": "",
		"object_role": "ROLE_SYSTEM_CLIENT",
		"object_class": "Internet Explorer_Server",
		"version": 0,
		"object_type": "HTMLObject",
		"object_flavor": "Text",
		"object_name": "User account",
		"object_library": "Internet Explorer HTML",
		"window_name": "regex:Sign in to your account - Internet Explorer.*",
		"xpath": "//input[@id='cred_userid_inputtext' and @name='login']",
		"title": "Sign in to your account",
		"url": "https://login.microsoftonline.com/"
	},
	"Password": {
		"locations": [
			{
				"locator_name": "HTML",
				"location": {
					"xpath": "param:xpath",
					"url": "param:url",
					"title": "param:title"
				}
			}
		],
		"window_text": "regex:Sign in to your account - Internet Explorer.*",
		"window_class": "IEFrame",
		"object_text": "",
		"object_role": "ROLE_SYSTEM_CLIENT",
		"object_class": "Internet Explorer_Server",
		"version": 0,
		"object_type": "HTMLObject",
		"object_flavor": "Text",
		"object_name": "Password",
		"object_library": "Internet Explorer HTML",
		"window_name": "regex:Sign in to your account - Internet Explorer.*",
		"xpath": "//input[@id='cred_password_inputtext' and @name='passwd']",
		"title": "Sign in to your account",
		"url": "https://login.microsoftonline.com/"
	},
	"Sign_in": {
		"locations": [
			{
				"locator_name": "HTML",
				"location": {
					"xpath": "param:xpath",
					"url": "param:url",
					"title": "param:title"
				}
			}
		],
		"window_text": "regex:Sign in to your account - Internet Explorer.*",
		"window_class": "IEFrame",
		"object_text": " Sign in ",
		"object_role": "ROLE_SYSTEM_CLIENT",
		"object_class": "Internet Explorer_Server",
		"version": 0,
		"object_type": "HTMLObject",
		"object_flavor": "Button",
		"object_name": "Sign in",
		"object_library": "Internet Explorer HTML",
		"window_name": "regex:Sign in to your account - Internet Explorer.*",
		"xpath": "//button[@id='cred_sign_in_button']",
		"title": "Sign in to your account",
		"url": "https://login.microsoftonline.com/"
	},
	"Account": {
		"locations": [
			{
				"locator_name": "HTML",
				"location": {
					"xpath": "param:xpath",
					"url": "param:url",
					"title": "param:title"
				}
			}
		],
		"window_text": "regex:Microsoft Office Home - Internet Explorer.*",
		"window_class": "IEFrame",
		"object_text": "",
		"object_role": "ROLE_SYSTEM_CLIENT",
		"object_class": "Internet Explorer_Server",
		"version": 0,
		"object_type": "HTMLObject",
		"object_flavor": "Button",
		"object_name": "Account",
		"object_library": "Internet Explorer HTML",
		"window_name": "regex:Microsoft Office Home - Internet Explorer.*",
		"xpath": "//button[@id='O365_MeFlexPane_ButtonID']",
		"title": "Microsoft Office Home",
		"url": "https://www.office.com/1/?auth=2&home=1&from=PortalLanding&trial=1",
		"ignore_object_name": true
	},
	"Sign_out": {
		"locations": [
			{
				"locator_name": "HTML",
				"location": {
					"xpath": "param:xpath",
					"url": "param:url",
					"title": "param:title"
				}
			}
		],
		"window_text": "regex:Microsoft Office Home - Internet Explorer.*",
		"window_class": "IEFrame",
		"object_text": "param:object_name",
		"object_role": "ROLE_SYSTEM_CLIENT",
		"object_class": "Internet Explorer_Server",
		"version": 0,
		"object_type": "HTMLObject",
		"object_flavor": "Link",
		"object_name": "Sign out",
		"object_library": "Internet Explorer HTML",
		"window_name": "regex:Microsoft Office Home - Internet Explorer.*",
		"xpath": "//a[@id='O365_SubLink_ShellSignout']",
		"title": "Microsoft Office Home",
		"url": "https://www.office.com/1/?auth=2&home=1&from=PortalLanding&trial=1"
	},
	"Mail": {
		"locations": [
			{
				"locator_name": "HTML",
				"location": {
					"xpath": "param:xpath",
					"url": "param:url",
					"title": "param:title"
				}
			}
		],
		"window_text": "regex:Microsoft Office Home - Internet Explorer.*",
		"window_class": "IEFrame",
		"object_text": " Mail ",
		"object_role": "ROLE_SYSTEM_CLIENT",
		"object_class": "Internet Explorer_Server",
		"version": 0,
		"object_type": "HTMLObject",
		"object_flavor": "Cell",
		"object_name": "Mail",
		"object_library": "Internet Explorer HTML",
		"window_name": "regex:Microsoft Office Home - Internet Explorer.*",
		"xpath": "//span[@id='ShellMail_link_text']",
		"title": "Microsoft Office Home",
		"url": "https://www.office.com/1/?auth=2&home=1&from=PortalLanding&trial=1"
	},
	"EmailItem": {
		"locations": [
			{
				"locator_name": "HTML",
				"location": {
					"xpath": "param:xpath",
					"url": "param:url",
					"title": "param:title"
				}
			}
		],
		"window_text": "regex:Mail.*",
		"window_class": "IEFrame",
		"object_text": "\r\n\r\n \r\n\r\n \r\n\r\n \r\n\r\n ",
		"object_role": "ROLE_SYSTEM_CLIENT",
		"object_class": "Internet Explorer_Server",
		"version": 0,
		"object_type": "HTMLObject",
		"object_flavor": "Cell",
		"object_name": "DIV",
		"object_library": "Internet Explorer HTML",
		"window_name": "regex:Mail.*",
		"xpath": "//div[@id='_ariaId_24']",
		"title": "Mail - Sheldon Cooper - Outlook",
		"url": "https://outlook.office365.com/owa/"
	},
	"USER": {
		"locations": [
			{
				"locator_name": "HTML",
				"location": {
					"xpath": "param:xpath",
					"url": "param:url",
					"title": "param:title"
				}
			}
		],
		"window_text": "regex:Mail.*",
		"window_class": "IEFrame",
		"object_text": "\r\n ",
		"object_role": "ROLE_SYSTEM_CLIENT",
		"object_class": "Internet Explorer_Server",
		"version": 0,
		"object_type": "HTMLObject",
		"object_flavor": "Button",
		"object_name": "BUTTON",
		"object_library": "Internet Explorer HTML",
		"window_name": "regex:Mail.*",
		"xpath": "/html/body/div[3]/div/div[@id='primaryContainer']/div[@id='primaryHeaderView']/div/div[@id='O365_NavHeader']/div[@id='O365_TopMenu']/div/div/div[1]/div[14]/button",
		"title": "Mail - Sheldon Cooper - Outlook",
		"url": "https://outlook.office365.com/owa/"
	},
	"SIGNOUT": {
		"locations": [
			{
				"locator_name": "HTML",
				"location": {
					"xpath": "param:xpath",
					"url": "param:url",
					"title": "param:title"
				}
			}
		],
		"window_text": "regex:Mail.*",
		"window_class": "IEFrame",
		"object_text": "param:object_name",
		"object_role": "ROLE_SYSTEM_CLIENT",
		"object_class": "Internet Explorer_Server",
		"version": 0,
		"object_type": "HTMLObject",
		"object_flavor": "Cell",
		"object_name": "Sign out",
		"object_library": "Internet Explorer HTML",
		"window_name": "regex:Mail.*",
		"xpath": "//span[@aria-label='Sign out']",
		"title": "Mail - Sheldon Cooper - Outlook",
		"url": "https://outlook.office.com/owa/"
	},
	"You_signed_out_of_your_account": {
		"locations": [
			{
				"locator_name": "HTML",
				"location": {
					"xpath": "param:xpath",
					"url": "param:url",
					"title": "param:title"
				}
			}
		],
		"window_text": "regex:Sign out - Internet Explorer.*",
		"window_class": "IEFrame",
		"object_text": "param:object_name",
		"object_role": "ROLE_SYSTEM_CLIENT",
		"object_class": "Internet Explorer_Server",
		"version": 0,
		"object_type": "HTMLObject",
		"object_flavor": "Generic",
		"object_name": "You signed out of your account",
		"object_library": "Internet Explorer HTML",
		"window_name": "regex:Sign out - Internet Explorer.*",
		"xpath": "//h1[@id='login_workload_logo_text']",
		"title": "Sign out",
		"url": "https://login.microsoftonline.com/logout.srf"
	}
};