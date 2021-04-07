import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled, MenuBook} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import HomeworkYuckTitle from '../assets/books/homeworkYuck/HomeworkYuck-01.png'
import HammyTheHamsterTitle from '../assets/books/hammyTheHamster/HammyTheHamster-01.png'

import { SocketContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  container: {
    width: '600px',
    margin: '35px 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    paddingLeft: 20,
    paddingRight: 20,
    padding: 20
  },
  paper: {
    padding: '10px 20px',
    border: '2px solid black',
  },
}));

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser, book, setBook, turnPage, pageNumber, setPageNumber } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Container className={classes.container}>
        <Paper elevation={10} className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container className={classes.gridContainer}>

               <Grid item xs={12} md={12} className={classes.padding}>
                <Button onClick={handleClickOpen}  variant="contained" color="primary" startIcon={<MenuBook fontSize="large" />} fullWidth className={classes.margin}>
                  Bookshelf
                </Button>
              </Grid>

              <Grid item xs={12} md={6} className={classes.padding}>
                <Typography gutterBottom variant="h6">Account Info</Typography>
                <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                <CopyToClipboard text={me} className={classes.margin}>
                  <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                    Copy Your ID
                  </Button>
                </CopyToClipboard>
              </Grid>
              <Grid item xs={12} md={6} className={classes.padding}>
                <Typography gutterBottom variant="h6">Make a call</Typography>
                <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                {/* {callAccepted && !callEnded ? (
                  <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} className={classes.margin}>
                    Hang Up
                  </Button>
                ) : (
                  <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} className={classes.margin}>
                    Call
                  </Button>
                )} */}

                { book > -1? (
                 
                  callAccepted && !callEnded ? (
                  <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} className={classes.margin}>
                    Hang Up
                  </Button>
                ) : (
                  <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} className={classes.margin}>
                    Call
                  </Button>
                )


                ) : (
                  <Button disabled variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth className={classes.margin}>
                    Call
                  </Button>
                )}
                
              </Grid>

              {/* <Grid item xs={12} md={12} className={classes.padding}>
                
              <CopyToClipboard text={me} className={classes.margin}>
                  <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                    Copy Your ID
                  </Button>
                </CopyToClipboard>
              </Grid> */}

             



            </Grid>
          </form>
          {children}
        </Paper>
      </Container>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Bookshelf</DialogTitle>
          <DialogContent>

            <Card className={classes.root}>
              <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="440"
                image={HomeworkYuckTitle}
                title="Homework Yuck"
              />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Homework Yuck
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Jamal made a case at the next open house and it mattered much. Download this free children’s book to read about how he chose to stand his ground and took courage to validate his actions. A little bit of honesty and a little bit of courage had gone a long way in boosting Jamal’s belief in himself. Read more in this free children’s real aloud and be truly inspired.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button  onClick={() => { setBook(0); setPageNumber(0); handleClose();}} variant="contained" size="large" color="primary">
                  Select
                </Button>
              </CardActions>
            </Card>

            <Card className={classes.root}>
              <CardActionArea>
              <CardMedia
                component="img"
                alt="Hammy the Hamster"
                height="440"
                image={HammyTheHamsterTitle}
                title="Hammy The Hamster"
              />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Hammy The Hamster
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    He’s got swag. He wears a tux. He’s a hipster hamster who likes to live free. Join Hammy in his South American home as you read this free story book for kids on your next read aloud day.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button  onClick={() => { setBook(1); setPageNumber(0); handleClose();}} variant="contained" size="large" color="primary">
                  Select
                </Button>
              </CardActions>
            </Card>

          </DialogContent>
          <DialogActions>

            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Sidebar;
