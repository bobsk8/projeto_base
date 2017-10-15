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

//Google Sheets API
let 
    spreadsheetId = '12EYojbEtL05uF2WvNWtE1sdeoXPCYsmm75kRu40bsXQ',
    sheetName = 'A1:B2',
    sheets = google.sheets('v4');

module.exports = (req, res) => {
    auth();
    getValues()
        .then(data => res.send(data));
}

function getValues() {
    let
        data = [];
    return new Promise((resolve, reject) => {
        sheets.spreadsheets.values.get({
            auth: jwtClient,
            spreadsheetId: spreadsheetId,
            range: sheetName
        }, function (err, response) {
            if (err) {
                reject(err);
                console.log('The API returned an error: ' + err);
            } else {
                console.log('Movie list from Google Sheets:');
                for (let row of response.values) {
                    data.push({ title: row[0], rating: row[1] })
                    console.log('Title [%s]\t\tRating [%s]', row[0], row[1]);
                }
                resolve(data);
            }
        });
    });
}

function auth() {
    //authenticate request
    jwtClient.authorize(function (err, tokens) {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Successfully connected!");
        }
    });
}