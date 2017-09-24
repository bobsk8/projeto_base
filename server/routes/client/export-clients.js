'use strict';

const
  model = require('../../model/clientModel').clientModel,
  excel = require('node-excel-export'),
  styles = {
    headerBlack: {
       fill: {
        fgColor: {
        rgb: 'FF000000'
         }
       },
      font: {
        color: {
          rgb: 'FFFFFFFF'
        },
        sz: 12,
        bold: false,
        underline: false
      }
    },
    cellBlack: {      
        color: {
          rgb: 'FF000000'
        },
        font: {
          color: {
            rgb: 'FF000000'
          },
          sz: 12,
          bold: false,
          underline: false
        }
      
    },
    cellGreen: {
      fill: {
        fgColor: {
          rgb: 'FF00FF00'
        }
      }
    }
  },
  heading = [
    [{ value: 'ID', style: styles.headerBlack }, { value: 'name', style: styles.headerBlack }]    
  ],
  specification = {
    id: { // <- the key should match the actual data key
      displayName: 'ID', // <- Here you specify the column header
      headerStyle: styles.headerBlack, // <- Header style
      cellStyle: styles.cellBlack,
      width: 120 // <- width in pixels
    },
    name: { // <- the key should match the actual data key
      displayName: 'NAME', // <- Here you specify the column header
      headerStyle: styles.headerBlack, // <- Header style
      cellStyle: styles.cellBlack,
      width: 120 // <- width in pixels
    }
  };

// const merges = [
//   { start: { row: 1, column: 1 }, end: { row: 1, column: 10 } },
//   { start: { row: 2, column: 1 }, end: { row: 2, column: 5 } },
//   { start: { row: 2, column: 6 }, end: { row: 2, column: 10 } }
// ]

let
  dataset = [];

module.exports = (req, res) => {
  model.findAll().then(datas => {
    dataset = setClients(datas);    
    const report = excel.buildExport(
      [ 
        {
          name: 'Report', // <- Specify sheet name (optional)
          //heading: heading, // <- Raw heading array (optional)
          // merges: merges, // <- Merge cell ranges
          specification: specification, // <- Report specification
          data: dataset // <-- Report data
        }
      ]
    );

    res.attachment('report.xlsx'); // This is sails.js specific (in general you need to set headers)    
    return res.send(report);

  });
};

function setClients(datas) {  
  let
      clients = [];

  datas.forEach(data => {
    clients.push({id: data.dataValues.id, name: data.dataValues.name})
  });
  return clients;
};
