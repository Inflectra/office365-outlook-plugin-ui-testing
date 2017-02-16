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
	},
	"PLUGIN": {
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
		"object_text": "",
		"object_role": "ROLE_SYSTEM_CLIENT",
		"object_class": "Internet Explorer_Server",
		"version": 0,
		"object_type": "HTMLObject",
		"object_flavor": "Image",
		"object_name": "IMG",
		"object_library": "Internet Explorer HTML",
		"window_name": "regex:Mail.*",
		"xpath": "//img[contains(@src, 'https://cloud.grinmark.com')]",
		"title": "Mail - Sheldon Cooper - Outlook",
		"url": "https://outlook.office365.com/owa/"
	},
	"TextMiner": {
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
		"object_name": "TextMiner",
		"object_library": "Internet Explorer HTML",
		"window_name": "regex:Mail.*",
		"xpath": "//span[contains(@class,'o365-EXTP-appTitle')]",
		"title": "Mail - Sheldon Cooper - Outlook",
		"url": "https://outlook.office365.com/owa/"
	},
	"Sheldon_Cooper": {
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
		"object_text": " Sheldon Cooper   ",
		"object_role": "ROLE_SYSTEM_CLIENT",
		"object_class": "Internet Explorer_Server",
		"version": 0,
		"object_type": "HTMLObject",
		"object_flavor": "Generic",
		"object_name": "Sheldon Cooper",
		"object_library": "Internet Explorer HTML",
		"window_name": "regex:Mail.*",
		"xpath": "//iframe[@title='TextMiner']@@@//div[@class='list-group']/a[1]/h4",
		"title": "Mail - Sheldon Cooper - Outlook",
		"url": "https://outlook.office365.com/owa/"
	},
	"Leonard_Hofstadter": {
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
		"object_text": " Leonard Hofstadter   ",
		"object_role": "ROLE_SYSTEM_CLIENT",
		"object_class": "Internet Explorer_Server",
		"version": 0,
		"object_type": "HTMLObject",
		"object_flavor": "Generic",
		"object_name": "Leonard Hofstadter",
		"object_library": "Internet Explorer HTML",
		"window_name": "regex:Mail.*",
		"xpath": "//iframe[@title='TextMiner']@@@//div[@class='list-group']/a[2]/h4",
		"title": "Mail - Sheldon Cooper - Outlook",
		"url": "https://outlook.office365.com/owa/"
	},
	"ContactsCount": {
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
		"object_name": "2",
		"object_library": "Internet Explorer HTML",
		"window_name": "regex:Mail.*",
		"xpath": "//iframe[@title='TextMiner']@@@//span[@class='badge ng-binding']",
		"title": "Mail - Sheldon Cooper - Outlook",
		"url": "https://outlook.office365.com/owa/"
	},
	"Internet_Explorer": {
		"locations": [
			{
				"locator_name": "Location",
				"location": {
					"location": "4.3.4.1.4.1.4.3",
					"window_name": "",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "LocationPath",
				"location": {
					"window_name": "",
					"window_class": "param:window_class",
					"path": [
						{
							"object_name": "param:object_name",
							"object_class": "param:object_class",
							"object_role": "param:object_role"
						},
						{
							"object_name": "param:object_text",
							"object_class": "param:object_class",
							"object_role": "ROLE_SYSTEM_TOOLBAR"
						},
						{
							"object_name": "param:object_text",
							"object_class": "param:object_class",
							"object_role": "ROLE_SYSTEM_WINDOW"
						},
						{
							"object_name": "param:object_text",
							"object_class": "MSTaskSwWClass",
							"object_role": "ROLE_SYSTEM_CLIENT"
						},
						{
							"object_name": "param:object_text",
							"object_class": "MSTaskSwWClass",
							"object_role": "ROLE_SYSTEM_WINDOW"
						},
						{
							"object_name": "",
							"object_class": "ReBarWindow32",
							"object_role": "ROLE_SYSTEM_CLIENT"
						},
						{
							"object_name": "",
							"object_class": "ReBarWindow32",
							"object_role": "ROLE_SYSTEM_WINDOW"
						},
						{
							"object_name": "",
							"object_class": "param:window_class",
							"object_role": "ROLE_SYSTEM_CLIENT"
						}
					]
				}
			},
			{
				"locator_name": "LocationRect",
				"location": {
					"window_name": "",
					"window_class": "param:window_class",
					"rect": {
						"object_name": "param:object_name",
						"object_class": "param:object_class",
						"object_role": "param:object_role",
						"x": 196,
						"y": 0,
						"w": 106,
						"h": 72
					}
				}
			}
		],
		"window_text": "",
		"window_class": "Shell_TrayWnd",
		"object_text": "Running applications",
		"object_role": "ROLE_SYSTEM_BUTTONMENU",
		"object_class": "MSTaskListWClass",
		"version": 0,
		"object_type": "SeSSimulated",
		"object_flavor": "Simulated",
		"object_name": "Internet Explorer",
		"window_name": ""
	}
};