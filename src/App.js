import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import { vigenereCipher } from './Cipher';

function App() {
  const [inputText, setInputText] = useState('');
  const [key, setKey] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleEncrypt = () => {
    setOutputText(vigenereCipher(inputText, key, true));
  };

  const handleDecrypt = () => {
    setOutputText(vigenereCipher(inputText, key, false));
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '32px',
        backgroundColor: '#f4f4f4',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '24px',
          color: '#333',
        }}
      >
        Vigenère Cipher
      </Typography>

      <TextField
        label="Enter Text"
        variant="outlined"
        fullWidth
        margin="normal"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        sx={{
          backgroundColor: 'white',
          borderRadius: '8px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ddd',
            },
            '&:hover fieldset': {
              borderColor: '#333',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#333',
            },
          },
        }}
      />

      <TextField
        label="Enter Key"
        variant="outlined"
        fullWidth
        margin="normal"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        sx={{
          backgroundColor: 'white',
          borderRadius: '8px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ddd',
            },
            '&:hover fieldset': {
              borderColor: '#333',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#333',
            },
          },
        }}
      />

      <Box sx={{ display: 'flex', gap: 2, marginTop: '24px' }}>
        <Button
          variant="contained"
          onClick={handleEncrypt}
          sx={{
            flex: 1,
            backgroundColor: '#333',
            color: 'white',
            padding: '12px',
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#555',
            },
          }}
        >
          Encrypt
        </Button>

        <Button
          variant="outlined"
          onClick={handleDecrypt}
          sx={{
            flex: 1,
            padding: '12px',
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 'bold',
            color: '#333',
            borderColor: '#333',
            '&:hover': {
              backgroundColor: '#f4f4f4',
              borderColor: '#555',
            },
          }}
        >
          Decrypt
        </Button>
      </Box>

      <Typography
        variant="h6"
        sx={{
          marginTop: '32px',
          marginBottom: '8px',
          color: '#555',
          textAlign: 'center',
        }}
      >
        Output
      </Typography>

      <TextField
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={outputText}
        readOnly
        sx={{
          backgroundColor: 'white',
          borderRadius: '8px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ddd',
            },
            '&:hover fieldset': {
              borderColor: '#333',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#333',
            },
          },
        }}
      />
      <Typography marginTop={5} textAlign="center">This project is created for Mr.Ganjoo by Amirreza Mahmoudi</Typography>
    </Container>
  );
}

export default App;
