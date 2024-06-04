const generateXmlElement_MRA_IB = (
  header: string,
  value: string | number,
  rowId: string,
  index: string | number,
): string => {
  

  if (!header || !rowId || value == null || value === '') {
    return ''; // Return empty string if header is undefined or if value is null or undefined
  }

  // Treat 0 as a valid value
  if (value === 0 || value === '0') {
    console.log('index---' + index)
    if(index==64 && rowId == 'R0020'){
      return '';
    }
    else{
      return `<${rowId+header}>${value}</${rowId+header}>`;
    }
  }

  // If value is an empty string, return an empty string
  if (value === '') {
    return '';
  }

  // For non-empty strings, wrap the value with the XML element
  return `<${rowId+header}>${value}</${rowId+header}>`;
};

export default generateXmlElement_MRA_IB;
