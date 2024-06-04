import * as xlsx from 'xlsx';
import columnHeaders from './columnHeaders';
import generateXmlElement_MRA from './generateXmlElement_MRA';


const generateXMLData_MRA = (
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

  const columnHeader_MRA = [
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
  ]
  const columnHeadersMRA_2 = [
    'C0010',
    'C0020',
    'C0030',
    'C0040',
    'C0050',
    'C0060',
    'C0070',
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
  let xmlData1 = '';
  //const columnHeadersForSheet = columnHeaders[xmlTag]; // Get column headers based on xmlTag name
  dataSheet.forEach((row,index) => {
    let rowId: string | number;
    let rowIdNew :number;
    let rowIdStr = '';

    let hasData = false;
    let xmlElement = '';
    let xmlElement2 = '';
    
    if(index>=161){
    row.forEach((cell, index) => {
      let cellValue: string = cell === 0 ? '0' : (cell || '').toString(); // Ensure cellValue is always a string
      // Replace special characters like '&' with '&amp;' to comply with XML
      if(index==0){
        rowId = cell;
      }
      cellValue = cellValue.replace(/&/g, '&amp;');
      xmlElement2 += generateXmlElement_MRA(columnHeadersMRA_2[index-1], cellValue, rowId);
      if (cellValue.trim() !== '') {
        hasData = true;
      }
    });
  }
  else{
    row.forEach((cell, index,array) => {
      let cellValue: string = cell === 0 ? '0' : (cell || '').toString();
      if(typeof cellValue=='string'){
        if(cellValue.charAt(0)=='R'){
        let cellCharNo = cellValue.slice(1, cellValue.length);
          if(cellCharNo.length==4){
              rowIdNew = Number(cellCharNo);
          }
       }
    }
    if(Number(cellValue)>=0 ){
      if(rowIdNew<100){
        rowIdStr = 'R00'+ rowIdNew;
      }
      else if(rowIdNew>90 && rowIdNew<1000){
        rowIdStr = 'R0'+ rowIdNew;
      }
      else if(rowIdNew>990){
        rowIdStr = 'R'+ rowIdNew;
      }
     
      const val = generateXmlElement_MRA(columnHeader_MRA[index-1], cellValue,rowIdStr);
      cellValue = cellValue.replace(/&/g, '&amp;');
      xmlElement += val !== undefined ? val : '';
      if (cellValue.trim() !== '') {
        hasData = true;
      }
      }
    });
  }
  xmlElement += '';
  xmlElement2 += '';
 // Only append xmlElement if it contains non-empty data
    if (hasData) {
      xmlData += xmlElement;
      xmlData1 += xmlElement2;
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
    xmlData = `<${xmlTag}_Item>\n<Transaction_Date>${escapedTransactionDate}</Transaction_Date><MRA_BALANCE_SHEET>\n${xmlData}</MRA_BALANCE_SHEET>\n<MRA_OTHER_FOREIGN_CURRENCIES>\n<MRA_OTHER_FOREIGN_CURRENCIES_Item>\n${xmlData1}\n</MRA_OTHER_FOREIGN_CURRENCIES_Item>\n</MRA_OTHER_FOREIGN_CURRENCIES>\n</${xmlTag}_Item>`;
  return xmlData;
};
}

export default generateXMLData_MRA;
