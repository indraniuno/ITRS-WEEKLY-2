import React from 'react';
import readUploadFile from './readUploadFile';

const formStyle: React.CSSProperties = {
  maxWidth: '400px',
  margin: 'auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  textAlign: 'center',
};

const headerStyle: React.CSSProperties = {
  fontSize: '24px',
  marginBottom: '20px',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  cursor: 'pointer',
};

function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fileInput = document.getElementById('upload') as HTMLInputElement;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      readUploadFile(fileInput.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h1 style={headerStyle}>ITRS Upload file</h1>
      <input type="file" name="upload" id="upload" style={inputStyle} />
      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
  );
}

export default App;
