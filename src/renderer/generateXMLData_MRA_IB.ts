import * as xlsx from 'xlsx';
import columnHeaders from './columnHeaders';
import generateXmlElement_MRA_IB from './generateXmlElement_MRA_IB';


const generateXMLData_MRA_IB = (
  workbook: xlsx.WorkBook,
  sheetName: string,
  xmlTag: string,
  transactionDate: string | null | undefined
): string => {
  const worksheet = workbook.Sheets[sheetName];
  if (!worksheet) return '';

  const maxRowIndex = (() => {
    let maxRow = 0;
    // Find the maximum row index
    // eslint-disable-next-line no-restricted-syntax
    for (const cellAddress in worksheet) {
      if (
        cellAddress.match(/[A-Z]+[1-9][0-9]*$/) &&
        worksheet[cellAddress].v !== undefined
      ) {
        const row = parseInt(cellAddress.match(/[1-9][0-9]*$/)[0], 10);
        maxRow = Math.max(maxRow, row);
      }
    }
    return maxRow;
  })();

  const columnHeader_MRA_IB = [
    'C0010',
    'C0020',
    'C0030',
    'C0040',
    'C0050',
    'C0060',
    'C0070',
    'C0080',
    'C0090',
    'C0100',
    'C0110',
    'C0120',
    'C0130',
    'C0140',
    'C0150',
    'C0160',
    'C0170',
    'C0180',
    'C0190',
    'C0200',
    'C0210',
    'C0220',
    'C0230',
    'C0240',
    'C0250',
    'C0260',
    'C0270',
    'C0280',
    'C0290',
    'C0300',
    'C0310',
    'C0320',
    'C0330',
    'C0340',
    'C0350',
    'C0360',
    'C0370',
    'C0380',
    'C0390',
    'C0400',
    'C0410',
    'C0420',
    'C0430',
    'C0440',
    'C0450',
    'C0460',
    'C0470',
    'C0480',
    'C0490',
    'C0500',
    'C0510',
    'C0520',
    'C0530',
    'C0540',
    'C0550',
    'C0560',
    'C0570',
    'C0580',
    'C0590',
    'C0600',
    'C0610',
    'C0620',
    'C0630',
    'C0640',
  ]
  

  const maxColumnIndex = (() => {
    let maxCol = 0;
    // Find the maximum column index
    // eslint-disable-next-line no-restricted-syntax
    for (const cellAddress in worksheet) {
      if (
        cellAddress.match(/[A-Z]+[1-9][0-9]*$/) &&
        worksheet[cellAddress].v !== undefined
      ) {
        const col = xlsx.utils.decode_col(cellAddress.match(/[A-Z]+/)[0]);
        maxCol = Math.max(maxCol, col);
      }
    }
    return maxCol;
  })();

  const dataSheet: (string | number)[][] = [];

  // Populate the dataSheet array with cell values
  for (let R = 11; R <= maxRowIndex; ++R) {
    const row: (string | number)[] = [];
    for (let C = 3; C <= maxColumnIndex; ++C) {
      const cellAddress = xlsx.utils.encode_cell({ c: C, r: R });
      const cell = worksheet[cellAddress];
      row.push(cell ? cell.v : '');
    }
    dataSheet.push(row);
  }
  let xmlData = '';
  dataSheet.forEach((row,index) => {
    let rowId: string | number;
    let hasData = false;
    let xmlElement = '';
    let cellVl :string | number;
    //console.log('row=======' +row)
  if(index>0){
    row.forEach((cell, index) => {
      let cellValue: string | number = cell === 0 ? '0' : (cell || '').toString(); // Ensure cellValue is always a string
       //console.log('index====' + index)
       //console.log('cell====' + cell)

      if(index==0){
        rowId = cell;
      }
    
      
     
      xmlElement += generateXmlElement_MRA_IB(columnHeader_MRA_IB[index-1], cellValue, rowId, index);
      
      if (cellValue.toString().trim() !== '') {
        hasData = true;
      }
    });
    }

  xmlElement += '';
  if (hasData) {
      xmlData += xmlElement;
    }
  });

  // Conditionally wrap xmlData under SCH_1_Item tag with Transaction_Date
  if (
    transactionDate !== null &&
    transactionDate !== undefined &&
    transactionDate !== ''
  ) {
    // Replace special characters like '&' with '&amp;' to comply with XML
    const escapedTransactionDate = transactionDate.replace(/&/g, '&amp;');
    let transactionTag = '';
    if (xmlData.trim() !== '') {
      transactionTag = `<${xmlData}`;
    }
    xmlData = `<Previous_Date>${escapedTransactionDate}</Previous_Date><Initial_Balance>\n${xmlData}</Initial_Balance>`;
  return xmlData;
};
}

export default generateXMLData_MRA_IB;
