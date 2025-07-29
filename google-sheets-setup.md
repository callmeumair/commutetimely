# Google Sheets Email Integration Setup

## Step 1: Create Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "CommuteTimely Waitlist"
4. Add headers in row 1: `Email`, `Timestamp`, `Source`

## Step 2: Set up Google Apps Script
1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Replace the default code with this script:

```javascript
function doPost(e) {
  try {
    // Get the sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const email = data.email;
    const timestamp = new Date().toISOString();
    const source = data.source || 'Website';
    
    // Add the data to the sheet
    sheet.appendRow([email, timestamp, source]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Email added successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('CommuteTimely Email Service is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

## Step 3: Deploy the Script
1. Click **Deploy** → **New deployment**
2. Choose **Web app**
3. Set:
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Copy the **Web app URL** (you'll need this for the form)

## Step 4: Update Your React Form
Replace the form submission in your React app with this code.

## Step 5: Test
Submit a test email to verify it appears in your Google Sheet. 