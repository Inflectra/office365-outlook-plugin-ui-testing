# office365-outlook-plugin-ui-testing

The purpose of this sample is to show how to use Rapise to test complex systems that include web UI, desktop UI and remote server components. As application under test we use an Office 365 Outlook Plugin running in a browser (IE, FF, Chrome) and desktop Outlook for Windows. As a server part we use Exchange server accessible via EWS SOAP API.

## Rapise Features

This demo shows several important features of Rapise:

- Cross-browser UI testng
- Embedded browser UI testing
- SOAP API testing
- Subtests

## Demo Steps

### Step 1: Creating Folder and Test Structure
During this step we create necessary tests and files.

### Step 2: Test Initialization/Finalization
- Implementation of test initialization: seeding data (emails) into Exchange mailbox. 
- Implementation of test finalization: removing test emails from the mailbox.

### Step 3: Making the Test
Recording the test in Internet Explorer. Adjusting the test to enable execution in FF, Chrome and Outlook for Windows.

### Step 4: Test Execution
Execution of the test in IE, FF, Chrome and Outlook for Windows.

### Step 5: Results
Analysis of the results.


