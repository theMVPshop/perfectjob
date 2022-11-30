import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';



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
          <Button variant="text">Apply For A New Job</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="text">Register Your Account</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="text">Update Your Resume</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="text">Search All Jobs</Button>
        </Grid>
        
      
      </Grid>



    </Box>

    
  );
}

export default BasicGrid;