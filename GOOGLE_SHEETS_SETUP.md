# 🚀 Google Sheets Email Integration Setup

This guide will help you connect your CommuteTimely email capture form to Google Sheets using Google Apps Script.

## 📋 Prerequisites
- Google account
- Access to Google Sheets
- Your CommuteTimely website code

## 🎯 Step-by-Step Setup

### Step 1: Create Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **+** to create a new spreadsheet
3. Name it "CommuteTimely Waitlist"
4. Add these headers in row 1:
   - **A1**: `Timestamp`
   - **B1**: `First Name`
   - **C1**: `Email`
   - **D1**: `Use Case`
   - **E1**: `Location`
   - **F1**: `Commute Type`
   - **G1**: `Source`
5. Format the headers (make them bold, add background color)

### Step 2: Set up Google Apps Script
1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. This opens the Google Apps Script editor
3. Replace the default code with this script:

```javascript
function doPost(e) {
  try {
    // Get the sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const timestamp = new Date().toISOString();
    const firstName = data.firstName || '';
    const email = data.email;
    const useCase = data.useCase || '';
    const location = data.location || '';
    const commuteType = data.commuteType || '';
    const source = data.source || 'Website';
    
    // Validate email
    if (!email || !email.includes('@')) {
      throw new Error('Invalid email address');
    }
    
    // Check if email already exists
    const existingEmails = sheet.getRange(2, 3, sheet.getLastRow(), 1).getValues().flat();
    if (existingEmails.includes(email)) {
      return ContentService
        .createTextOutput(JSON.stringify({ 
          success: true, 
          message: 'Email already exists in waitlist' 
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Add the data to the sheet
    sheet.appendRow([timestamp, firstName, email, useCase, location, commuteType, source]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Email added successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('CommuteTimely Email Service is running!')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

### Step 3: Deploy the Script
1. Click **Deploy** → **New deployment**
2. Choose **Web app**
3. Configure the deployment:
   - **Description**: "CommuteTimely Email Handler v1"
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Authorize** the app when prompted
6. Copy the **Web app URL** (looks like: `https://script.google.com/macros/s/AKfycbz.../exec`)

### Step 4: Update Your React App
1. Open `src/config.ts` in your project
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your actual web app URL:

```typescript
export const config = {
  GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/YOUR_ACTUAL_URL/exec',
  // ... other config
};
```

### Step 5: Test the Integration
1. Start your development server: `npm start`
2. Go to your website
3. Submit a test email with all the fields
4. Check your Google Sheet - the data should appear with all fields

## 🔧 Advanced Features

### Data Collection
The form now collects:
- **First Name** (optional)
- **Email Address** (required)
- **Use Case** (how they plan to use the app)
- **Location** (city/region for market research)
- **Commute Type** (driving, transit, etc.)
- **Source** (website identifier)

### Email Validation
The script includes basic email validation and duplicate checking.

### Error Handling
The script handles errors gracefully and returns appropriate responses.

## 🚨 Troubleshooting

### Common Issues:

1. **CORS Error**: Make sure your Google Apps Script is deployed as a web app with "Anyone" access
2. **Authorization Error**: You need to authorize the script when first deploying
3. **URL Not Found**: Double-check the web app URL in your config file
4. **Emails Not Appearing**: Check the Google Apps Script logs for errors

### Testing:
- Use the browser's developer tools to check network requests
- Check the Google Apps Script execution logs
- Verify the Google Sheet permissions

## 📊 Monitoring

### View Logs:
1. Go to Google Apps Script
2. Click on your project
3. Go to **Executions** tab
4. View recent executions and logs

### Sheet Analytics:
- Track signups over time
- Monitor conversion rates by use case
- Analyze geographic distribution
- Export data for email marketing

## 🔒 Security Notes

- The script validates email format
- Duplicate emails are handled gracefully
- No sensitive data is stored beyond basic contact info
- Consider adding rate limiting for production use

## 🎉 Success!

Once set up, every form submission will:
1. ✅ Validate the email format
2. ✅ Check for duplicates
3. ✅ Add all form data to your Google Sheet with timestamp
4. ✅ Return success/error response to your website
5. ✅ Show appropriate feedback to users

Your enhanced waitlist is now fully functional! 🚀 