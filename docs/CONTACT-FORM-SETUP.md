# Contact form delivery — Google (free, no third party)

The website form currently **simulates** success and delivers nowhere. This sets up real delivery using **only Google** — a Google Apps Script web app that (1) emails hello@virtualivy.net and (2) logs every enquiry to a Google Sheet.

## Option A (recommended): Google Apps Script → email + Sheet

### Steps (≈5 min)
1. Go to **sheets.google.com** → create a new blank sheet, name it **"Virtual Ivy Leads"**.
2. In that sheet: **Extensions → Apps Script**.
3. Delete any placeholder code, paste the script below, click **Save** (disk icon).
4. Click **Deploy → New deployment** → gear icon → **Web app**.
   - Description: `Virtual Ivy contact form`
   - **Execute as: Me**
   - **Who has access: Anyone**
   - **Deploy** → authorise (choose your Google account → Advanced → Allow).
5. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/AKfy…/exec`).
6. **Send me that URL** — I wire it into the site (one line) and the form delivers for real.

### The script (paste into Apps Script)
```javascript
function doPost(e) {
  try {
    var p = (e && e.parameter) ? e.parameter : {};
    var name = ((p['First Name'] || '') + ' ' + (p['Last Name'] || '')).trim() || (p.name || '');
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Leads') || ss.insertSheet('Leads');
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Time','Name','Email','Organisation','Service','Message','Form']);
    }
    sheet.appendRow([new Date(), name, p.email || '', p.Organisation || '',
                     p.Service || '', p.Message || '', p.form_type || '']);
    MailApp.sendEmail({
      to: 'hello@virtualivy.net',
      replyTo: p.email || 'hello@virtualivy.net',
      subject: 'New website enquiry — ' + (name || 'Virtual Ivy'),
      body: 'Name: ' + name +
            '\nEmail: ' + (p.email || '') +
            '\nOrganisation: ' + (p.Organisation || '') +
            '\nService: ' + (p.Service || '') +
            '\nForm: ' + (p.form_type || '') +
            '\n\nMessage:\n' + (p.Message || '')
    });
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```
> Tip: in the Sheet, **Tools → Notification settings** can also alert you on every new row, as a backup to the email.

### What I do once you send the URL
I replace the placeholder endpoint in `assets/main.js` and switch the post to the Google web app (URL-encoded, `no-cors`). The form keeps its current success message; submissions then land in your inbox + Sheet. Field names already match (First Name, Last Name, email, Organisation, Service, Message, form_type).

---

## Option B (no code): Google Forms
If you'd rather not touch Apps Script:
1. Create a **Google Form** with fields: First name, Last name, Email, Organisation, Service, Message.
2. Form **Settings → Responses → turn on "Get email notifications for new responses."** (Responses also auto-save to a linked Sheet.)
3. Send me the form's **"Get pre-filled link"** URL — I extract the field IDs and post the website form to it.
Slightly more fiddly to wire than Option A, but zero code on your side.

Either way: **100% Google, free, no Formspree.**
