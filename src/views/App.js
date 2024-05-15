import React from 'react';
import Button from '@mui/material/Button';
import CloudDownload from '@mui/icons-material/CloudDownload';

function App() {
  const handleButtonClick = () => {
    console.log('Probando la API...');
  };

  return (
      <div className="App">
        <header style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif'}}>
          <h1>Welcome to the Frontend</h1>
          <p>Haz clic en el botón para probar la API</p>
          <Button
            variant="contained"
            color="primary"
            startIcon={<CloudDownload />}
            onClick={handleButtonClick}
          >
            Probar API
          </Button>
        </header>
        <div style={{position: 'absolute', bottom: '0', width: '99%' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0099ff" fillOpacity="1" d="M0,256L24,234.7C48,213,96,171,144,170.7C192,171,240,213,288,229.3C336,245,384,235,432,202.7C480,171,528,117,576,112C624,107,672,149,720,160C768,171,816,149,864,170.7C912,192,960,256,1008,272C1056,288,1104,256,1152,213.3C1200,171,1248,117,1296,101.3C1344,85,1392,107,1416,117.3L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
          </svg>
        </div>
      </div>
  );
}

export default App;
