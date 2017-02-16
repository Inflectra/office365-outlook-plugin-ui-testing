
//########## Script Steps ##############

function Test()
{
	var WebServiceEWS=SeS('WebServiceEWS');
	
	var userName = Common_GetParameter("UserName");
	var password = Common_GetParameter("Password");	
	
	WebServiceEWS.SetCredential(userName, password);

	var res = WebServiceEWS.DoExecute('GetFolder', {"GetFolder1":{"FolderShape":{"BaseShape":"AllProperties","AdditionalProperties":null},"FolderIds":[{"@Type":"EWS2.ews.DistinguishedFolderIdType","Mailbox":null,"Id":"inbox","ChangeKey":null}]}}, {"RequestServerVersionValue":{"Version":"Exchange2010_SP1","AnyAttr":null}} );
	if (res)
	{
		var folderId = WebServiceEWS.GetResponseObject("Body.result.ResponseMessages.Items[0].Folders[0].FolderId.Id");
		var subject = "Imported from Rapise Email 1";
		var body = g_helper.FileRead("Emails/Email1.txt");
		var res = 	WebServiceEWS.DoExecute('CreateItem', {"CreateItem1":{"SavedItemFolderId":{"@Type":"EWS2.ews.TargetFolderIdType","Item":{"@Type":"EWS2.ews.FolderIdType","Id":folderId,"ChangeKey":null}},"Items":{"Items":[{"@Type":"EWS2.ews.MessageType","Sender":null,"ToRecipients":[{"Name":"Leonard Hofstadter","EmailAddress":"leonard@example.com","RoutingType":null,"ItemId":null}],"CcRecipients":null,"BccRecipients":null,"ConversationIndex":null,"ConversationTopic":null,"From":{"Item":{"Name":"Sheldon Cooper","EmailAddress":"sheldon@example.com","RoutingType":null,"ItemId":null}},"InternetMessageId":null,"References":null,"ReplyTo":null,"ReceivedBy":null,"ReceivedRepresenting":null,"MimeContent":null,"ItemId":null,"ParentFolderId":null,"ItemClass":null,"Subject":subject,"Body":{"BodyType1":"TEXT","Value":body},"Attachments":null,"Categories":null,"InReplyTo":null,"InternetMessageHeaders":null,"ResponseObjects":null,"ReminderMinutesBeforeStart":null,"DisplayCc":null,"DisplayTo":null,"ExtendedProperty":[{"ExtendedFieldURI":{"PropertySetId":null,"PropertyTag":"3591","PropertyName":null,"PropertyType":"Integer"},"Item":"1"}],"Culture":null,"EffectiveRights":null,"LastModifiedName":null,"WebClientReadFormQueryString":null,"WebClientEditFormQueryString":null,"ConversationId":null,"UniqueBody":null}]},"MessageDisposition":"SaveOnly","MessageDispositionSpecified":true}}, {"RequestServerVersionValue":{"Version":"Exchange2010_SP1","AnyAttr":null}} );
		if (res)
		{
			var itemId = WebServiceEWS.GetResponseObject("Body.result.ResponseMessages.Items[0].Items.Items[0].ItemId.Id");
			Tester.Message(itemId);
		}
	}
}

g_load_libraries=["%g_browserLibrary:Internet Explorer HTML%","Web Service"];



