let
    google = require('googleapis'),
    privatekey = require("./privatekey.json"),
    spreadsheetId = '12EYojbEtL05uF2WvNWtE1sdeoXPCYsmm75kRu40bsXQ',
    sheetName = 'A1:B2',
    sheets = google.sheets('v4');

// configure a JWT auth client
let
    jwtClient = new google.auth.JWT(
        privatekey.client_email,
        null,
        privatekey.private_key,
        ['https://www.googleapis.com/auth/spreadsheets',
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/calendar']);


module.exports = (req, res) => {
    let
        datas = req.body;

    auth();
    setValues(datas)
        .then(d => res.send(d));
}

function setValues(datas) {
    let
        range = 'Página1!A:F',
        valueInputOption = 'RAW',
        values = [
            datas.map(i => i.name),
            // Additional rows ...
        ],
        body = {
            values: values
        };

    return new Promise((resolve, reject) => {
        sheets.spreadsheets.values.append({
            spreadsheetId: spreadsheetId,
            range: range,
            auth: jwtClient,
            valueInputOption: valueInputOption,
            resource: body
        }, function (err, result) {
            if (err) {
                // Handle error
                reject(err);
                console.log(err);
            } else {
                console.log('%d cells updated.', result.updatedCells);
                resolve({ sucess: result.updatedCells });
            }
        });
    })
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


