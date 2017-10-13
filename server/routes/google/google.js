let google = require('googleapis');
let privatekey = require("./privatekey.json");

// configure a JWT auth client
let jwtClient = new google.auth.JWT(
    privatekey.client_email,
    null,
    privatekey.private_key,
    ['https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/calendar']);
//authenticate request
jwtClient.authorize(function (err, tokens) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("Successfully connected!");
    }
});

function drive(){
    //Google Drive API
    let drive = google.drive('v3');
    drive.files.list({
       auth: jwtClient,
       q: "name contains 'TV'"
    }, function (err, response) {
       if (err) {
           console.log('The API returned an error: ' + err);
           return;
       }
       var files = response.files;
       if (files.length == 0) {
           console.log('No files found.');
       } else {
           console.log('Files from Google Drive:');
           for (var i = 0; i < files.length; i++) {
               var file = files[i];
               console.log('%s (%s)', file.name, file.id);
           }
       }
    });
}




function calendar(){
    //Google Calendar API
    let calendar = google.calendar('v3');
    calendar.events.list({
       auth: jwtClient,
       calendarId: 'primary'
    }, function (err, response) {
       if (err) {
           console.log('The API returned an error: ' + err);
           return;
       }
       var events = response.items;
       if (events.length == 0) {
           console.log('No events found.');
       } else {
           console.log('Event from Google Calendar:');
           for (let event of response.items) {
               console.log('Event name: %s, Creator name: %s, Create date: %s', event.summary, event.creator.displayName, event.start.date);
           }
       }
    });
}







//Google Sheets API
let spreadsheetId = '12EYojbEtL05uF2WvNWtE1sdeoXPCYsmm75kRu40bsXQ';
let sheetName = 'A1:B2'
let sheets = google.sheets('v4');

function getValues() {
    sheets.spreadsheets.values.get({
        auth: jwtClient,
        spreadsheetId: spreadsheetId,
        range: sheetName
    }, function (err, response) {
        if (err) {
            console.log('The API returned an error: ' + err);
        } else {
            console.log('Movie list from Google Sheets:');
            for (let row of response.values) {
                console.log('Title [%s]\t\tRating [%s]', row[0], row[1]);
            }
        }
    });
}

function setValues() {
    let range = 'A4:B5',
        valueInputOption = 'RAW';
    var values = [
        [
            'teste'
        ],
        // Additional rows ...
    ];
    var body = {
        values: values
    };
    sheets.spreadsheets.values.update({
        spreadsheetId: spreadsheetId,
        range: range,
        valueInputOption: valueInputOption,
        resource: body
    }, function (err, result) {
        if (err) {
            // Handle error
            console.log(err);
        } else {
            console.log('%d cells updated.', result.updatedCells);
        }
    });
}

// function test() {
//     sheets.spreadsheets.values.update({
//         auth: auth,
//         spreadsheetId: '12EYojbEtL05uF2WvNWtE1sdeoXPCYsmm75kRu40bsXQ',
//         range: ['1:12'],
//         valueInputOption: 'RAW',
//         resource: body
//     }, function (err, result) {
//         if (err) {
//             // Handle error
//             console.log(err);
//         } else {
//             console.log('%d cells updated.', result.updatedCells);
//         }
//     });
// }

//getValues();
setValues();
