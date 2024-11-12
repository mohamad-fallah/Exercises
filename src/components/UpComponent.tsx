"use client"
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const PriceComponent = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box 
        sx={{
          backgroundColor: '#FFFFFF', 
          padding: '16px',
          borderRadius: '12px', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '16px',
          width: '100%',
          maxWidth: '898px',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' 
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>قیمت میلگرد آجدار</Typography>
          <Typography variant="body2" sx={{ color: '#999' }}>290 محصول</Typography>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Box sx={{ display: 'flex', gap: '8px' }}>
            <Button 
              variant="outlined" 
              startIcon={<PrintIcon />} 
              sx={{
                borderColor: '#ccc', 
                color: '#333',
                ':hover': { borderColor: '#999', backgroundColor: '#f0f0f0' }
              }}
            >
              چاپ
            </Button>
            <Button 
              variant="outlined" 
              startIcon={<FileDownloadIcon />} 
              sx={{
                borderColor: '#ccc', 
                color: '#333',
                ':hover': { borderColor: '#999', backgroundColor: '#f0f0f0' }
              }}
            >
              خروجی اکسل
            </Button>
          </Box>
          <Button 
            variant="contained" 
            sx={{
              backgroundColor: '#ff3366', 
              color: '#fff', 
              ':hover': { backgroundColor: '#e62e5c' }
            }}
          >
            دسترسی سریع
          </Button>
        </Box>
        <Box sx={{ display: 'flex', gap: '8px', mt: '8px' }}>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceComponent;
