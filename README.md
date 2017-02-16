# office365-outlook-plugin-ui-testing

The purpose of this sample is to show how to use Rapise to test complex systems that include web UI, desktop UI and remote server components. As application under test we use an Office 365 Outlook Plugin running in a browser (IE, FF, Chrome) and desktop Outlook for Windows. As a server part we use Exchange server accessible via EWS SOAP API.

## Rapise Features

This demo shows several important features of Rapise:

- Cross-browser UI testng
- Embedded browser UI testing
- SOAP API automation
- Shared objects
- Shared code
- Parameters and data in spreadsheets


## Demo Development Steps

### Step 1: Empty Test
Empty cross-browser test. Browser profile is set to `Internet Explorer HTML`.

### Step 2: SOAP API
During this step we implement SOAP API calls to create/delete emails in Exchange mailbox.

### Step 3: Browser Test
Cross-browser test that opens an email in Office 365 mailbox, starts the plugin and checks the result.

### Step 4: Outlook Test
Launch Outlook, navigate to first email in the Inbox and start the plugin.

### Step 5: Moving Common Objects from Browser Test to Shared Test
Separate test is used to store plugin objects. Verification code moved to Common.js.

### Step 6: Using Shared Objects in Outlook Test
Objects created on the previous step are used to verify plugin state in Outlook test.

### Step 7: Integration
All pieces if the puzzle gathered together.


