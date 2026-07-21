# Contact form delivery — Google Sheet + email (replaces Formspree)

Moves form delivery off Formspree onto **Ivy's own Google account**: a Google Apps Script web app that (1) logs every enquiry to the Virtual Ivy Leads Sheet and (2) emails a notification. No third-party account, no 50/month cap, and the website keeps its custom-designed form (and GA4 tracking).

**Target Sheet:** `https://docs.google.com/spreadsheets/d/17bmB41-U_NmOtyNSmEkLom8PkU6sByOLY2oK8dk_Rs0/edit`

---

## The Sheet structure the script creates

Tab name: **Leads**. Headers, frozen top row, filter and the Status dropdown are all created automatically on first submission — nothing to set up by hand.

| Col | Header | Filled by | Notes |
|---|---|---|---|
| A | Timestamp | auto | date + time received |
| B | Form | hidden field | `Contact enquiry` or `Lead magnet: Kenya HR Compliance Checklist` |
| C | Name | form | contact form = First + Last; checklist form = single `name` |
| D | Email | form | used as reply-to on the notification |
| E | Organisation | form | blank for checklist leads |
| F | Service | form | dropdown value from the contact form |
| G | Message | form | blank for checklist leads |
| H | Source page | site | which page the enquiry came from |
| I | **Status** | **Ivy** | dropdown: New / Contacted / Quoted / Won / Lost |
| J | **Notes** | **Ivy** | free text follow-up notes |

Columns **I and J** are the working columns — they turn the log into a simple CRM Ivy runs from her laptop. Every new row defaults to `New`.

---

## Setup steps (≈5 min, done once)

1. Open the Leads Sheet → **Extensions → Apps Script**.
2. Delete any placeholder code, paste the script below, click **Save**.
3. **Set `NOTIFY_EMAIL`** (line 4) to the inbox that is actually monitored.
4. **Deploy → New deployment** → gear icon → **Web app**
   - Description: `Virtual Ivy website form`
   - **Execute as: Me**
   - **Who has access: Anyone**
   - **Deploy** → authorise (your Google account → Advanced → Allow).
5. Copy the **Web app URL** — it ends in `/exec`.
6. **Send that URL over** — it gets wired into `assets/main.js` (one line) and the forms deliver for real.

Health check: paste the `/exec` URL into a browser. It should return `{"ok":true,"status":"Virtual Ivy form endpoint live"}`. If it asks you to log in, access wasn't set to **Anyone** — redeploy.

---

## The script

```javascript
var SHEET_ID     = '17bmB41-U_NmOtyNSmEkLom8PkU6sByOLY2oK8dk_Rs0';
var SHEET_NAME   = 'Leads';
var NOTIFY_EMAIL = 'hello@virtualivy.net';   // <-- set to the inbox you actually read
var HEADERS = ['Timestamp','Form','Name','Email','Organisation','Service','Message','Source page','Status','Notes'];

function doPost(e) {
  try {
    var p  = (e && e.parameter) ? e.parameter : {};
    var sh = getSheet_();

    // contact form sends First/Last; checklist form sends a single "name"
    var name = ((p['First Name'] || '') + ' ' + (p['Last Name'] || '')).trim() || (p.name || '');

    sh.appendRow([
      new Date(),
      p.form_type   || 'Website form',
      name,
      p.email       || '',
      p.Organisation|| '',
      p.Service     || '',
      p.Message     || '',
      p.source_page || '',
      'New',
      ''
    ]);

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      replyTo: p.email || NOTIFY_EMAIL,
      subject: (p._subject || 'New website enquiry') + ' — ' + (name || p.email || ''),
      body: 'Name: '         + name +
          '\nEmail: '        + (p.email || '') +
          '\nOrganisation: ' + (p.Organisation || '') +
          '\nService: '      + (p.Service || '') +
          '\nForm: '         + (p.form_type || '') +
          '\nPage: '         + (p.source_page || '') +
          '\n\nMessage:\n'   + (p.Message || '')
    });

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({ ok: true, status: 'Virtual Ivy form endpoint live' });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSheet_() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) {
    sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS])
      .setFontWeight('bold').setBackground('#1BB5D8').setFontColor('#ffffff');
    sh.setFrozenRows(1);
    sh.setColumnWidth(1, 150); sh.setColumnWidth(7, 320); sh.setColumnWidth(10, 260);
    try { sh.getRange(1, 1, sh.getMaxRows(), HEADERS.length).createFilter(); } catch (ignore) {}
    var rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(['New','Contacted','Quoted','Won','Lost'], true).build();
    sh.getRange(2, 9, sh.getMaxRows() - 1, 1).setDataValidation(rule);
  }
  return sh;
}
```

> Backup alert: in the Sheet, **Tools → Notification settings → notify me when any changes are made** gives a second alert channel independent of `MailApp`.

---

## What happens on the website side once the URL arrives

`assets/main.js` swaps `FORMSPREE_ENDPOINT` for the `/exec` URL, and a `source_page` value is attached to every submission so column H populates. Existing field names already match the script — no changes needed to the form markup. Both forms (contact + checklist lead magnet) use the same handler, so both switch together.

**One known risk, flagged honestly:** Apps Script web apps can be inconsistent about CORS headers, which occasionally prevents the browser from *reading* the response even when the submission succeeds (a false "something went wrong" message on a lead that was actually captured). We test end-to-end straight after deploy. If it happens, the fix is to post in `no-cors` mode and show success optimistically — at which point the Sheet becomes the source of truth for whether a lead landed. Formspree does not have this quirk, which is its one genuine advantage.

---

## Alternative (no code): native Google Form
If Apps Script is unwanted: build a Google Form with First name / Last name / Email / Organisation / Service / Message, turn on **Settings → Responses → email notifications**, and it gets embedded in `/contact` as an iframe. Simplest and unbreakable, but it loses the custom form design on the highest-intent page and GA4 can't track submissions inside an iframe.
