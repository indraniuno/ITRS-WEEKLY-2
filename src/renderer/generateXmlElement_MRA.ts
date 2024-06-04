const generateXmlElement_MRA = (
  header: string,
  value: string | number,
  rowId: string | number,
): string => {
  if (!header || value == null) {
    return ''; // Return empty string if header is undefined or if value is null or undefined
  }

  // Treat 0 as a valid value
  if (value === 0 || value === '0') {
    return `<${rowId+header}>${value}</${rowId+header}>`;
  }

  // If value is an empty string, return an empty string
  if (value === '') {
    return '';
  }
  
  // For non-empty strings, wrap the value with the XML element
  return `<${rowId+header}>${value}</${rowId+header}>`;
};

export default generateXmlElement_MRA;
