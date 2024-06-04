// createXMLData.ts
const createXMLData = (data: string, filename: string) => {
  const dataStr = `data:text/application/xml;charset=utf-8,${encodeURIComponent(
    data,
  )}`;

  const element = document.createElement('a');
  element.href = dataStr;
  element.download = filename;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

export default createXMLData;
