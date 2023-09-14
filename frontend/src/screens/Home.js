import React from 'react';
import Box from '@mui/material/Box';
import BasicTextFields from '.././components/Forms'
import GridHome from '../components/GridHome'

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <BasicTextFields />
        <GridHome />
      
    </Box>
  );
}
