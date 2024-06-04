// readUploadFile.ts
import * as xlsx from 'xlsx';
import columnHeaders from './columnHeaders';
import generateXMLData from './generateXMLData';
import createXMLData from './createXMLData';
import generateXMLData_SCH_0 from './generateXMLData_SCH_0';
import generateXMLData_MRA from './generateXMLData_MRA';
import generateXMLData_MRA_IB from './generateXMLData_MRA_IB';

 

const readUploadFile = (file: Blob) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const data = e.target?.result;
    if (!data) return;
    const workbook = xlsx.read(data, { type: 'array' });
    const sheetNames = workbook.SheetNames;

    sheetNames.forEach((sheetName, index) => {
      //console.log(`Sheet index: ${index}, Sheet name: ${sheetName}`);
    });

    let SCH_0_TOTAL = '';
   

    let MRA_1B_TOTAL = '';
    let MRA_TOTAL = '';
    
    
    

    const MRA_IB_DATE = workbook.Sheets[sheetNames[1]]['A6'] ? workbook.Sheets[sheetNames[1]]['A6'].w : '';
    const MRA_DATE = workbook.Sheets[sheetNames[2]]['A6'] ? workbook.Sheets[sheetNames[2]]['A6'].w : '';
    
    const MRA_2_DATE = workbook.Sheets[sheetNames[19]]['A6'] ? workbook.Sheets[sheetNames[19]]['A6'].w : '';
    const MRA_3_DATE = workbook.Sheets[sheetNames[37]]['A6'] ? workbook.Sheets[sheetNames[37]]['A6'].w : '';
    const MRA_4_DATE = workbook.Sheets[sheetNames[54]]['A6'] ? workbook.Sheets[sheetNames[54]]['A6'].w : '';
    const MRA_5_DATE = workbook.Sheets[sheetNames[71]]['A6'] ? workbook.Sheets[sheetNames[71]]['A6'].w : '';
 
   
    const SCH_0_1_DATE = workbook.Sheets[sheetNames[0]]['A6'] ? workbook.Sheets[sheetNames[0]]['A6'].w : '';
    const SCH_0_2_DATE = workbook.Sheets[sheetNames[18]]['A6'] ? workbook.Sheets[sheetNames[18]]['A6'].w : '';
    const SCH_0_3_DATE = workbook.Sheets[sheetNames[36]]['A6'] ? workbook.Sheets[sheetNames[36]]['A6'].w : '';
    const SCH_0_4_DATE = workbook.Sheets[sheetNames[53]]['A6'] ? workbook.Sheets[sheetNames[53]]['A6'].w : '';
    const SCH_0_5_DATE = workbook.Sheets[sheetNames[70]]['A6'] ? workbook.Sheets[sheetNames[70]]['A6'].w : '';



    let SCH_1_TOTAL = '';
    let SCH_2_TOTAL = '';
    let SCH_3_TOTAL = '';
    let SCH_4_TOTAL = '';
    let SCH_5_TOTAL = '';
    let SCH_6_TOTAL = '';
    let SCH_7_TOTAL = ''
    let SCH_8_TOTAL = '';
    let SCH_9_TOTAL = '';
    let SCH_10_TOTAL = '';
    let SCH_11_TOTAL = ''
    let SCH_12_TOTAL = '';
    let SCH_13_TOTAL = '';
    let SCH_14_TOTAL = '';
    let SCH_15_TOTAL = '';

    const SCH_1_1_DATE = workbook.Sheets[sheetNames[3]]['A6'] ? workbook.Sheets[sheetNames[3]]['A6'].w : '';
    const SCH_1_2_DATE = workbook.Sheets[sheetNames[20]]['A6'] ? workbook.Sheets[sheetNames[20]]['A6'].w : '';
    const SCH_1_3_DATE = workbook.Sheets[sheetNames[38]]['A6'] ? workbook.Sheets[sheetNames[38]]['A6'].w : '';
    const SCH_1_4_DATE = workbook.Sheets[sheetNames[55]]['A6'] ? workbook.Sheets[sheetNames[55]]['A6'].w : '';
    const SCH_1_5_DATE = workbook.Sheets[sheetNames[72]]['A6'] ? workbook.Sheets[sheetNames[72]]['A6'].w : '';

   
   
   
   
   
   
    if (
      SCH_1_1_DATE ||
      SCH_1_2_DATE ||
      SCH_1_3_DATE ||
      SCH_1_4_DATE ||
      SCH_1_5_DATE
    ) {
      SCH_1_TOTAL = `<SCH_1>
            ${generateXMLData(workbook, sheetNames[3], 'SCH_1', SCH_1_1_DATE)}
            ${generateXMLData(workbook, sheetNames[20], 'SCH_1', SCH_1_2_DATE)}
            ${generateXMLData(workbook, sheetNames[38], 'SCH_1', SCH_1_3_DATE)}
            ${generateXMLData(workbook, sheetNames[55], 'SCH_1', SCH_1_4_DATE)}
            ${generateXMLData(
              workbook,
              sheetNames[72],
              'SCH_1',
              SCH_1_5_DATE,
            )}</SCH_1>`;
    }

    const SCH_2_1_DATE = workbook.Sheets[sheetNames[4]]['A6'] ? workbook.Sheets[sheetNames[4]]['A6'].w : '';
    const SCH_2_2_DATE = workbook.Sheets[sheetNames[21]]['A6'] ? workbook.Sheets[sheetNames[21]]['A6'].w : '';
    const SCH_2_3_DATE = workbook.Sheets[sheetNames[39]]['A6'] ? workbook.Sheets[sheetNames[39]]['A6'].w : '';
    const SCH_2_4_DATE = workbook.Sheets[sheetNames[56]]['A6'] ? workbook.Sheets[sheetNames[56]]['A6'].w : '';
    const SCH_2_5_DATE = workbook.Sheets[sheetNames[73]]['A6'] ? workbook.Sheets[sheetNames[73]]['A6'].w : '';

    if (
      SCH_2_1_DATE ||
      SCH_2_2_DATE ||
      SCH_2_3_DATE ||
      SCH_2_4_DATE ||
      SCH_2_5_DATE
    ) {
      SCH_2_TOTAL = `<SCH_2>
            ${generateXMLData(workbook, sheetNames[4], 'SCH_2', SCH_2_1_DATE)}
            ${generateXMLData(workbook, sheetNames[21], 'SCH_2', SCH_2_2_DATE)}
            ${generateXMLData(workbook, sheetNames[39], 'SCH_2', SCH_2_3_DATE)}
            ${generateXMLData(workbook, sheetNames[56], 'SCH_2', SCH_2_4_DATE)}
            ${generateXMLData(
              workbook,
              sheetNames[73],
              'SCH_2',
              SCH_2_5_DATE,
            )}</SCH_2>`;
    }


    const SCH_3_1_DATE = workbook.Sheets[sheetNames[5]]['A6'] ? workbook.Sheets[sheetNames[5]]['A6'].w : '';
    const SCH_3_2_DATE = workbook.Sheets[sheetNames[22]]['A6'] ? workbook.Sheets[sheetNames[22]]['A6'].w : '';
    const SCH_3_3_DATE = workbook.Sheets[sheetNames[40]]['A6'] ? workbook.Sheets[sheetNames[40]]['A6'].w : '';
    const SCH_3_4_DATE = workbook.Sheets[sheetNames[57]]['A6'] ? workbook.Sheets[sheetNames[57]]['A6'].w : '';
    const SCH_3_5_DATE = workbook.Sheets[sheetNames[74]]['A6'] ? workbook.Sheets[sheetNames[74]]['A6'].w : '';

    if (
      SCH_3_1_DATE ||
      SCH_3_2_DATE ||
      SCH_3_3_DATE ||
      SCH_3_4_DATE ||
      SCH_3_5_DATE
    ) {
      SCH_3_TOTAL = `<SCH_3>
            ${generateXMLData(workbook, sheetNames[5], 'SCH_3', SCH_3_1_DATE)}
            ${generateXMLData(workbook, sheetNames[22], 'SCH_3', SCH_3_2_DATE)}
            ${generateXMLData(workbook, sheetNames[40], 'SCH_3', SCH_3_3_DATE)}
            ${generateXMLData(workbook, sheetNames[57], 'SCH_3', SCH_3_4_DATE)}
            ${generateXMLData(
              workbook,
              sheetNames[74],
              'SCH_3',
              SCH_3_5_DATE,
            )}</SCH_3>`;
    }

    const SCH_4_1_DATE = workbook.Sheets[sheetNames[6]]['A6'] ? workbook.Sheets[sheetNames[6]]['A6'].w : '';
    const SCH_4_2_DATE = workbook.Sheets[sheetNames[23]]['A6'] ? workbook.Sheets[sheetNames[23]]['A6'].w : '';
    const SCH_4_3_DATE = workbook.Sheets[sheetNames[41]]['A6'] ? workbook.Sheets[sheetNames[41]]['A6'].w : '';
    const SCH_4_4_DATE = workbook.Sheets[sheetNames[58]]['A6'] ? workbook.Sheets[sheetNames[58]]['A6'].w : '';
    const SCH_4_5_DATE = workbook.Sheets[sheetNames[75]]['A6'] ? workbook.Sheets[sheetNames[75]]['A6'].w : '';

    if (
      SCH_4_1_DATE ||
      SCH_4_2_DATE ||
      SCH_4_3_DATE ||
      SCH_4_4_DATE ||
      SCH_4_5_DATE
    ) {
      SCH_4_TOTAL = `<SCH_4>
            ${generateXMLData(workbook, sheetNames[6], 'SCH_4', SCH_4_1_DATE)}
            ${generateXMLData(workbook, sheetNames[23], 'SCH_4', SCH_4_2_DATE)}
            ${generateXMLData(workbook, sheetNames[41], 'SCH_4', SCH_4_3_DATE)}
            ${generateXMLData(workbook, sheetNames[58], 'SCH_4', SCH_4_4_DATE)}
            ${generateXMLData(
              workbook,
              sheetNames[75],
              'SCH_4',
              SCH_4_5_DATE,
            )}</SCH_4>`;
    }

    const SCH_5_1_DATE = workbook.Sheets[sheetNames[7]]['A6'] ? workbook.Sheets[sheetNames[7]]['A6'].w : '';
    const SCH_5_2_DATE = workbook.Sheets[sheetNames[24]]['A6'] ? workbook.Sheets[sheetNames[24]]['A6'].w : '';
    const SCH_5_3_DATE = workbook.Sheets[sheetNames[42]]['A6'] ? workbook.Sheets[sheetNames[42]]['A6'].w : '';
    const SCH_5_4_DATE = workbook.Sheets[sheetNames[59]]['A6'] ? workbook.Sheets[sheetNames[59]]['A6'].w : '';
    const SCH_5_5_DATE = workbook.Sheets[sheetNames[76]]['A6'] ? workbook.Sheets[sheetNames[76]]['A6'].w : '';

    if (
      SCH_5_1_DATE ||
      SCH_5_2_DATE ||
      SCH_5_3_DATE ||
      SCH_5_4_DATE ||
      SCH_5_5_DATE
    ) {
      SCH_5_TOTAL = `<SCH_5>
            ${generateXMLData(workbook, sheetNames[7], 'SCH_5', SCH_5_1_DATE)}
            ${generateXMLData(workbook, sheetNames[24], 'SCH_5', SCH_5_2_DATE)}
            ${generateXMLData(workbook, sheetNames[42], 'SCH_5', SCH_5_3_DATE)}
            ${generateXMLData(workbook, sheetNames[59], 'SCH_5', SCH_5_4_DATE)}
            ${generateXMLData(
              workbook,
              sheetNames[76],
              'SCH_5',
              SCH_5_5_DATE,
            )}</SCH_5>`;
    }

    const SCH_6_1_DATE = workbook.Sheets[sheetNames[8]]['A6'] ? workbook.Sheets[sheetNames[8]]['A6'].w : '';
    const SCH_6_2_DATE = workbook.Sheets[sheetNames[25]]['A6'] ? workbook.Sheets[sheetNames[25]]['A6'].w : '';
    const SCH_6_3_DATE = workbook.Sheets[sheetNames[43]]['A6'] ? workbook.Sheets[sheetNames[43]]['A6'].w : '';
    const SCH_6_4_DATE = workbook.Sheets[sheetNames[60]]['A6'] ? workbook.Sheets[sheetNames[60]]['A6'].w : '';
    const SCH_6_5_DATE = workbook.Sheets[sheetNames[77]]['A6'] ? workbook.Sheets[sheetNames[77]]['A6'].w : '';

    if (
      SCH_6_1_DATE ||
      SCH_6_2_DATE ||
      SCH_6_3_DATE ||
      SCH_6_4_DATE ||
      SCH_6_5_DATE
    ) {
      SCH_6_TOTAL = `<SCH_6>
            ${generateXMLData(workbook, sheetNames[8], 'SCH_6', SCH_6_1_DATE)}
            ${generateXMLData(workbook, sheetNames[25], 'SCH_6', SCH_6_2_DATE)}
            ${generateXMLData(workbook, sheetNames[43], 'SCH_6', SCH_6_3_DATE)}
            ${generateXMLData(workbook, sheetNames[60], 'SCH_6', SCH_6_4_DATE)}
            ${generateXMLData(
              workbook,
              sheetNames[77],
              'SCH_6',
              SCH_6_5_DATE,
            )}</SCH_6>`;
    }

    const SCH_7_1_DATE = workbook.Sheets[sheetNames[9]]['A6'] ? workbook.Sheets[sheetNames[9]]['A6'].w : '';
    const SCH_7_2_DATE = workbook.Sheets[sheetNames[26]]['A6'] ? workbook.Sheets[sheetNames[26]]['A6'].w : '';
    const SCH_7_3_DATE = workbook.Sheets[sheetNames[44]]['A6'] ? workbook.Sheets[sheetNames[44]]['A6'].w : '';
    const SCH_7_4_DATE = workbook.Sheets[sheetNames[61]]['A6'] ? workbook.Sheets[sheetNames[61]]['A6'].w : '';
    const SCH_7_5_DATE = workbook.Sheets[sheetNames[78]]['A6'] ? workbook.Sheets[sheetNames[78]]['A6'].w : '';

    if (
      SCH_7_1_DATE ||
      SCH_7_2_DATE ||
      SCH_7_3_DATE ||
      SCH_7_4_DATE ||
      SCH_7_5_DATE
    ) {
      SCH_7_TOTAL = `<SCH_7>
            ${generateXMLData(workbook, sheetNames[9], 'SCH_7', SCH_7_1_DATE)}
            ${generateXMLData(workbook, sheetNames[26], 'SCH_7', SCH_7_2_DATE)}
            ${generateXMLData(workbook, sheetNames[44], 'SCH_7', SCH_7_3_DATE)}
            ${generateXMLData(workbook, sheetNames[61], 'SCH_7', SCH_7_4_DATE)}
            ${generateXMLData(
              workbook,
              sheetNames[78],
              'SCH_7',
              SCH_7_5_DATE,
            )}</SCH_7>`;
    }

    const SCH_8_1_DATE = workbook.Sheets[sheetNames[10]]['A6']
      ? workbook.Sheets[sheetNames[10]]['A6'].w
      : '';
    const SCH_8_2_DATE = workbook.Sheets[sheetNames[27]]['A6'] ? workbook.Sheets[sheetNames[27]]['A6'].w : '';
    const SCH_8_3_DATE = workbook.Sheets[sheetNames[45]]['A6'] ? workbook.Sheets[sheetNames[45]]['A6'].w : '';
    const SCH_8_4_DATE = workbook.Sheets[sheetNames[62]]['A6'] ? workbook.Sheets[sheetNames[62]]['A6'].w : '';
    const SCH_8_5_DATE = workbook.Sheets[sheetNames[79]]['A6'] ? workbook.Sheets[sheetNames[79]]['A6'].w : '';

    if (
      SCH_8_1_DATE ||
      SCH_8_2_DATE ||
      SCH_8_3_DATE ||
      SCH_8_4_DATE ||
      SCH_8_5_DATE
    ) {
      SCH_8_TOTAL = `<SCH_8>
            ${generateXMLData(workbook, sheetNames[10], 'SCH_8', SCH_8_1_DATE)}
            ${generateXMLData(workbook, sheetNames[27], 'SCH_8', SCH_8_2_DATE)}
            ${generateXMLData(workbook, sheetNames[45], 'SCH_8', SCH_8_3_DATE)}
            ${generateXMLData(workbook, sheetNames[62], 'SCH_8', SCH_8_4_DATE)}
            ${generateXMLData(
              workbook,
              sheetNames[79],
              'SCH_8',
              SCH_8_5_DATE,
            )}</SCH_8>`;
    }

    const SCH_9_1_DATE = workbook.Sheets[sheetNames[11]]['A6'] ? workbook.Sheets[sheetNames[11]]['A6'].w : '';
    const SCH_9_2_DATE = workbook.Sheets[sheetNames[28]]['A6'] ? workbook.Sheets[sheetNames[28]]['A6'].w : '';
    const SCH_9_3_DATE = workbook.Sheets[sheetNames[46]]['A6'] ? workbook.Sheets[sheetNames[46]]['A6'].w : '';
    const SCH_9_4_DATE = workbook.Sheets[sheetNames[63]]['A6'] ? workbook.Sheets[sheetNames[63]]['A6'].w : '';
    const SCH_9_5_DATE = workbook.Sheets[sheetNames[80]]['A6'] ? workbook.Sheets[sheetNames[80]]['A6'].w : '';



    if (
      SCH_9_1_DATE ||
      SCH_9_2_DATE ||
      SCH_9_3_DATE ||
      SCH_9_4_DATE ||
      SCH_9_5_DATE
    ) {
      SCH_9_TOTAL = `<SCH_9>
            ${generateXMLData(workbook, sheetNames[11], 'SCH_9', SCH_9_1_DATE)}
            ${generateXMLData(workbook, sheetNames[28], 'SCH_9', SCH_9_2_DATE)}
            ${generateXMLData(workbook, sheetNames[46], 'SCH_9', SCH_9_3_DATE)}
            ${generateXMLData(workbook, sheetNames[63], 'SCH_9', SCH_9_4_DATE)}
            ${generateXMLData(
              workbook,
              sheetNames[80],
              'SCH_9',
              SCH_9_5_DATE,
            )}</SCH_9>`;
    }

    const SCH_10_1_DATE = workbook.Sheets[sheetNames[12]]['A6'] ? workbook.Sheets[sheetNames[12]]['A6'].w : '';
    const SCH_10_2_DATE = workbook.Sheets[sheetNames[29]]['A6'] ? workbook.Sheets[sheetNames[29]]['A6'].w : '';
    const SCH_10_3_DATE = workbook.Sheets[sheetNames[47]]['A6'] ? workbook.Sheets[sheetNames[47]]['A6'].w : '';
    const SCH_10_4_DATE = workbook.Sheets[sheetNames[64]]['A6'] ? workbook.Sheets[sheetNames[64]]['A6'].w : '';
    const SCH_10_5_DATE = workbook.Sheets[sheetNames[81]]['A6'] ? workbook.Sheets[sheetNames[81]]['A6'].w : '';

    if (
      SCH_10_1_DATE ||
      SCH_10_2_DATE ||
      SCH_10_3_DATE ||
      SCH_10_4_DATE ||
      SCH_10_5_DATE
    ) {
      SCH_10_TOTAL = `<SCH_10>
            ${generateXMLData(workbook, sheetNames[12], 'SCH_10', SCH_10_1_DATE)}
            ${generateXMLData(workbook, sheetNames[29], 'SCH_10', SCH_10_2_DATE)}
            ${generateXMLData(workbook, sheetNames[47], 'SCH_10', SCH_10_3_DATE)}
            ${generateXMLData(workbook, sheetNames[64], 'SCH_10', SCH_10_4_DATE)}
            ${generateXMLData(
              workbook,
              sheetNames[81],
              'SCH_10',
              SCH_10_5_DATE,
            )}</SCH_10>`;
    }


    const SCH_11_1_DATE = workbook.Sheets[sheetNames[13]]['A6'] ? workbook.Sheets[sheetNames[13]]['A6'].w : '';
    const SCH_11_2_DATE = workbook.Sheets[sheetNames[30]]['A6'] ? workbook.Sheets[sheetNames[30]]['A6'].w : '';
    const SCH_11_3_DATE = workbook.Sheets[sheetNames[48]]['A6'] ? workbook.Sheets[sheetNames[48]]['A6'].w : '';
    const SCH_11_4_DATE = workbook.Sheets[sheetNames[65]]['A6'] ? workbook.Sheets[sheetNames[65]]['A6'].w : '';
    const SCH_11_5_DATE = workbook.Sheets[sheetNames[82]]['A6'] ? workbook.Sheets[sheetNames[82]]['A6'].w : '';

    if (
      SCH_11_1_DATE ||
      SCH_11_2_DATE ||
      SCH_11_3_DATE ||
      SCH_11_4_DATE ||
      SCH_11_5_DATE
    ) {
      SCH_11_TOTAL = `<SCH_11>
            ${generateXMLData(workbook, sheetNames[13], 'SCH_11', SCH_11_1_DATE)}
            ${generateXMLData(workbook, sheetNames[30], 'SCH_11', SCH_11_2_DATE)}
            ${generateXMLData(workbook, sheetNames[48], 'SCH_11', SCH_11_3_DATE)}
            ${generateXMLData(workbook, sheetNames[65], 'SCH_11', SCH_11_4_DATE)}
            ${generateXMLData(
              workbook,
              sheetNames[82],
              'SCH_11',
              SCH_11_5_DATE,
            )}</SCH_11>`;
    }

    const SCH_12_1_DATE = workbook.Sheets[sheetNames[14]]['A6'] ? workbook.Sheets[sheetNames[14]]['A6'].w : '';
    const SCH_12_2_DATE = workbook.Sheets[sheetNames[31]]['A6'] ? workbook.Sheets[sheetNames[31]]['A6'].w : '';
    const SCH_12_3_DATE = workbook.Sheets[sheetNames[49]]['A6'] ? workbook.Sheets[sheetNames[49]]['A6'].w : '';
    const SCH_12_4_DATE = workbook.Sheets[sheetNames[66]]['A6'] ? workbook.Sheets[sheetNames[66]]['A6'].w : '';
    const SCH_12_5_DATE = workbook.Sheets[sheetNames[83]]['A6'] ? workbook.Sheets[sheetNames[83]]['A6'].w : '';


    if (
      SCH_12_1_DATE ||
      SCH_12_2_DATE ||
      SCH_12_3_DATE ||
      SCH_12_4_DATE ||
      SCH_12_5_DATE
    ) {
      SCH_12_TOTAL = `<SCH_12>
            ${generateXMLData(workbook, sheetNames[14], 'SCH_12', SCH_12_1_DATE)}
            ${generateXMLData(workbook, sheetNames[31], 'SCH_12', SCH_12_2_DATE)}
            ${generateXMLData(workbook, sheetNames[49], 'SCH_12', SCH_12_3_DATE)}
            ${generateXMLData(workbook, sheetNames[66], 'SCH_12', SCH_12_4_DATE)}
            ${generateXMLData(
              workbook,
              sheetNames[83],
              'SCH_12',
              SCH_12_5_DATE,
            )}</SCH_12>`;
    }

    const SCH_13_1_DATE = workbook.Sheets[sheetNames[15]]['A6'] ? workbook.Sheets[sheetNames[15]]['A6'].w : '';
    const SCH_13_2_DATE = workbook.Sheets[sheetNames[32]]['A6'] ? workbook.Sheets[sheetNames[32]]['A6'].w : '';
    const SCH_13_3_DATE = workbook.Sheets[sheetNames[50]]['A6'] ? workbook.Sheets[sheetNames[50]]['A6'].w : '';
    const SCH_13_4_DATE = workbook.Sheets[sheetNames[67]]['A6'] ? workbook.Sheets[sheetNames[67]]['A6'].w : '';
    const SCH_13_5_DATE = workbook.Sheets[sheetNames[84]]['A6'] ? workbook.Sheets[sheetNames[84]]['A6'].w : '';


    if (
      SCH_13_1_DATE ||
      SCH_13_2_DATE ||
      SCH_13_3_DATE ||
      SCH_13_4_DATE ||
      SCH_13_5_DATE
    ) {
      SCH_13_TOTAL = `<SCH_13>
            ${generateXMLData(workbook, sheetNames[15], 'SCH_13', SCH_13_1_DATE)}
            ${generateXMLData(workbook, sheetNames[32], 'SCH_13', SCH_13_2_DATE)}
            ${generateXMLData(workbook, sheetNames[50], 'SCH_13', SCH_13_3_DATE)}
            ${generateXMLData(workbook, sheetNames[67], 'SCH_13', SCH_13_4_DATE)}
            ${generateXMLData(
              workbook,
              sheetNames[84],
              'SCH_13',
              SCH_13_5_DATE,
            )}</SCH_13>`;
    }

    const SCH_14_1_DATE = workbook.Sheets[sheetNames[16]]['A6'] ? workbook.Sheets[sheetNames[16]]['A6'].w : '';
    const SCH_14_2_DATE = workbook.Sheets[sheetNames[33]]['A6'] ? workbook.Sheets[sheetNames[33]]['A6'].w : '';
    const SCH_14_3_DATE = workbook.Sheets[sheetNames[51]]['A6'] ? workbook.Sheets[sheetNames[51]]['A6'].w : '';
    const SCH_14_4_DATE = workbook.Sheets[sheetNames[68]]['A6'] ? workbook.Sheets[sheetNames[68]]['A6'].w : '';
    const SCH_14_5_DATE = workbook.Sheets[sheetNames[85]]['A6'] ? workbook.Sheets[sheetNames[85]]['A6'].w : '';

    if (
      SCH_14_1_DATE ||
      SCH_14_2_DATE ||
      SCH_14_3_DATE ||
      SCH_14_4_DATE ||
      SCH_14_5_DATE
    ) {
      SCH_14_TOTAL = `<SCH_14>
            ${generateXMLData(workbook, sheetNames[16], 'SCH_14', SCH_14_1_DATE)}
            ${generateXMLData(workbook, sheetNames[33], 'SCH_14', SCH_14_2_DATE)}
            ${generateXMLData(workbook, sheetNames[51], 'SCH_14', SCH_14_3_DATE)}
            ${generateXMLData(workbook, sheetNames[68], 'SCH_14', SCH_14_4_DATE)}
            ${generateXMLData(
              workbook,
              sheetNames[85],
              'SCH_14',
              SCH_14_5_DATE,
            )}</SCH_14>`;
    }

    const SCH_15_1_DATE = workbook.Sheets[sheetNames[17]]['A6'] ? workbook.Sheets[sheetNames[17]]['A6'].w : '';
    const SCH_15_2_DATE = workbook.Sheets[sheetNames[34]]['A6'] ? workbook.Sheets[sheetNames[34]]['A6'].w : '';
    const SCH_15_3_DATE = workbook.Sheets[sheetNames[52]]['A6'] ? workbook.Sheets[sheetNames[52]]['A6'].w : '';
    const SCH_15_4_DATE = workbook.Sheets[sheetNames[69]]['A6'] ? workbook.Sheets[sheetNames[69]]['A6'].w : '';
    const SCH_15_5_DATE = workbook.Sheets[sheetNames[86]]['A6'] ? workbook.Sheets[sheetNames[86]]['A6'].w : '';

    if (
      SCH_15_1_DATE ||
      SCH_15_2_DATE ||
      SCH_15_3_DATE ||
      SCH_15_4_DATE ||
      SCH_15_5_DATE
    ) {
      SCH_15_TOTAL = `<SCH_15>
            ${generateXMLData(workbook, sheetNames[17], 'SCH_15', SCH_15_1_DATE)}
            ${generateXMLData(workbook, sheetNames[34], 'SCH_15', SCH_15_2_DATE)}
            ${generateXMLData(workbook, sheetNames[52], 'SCH_15', SCH_15_3_DATE)}
            ${generateXMLData(workbook, sheetNames[69], 'SCH_15', SCH_15_4_DATE)}
            ${generateXMLData(
              workbook,
              sheetNames[86],
              'SCH_15',
              SCH_15_5_DATE,
            )}</SCH_15>`;
    }

//----------------for SCH_0

if (
  SCH_0_1_DATE ||
  SCH_0_2_DATE ||
  SCH_0_3_DATE ||
  SCH_0_4_DATE ||
  SCH_0_5_DATE
) {
  SCH_0_TOTAL = `<SCH_0>
        ${generateXMLData_SCH_0(workbook, sheetNames[0], 'SCH_0', SCH_0_1_DATE)}
        ${generateXMLData_SCH_0(workbook, sheetNames[18], 'SCH_0', SCH_0_2_DATE)}
        ${generateXMLData_SCH_0(workbook, sheetNames[36], 'SCH_0', SCH_0_3_DATE)}
        ${generateXMLData_SCH_0(workbook, sheetNames[53], 'SCH_0', SCH_0_4_DATE)}
        
        ${generateXMLData_SCH_0(
          workbook,
          sheetNames[70],
          'SCH_0',
          SCH_0_5_DATE,
        )}</SCH_0>`;
}


//----------------for MRA



if (
  MRA_DATE ||
  MRA_2_DATE ||
  MRA_3_DATE ||
  MRA_4_DATE ||
  MRA_5_DATE
) {
  MRA_TOTAL = `<MRA>
        ${generateXMLData_MRA(workbook, sheetNames[2], 'MRA', MRA_DATE)}
        ${generateXMLData_MRA(workbook, sheetNames[19], 'MRA', MRA_2_DATE)}
        ${generateXMLData_MRA(workbook, sheetNames[37], 'MRA', MRA_3_DATE)}
        ${generateXMLData_MRA(workbook, sheetNames[54], 'MRA', MRA_4_DATE)}
        
        ${generateXMLData_MRA(
          workbook,
          sheetNames[71],
          'MRA',
          MRA_5_DATE,
        )}</MRA>`;
}
//------------------------MRA_1B
   

MRA_1B_TOTAL = `<MRA_IB>
        ${generateXMLData_MRA_IB(workbook, sheetNames[1], 'MRA_IB', MRA_IB_DATE)}
        </MRA_IB>`;


//---------------

    const dates = [
      new Date(SCH_1_1_DATE),
      new Date(SCH_1_2_DATE),
      new Date(SCH_1_3_DATE),
      new Date(SCH_1_4_DATE),
      new Date(SCH_1_5_DATE),
];

    const minDate = new Date(Math.min(...dates.map(date => date.getTime())));
    const maxDate = new Date(Math.max(...dates.map(date => date.getTime())));
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const minDateValue = formatDate(minDate);
    const maxDateValue = formatDate(maxDate);

    let xmlData = `<?xml version="1.0" encoding="utf-8"?>
      <ITRS_W xmlns="http://bsp.gov.ph/xml/ITRS_W/1.0">
        <Header>
          <Undertaking>10000002</Undertaking>
          <FromDate>${minDateValue}</FromDate>
          <ToDate>${maxDateValue}</ToDate>
        </Header>
        ${SCH_0_TOTAL}
        ${MRA_1B_TOTAL}
        ${MRA_TOTAL}
        ${SCH_1_TOTAL}
        ${SCH_2_TOTAL}
        ${SCH_3_TOTAL}
        ${SCH_4_TOTAL}
        ${SCH_5_TOTAL}
        ${SCH_6_TOTAL}
        ${SCH_7_TOTAL}
        ${SCH_8_TOTAL}
        ${SCH_9_TOTAL}
        ${SCH_10_TOTAL}
        ${SCH_11_TOTAL}
        ${SCH_12_TOTAL}
        ${SCH_13_TOTAL}
        ${SCH_14_TOTAL}
        ${SCH_15_TOTAL}


      </ITRS_W>`;

    //console.log('XMLDate', xmlData);

    createXMLData(xmlData, 'ITRS_Schedule_0.xml');
  };
  reader.readAsArrayBuffer(file);
};

export default readUploadFile;
