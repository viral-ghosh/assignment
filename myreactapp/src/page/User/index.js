import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

class User extends React.Component {
  state = { list: [] };

  onClick = e => {
    this.state.list.push(this.state)
    this.setState({ fname: '', lname: '', cno: '' });
  };
  changefname = e => {
    this.setState({ fname: e.target.value });
  };
  changelname = e => {
    this.setState({ lname: e.target.value });
  };
  changecno = e => {
    this.setState({ cno: e.target.value });
  };

  render() {

    return (
      <React.Fragment >
        <CssBaseline />
        <Container maxWidth="sm" >
          <form style={{margin:"200"}} noValidate autoComplete="off">
            <TextField id="fname" onChange={this.changefname} label="First Name" value={this.state.fname} variant="outlined" />
            <TextField id="lname" onChange={this.changelname} label="Last Name" value={this.state.lname} variant="outlined" />
            <TextField id="cno" onChange={this.changecno} label="Contact No" value={this.state.cno} variant="outlined" /><br />
            <Button onClick={this.onClick} variant="contained" color="primary">
              Primary
    </Button>
          </form>

         
        </Container>
        <Grid container spacing={3}>
        {this.state.list.map((person) => (
        <Grid item xs={12}>
          <Paper style={{textAlign: "center",padding:"3"}}>Full name:- {person.fname} {person.lname} And Contact no : - {person.cno}</Paper>
        </Grid>))}
        
      </Grid>
      </React.Fragment>
    );
  }
}
export default User;
