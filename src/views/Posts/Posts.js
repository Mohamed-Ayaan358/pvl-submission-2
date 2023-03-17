import React from "react";
import { Box } from "@material-ui/core";
import { PageBody, PageHeader } from "../../components";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { blue } from "@material-ui/core/colors";

import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const buttons = [

];


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Finance
      </Typography>

      <Typography variant="h5" component="div" color={"blue"}>
        Accounts Finance <bold >7</bold>
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" style={{ width: "1000rem", backgroundColor: "lightgreen" }}>Tag a job</Button>
    </CardActions>
    <CardActions>
      <Button variant="outlined" style={{ width: "1000rem", borderColor: "purple", color: "purple", borderWidth: "3px" }}>Employees enrolled {">"}</Button>
    </CardActions>
    <CardActions>
      <Button variant="contained" disabled>
        Assign certificates
      </Button>
    </CardActions>
  </React.Fragment >
);


const Dashboard = () => {
  return (
    <React.Fragment>
      <PageBody style={{ display: "flex" }}>
        <Box
          flexGrow='1'
          width='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>

              <h4 style={{
                color: "purple"
              }}>Certificates under the category</h4>
              < div style={{
                display: "inline",
                float: "right"
              }}>
                <Paper
                  component="form"
                  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 330 }}
                >
                  <IconButton sx={{ p: '10px' }} aria-label="menu">
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">

                  </IconButton>
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                  </IconButton>
                </Paper>
              </div>
            </Grid>
            <Grid
              container
              direction="row"
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

              <Grid item xs="auto" >
                <Card variant="outlined">{card}</Card>
              </Grid>
              <Grid item xs="auto" >
                <Card variant="outlined">{card}</Card>
              </Grid>
              <Grid item xs="auto" >
                <Card variant="outlined">{card}</Card>
              </Grid>
              <Grid item xs="auto" >
                <Card variant="outlined">{card}</Card>
              </Grid>
              <Grid item xs="auto" >
                <Card variant="outlined">{card}</Card>
              </Grid>
            </Grid>
          </Grid>
        </Box>

      </PageBody>
    </React.Fragment >
  );
};

export default Dashboard;
