import * as xlsx from 'xlsx';

import generateXmlElement_SCH_0 from './generateXmlElement_SCH_0';

const generateXMLData_SCH_0 = (
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
  for (let R = 10; R <= maxRowIndex; ++R) {
    const row: (string | number)[] = [];
    for (let C = 1; C <= maxColumnIndex; ++C) {
      const cellAddress = xlsx.utils.encode_cell({ c: C, r: R });
      const cell = worksheet[cellAddress];
      //console.log('row--' + row)
      row.push(cell ? cell.v : '');
    }
    dataSheet.push(row);
  }

  let xmlData = '';
  let hasData = false;
  let xmlElement = "";
  
    dataSheet.forEach((row,cell,index) => {
    xmlElement += generateXmlElement_SCH_0("C0010", row[3] ,row[2].toString());
    let cellValue: string = cell === 0 ? '0' : (cell || '').toString(); // Ensure cellValue is always a string
    if (cellValue.trim() !== '') {
      hasData = true;
    }
    // End dynamic tag based on xmlTag
    // Only append xmlElement if it contains non-empty data
   
  });
  if (hasData) {
    xmlData += xmlElement;
  }

  xmlElement += `</${xmlTag}_T>\n`;
  
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
      transactionTag = `<${xmlTag}_T>\n${xmlData}\n</${xmlTag}_T>`;
    }
    xmlData = `<${xmlTag}_Item>\n<Transaction_Date>${escapedTransactionDate}</Transaction_Date>\n${transactionTag}\n</${xmlTag}_Item>`;
  }

 return xmlData;
};

export default generateXMLData_SCH_0;
