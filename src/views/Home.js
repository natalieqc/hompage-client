import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const home = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1">
          homepage under construction
        </Typography>
        <Button variant="outlined" color="primary">
          Okay
        </Button>
      </Box>
    </Container>
  )
}

export default home;
