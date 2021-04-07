import React, { useState, useContext } from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { Paper } from '@material-ui/core';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

import { SocketContext } from './Context';

import HomeworkYuckTitle from './assets/books/homeworkYuck/HomeworkYuck-01.png'

import HammyTheHamsterTitle from './assets/books/hammyTheHamster/HammyTheHamster-01.png'

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  pap: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));
// var x = require('./assets/books/homeworkYuck/HomeworkYuck-01.png');

const App = () => {
  const classes = useStyles();

  const { book, setBook, pageNumber, setPageNumber, setStarted, bookTitles } = useContext(SocketContext);

  const [selectedBook, setSelectedBook] = useState('');
  // const [bookshelf] = useState(['HomeworkYuck']);

  const [open, setOpen] = React.useState(true);
  const [bookPagePath, setBookPagePath] = React.useState(false);
  // const [homeworkYuckBook, setHomeworkYuckBook] = React.useState([HomeworkYuck01, HomeworkYuck02, HomeworkYuck03, HomeworkYuck04, HomeworkYuck05, HomeworkYuck06, HomeworkYuck07, HomeworkYuck08, HomeworkYuck09, HomeworkYuck10, HomeworkYuck11, HomeworkYuck12, HomeworkYuck13, HomeworkYuck14, HomeworkYuck15, HomeworkYuck16, HomeworkYuck17, HomeworkYuck18, HomeworkYuck19, HomeworkYuck20, HomeworkYuck21, HomeworkYuck22, HomeworkYuck23, HomeworkYuck24, HomeworkYuck25]);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setStarted(1);
    setOpen(false);
  };

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">{bookTitles[book]}</Typography>
      </AppBar>

      

      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>

      


      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Welcome to Read Along!</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Read Along lets you connect with others during social distance over a great book for children.

              
            </DialogContentText>

            <DialogContentText id="alert-dialog-description">
              Start by selecting a book from the "BOOKSHELF" and then get the ID of the person you would like to call.
              The ID of a user can by copied from the "COPY YOUR ID" button. Finaly paste the ID of the person you would like to call in the "ID to call" line and hit the "CALL" button.

              
            </DialogContentText>

          </DialogContent>
          <DialogActions>

            <Button onClick={handleClose} color="primary">
              Got it
            </Button>
          </DialogActions>
        </Dialog>
      </div>

    </div>
  );
};

export default App;
