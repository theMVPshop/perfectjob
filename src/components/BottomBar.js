import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';



function BasicGrid() {
  return (
    <Box 
    fixed
    sx={{ flexGrow: 1 }}>
      <Grid 
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}>
        
    
        <Grid item xs={2}>
          <Button variant="text">Apply For A New Job
          <ArrowOutwardIcon></ArrowOutwardIcon>

          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="text">Register Your Account 
              <ArrowOutwardIcon></ArrowOutwardIcon>
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="text">Update Your Resume
          <ArrowOutwardIcon></ArrowOutwardIcon>

          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="text">Search All Jobs
          <ArrowOutwardIcon></ArrowOutwardIcon>

          </Button>
        </Grid>
        
      
      </Grid>



    </Box>

    
  );
}

export default BasicGrid;