
//########## Script Steps ##############

function Test(params)
{
	var WebServiceEWS=SeS('WebServiceEWS');
	
	var userName = Common_GetParameter("UserName");
	var password = Common_GetParameter("Password");	
	
	WebServiceEWS.SetCredential(userName, password);

	var res = WebServiceEWS.DoExecute('GetFolder', {"GetFolder1":{"FolderShape":{"BaseShape":"AllProperties","AdditionalProperties":null},"FolderIds":[{"@Type":"EWS2.ews.DistinguishedFolderIdType","Mailbox":null,"Id":"inbox","ChangeKey":null}]}}, {"RequestServerVersionValue":{"Version":"Exchange2010_SP1","AnyAttr":null}} );
	if (res)
	{
		var folderId = WebServiceEWS.GetResponseObject("Body.result.ResponseMessages.Items[0].Folders[0].FolderId.Id");
		
		var dataRowNum = Common_GetDataRowNum(params);
		Spreadsheet.DoAttach('../../Data.xlsx');
		var fromName = Spreadsheet.GetCell("Contact 1", dataRowNum);
		var fromEmail = Spreadsheet.GetCell("Contact 1 Email", dataRowNum);
		var toName = Spreadsheet.GetCell("Contact 2", dataRowNum);
		var toEmail = Spreadsheet.GetCell("Contact 2 Email", dataRowNum);
		var subject = Spreadsheet.GetCell("Subject", dataRowNum);
		var emailFilePath = g_helper.ResolvePath("Emails/" + Spreadsheet.GetCell("Email Text", dataRowNum));
		var body = g_helper.FileRead(emailFilePath);
		
		var res = 	WebServiceEWS.DoExecute('CreateItem', {"CreateItem1":{"SavedItemFolderId":{"@Type":"EWS2.ews.TargetFolderIdType","Item":{"@Type":"EWS2.ews.FolderIdType","Id":folderId,"ChangeKey":null}},"Items":{"Items":[{"@Type":"EWS2.ews.MessageType","Sender":null,"ToRecipients":[{"Name":toName,"EmailAddress":toEmail,"RoutingType":null,"ItemId":null}],"CcRecipients":null,"BccRecipients":null,"ConversationIndex":null,"ConversationTopic":null,"From":{"Item":{"Name":fromName,"EmailAddress":fromEmail,"RoutingType":null,"ItemId":null}},"InternetMessageId":null,"References":null,"ReplyTo":null,"ReceivedBy":null,"ReceivedRepresenting":null,"MimeContent":null,"ItemId":null,"ParentFolderId":null,"ItemClass":null,"Subject":subject,"Body":{"BodyType1":"TEXT","Value":body},"Attachments":null,"Categories":null,"InReplyTo":null,"InternetMessageHeaders":null,"ResponseObjects":null,"ReminderMinutesBeforeStart":null,"DisplayCc":null,"DisplayTo":null,"ExtendedProperty":[{"ExtendedFieldURI":{"PropertySetId":null,"PropertyTag":"3591","PropertyName":null,"PropertyType":"Integer"},"Item":"1"}],"Culture":null,"EffectiveRights":null,"LastModifiedName":null,"WebClientReadFormQueryString":null,"WebClientEditFormQueryString":null,"ConversationId":null,"UniqueBody":null}]},"MessageDisposition":"SaveOnly","MessageDispositionSpecified":true}}, {"RequestServerVersionValue":{"Version":"Exchange2010_SP1","AnyAttr":null}} );
		if (res)
		{
			var itemId = WebServiceEWS.GetResponseObject("Body.result.ResponseMessages.Items[0].Items.Items[0].ItemId.Id");
			Tester.Message(itemId);
		}
	}
}

g_load_libraries=["%g_browserLibrary:Internet Explorer HTML%","Web Service"];



