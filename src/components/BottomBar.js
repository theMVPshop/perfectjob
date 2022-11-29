import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid 
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}>
    
        <Grid item xs={2}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>xs=4</Item>
        </Grid>
      
      </Grid>
    </Box>
  );
}

export default BasicGrid;