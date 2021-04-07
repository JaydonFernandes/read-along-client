import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';

import { SocketContext } from '../Context';

import HomeworkYuck01 from '../assets/books/homeworkYuck/HomeworkYuck-01.png'
import HomeworkYuck02 from '../assets/books/homeworkYuck/HomeworkYuck-02.png'
import HomeworkYuck03 from '../assets/books/homeworkYuck/HomeworkYuck-03.png'
import HomeworkYuck04 from '../assets/books/homeworkYuck/HomeworkYuck-04.png'
import HomeworkYuck05 from '../assets/books/homeworkYuck/HomeworkYuck-05.png'
import HomeworkYuck06 from '../assets/books/homeworkYuck/HomeworkYuck-06.png'
import HomeworkYuck07 from '../assets/books/homeworkYuck/HomeworkYuck-07.png'
import HomeworkYuck08 from '../assets/books/homeworkYuck/HomeworkYuck-08.png'
import HomeworkYuck09 from '../assets/books/homeworkYuck/HomeworkYuck-09.png'
import HomeworkYuck10 from '../assets/books/homeworkYuck/HomeworkYuck-10.png'
import HomeworkYuck11 from '../assets/books/homeworkYuck/HomeworkYuck-11.png'
import HomeworkYuck12 from '../assets/books/homeworkYuck/HomeworkYuck-12.png'
import HomeworkYuck13 from '../assets/books/homeworkYuck/HomeworkYuck-13.png'
import HomeworkYuck14 from '../assets/books/homeworkYuck/HomeworkYuck-14.png'
import HomeworkYuck15 from '../assets/books/homeworkYuck/HomeworkYuck-15.png'
import HomeworkYuck16 from '../assets/books/homeworkYuck/HomeworkYuck-16.png'
import HomeworkYuck17 from '../assets/books/homeworkYuck/HomeworkYuck-17.png'
import HomeworkYuck18 from '../assets/books/homeworkYuck/HomeworkYuck-18.png'
import HomeworkYuck19 from '../assets/books/homeworkYuck/HomeworkYuck-19.png'
import HomeworkYuck20 from '../assets/books/homeworkYuck/HomeworkYuck-20.png'
import HomeworkYuck21 from '../assets/books/homeworkYuck/HomeworkYuck-21.png'
import HomeworkYuck22 from '../assets/books/homeworkYuck/HomeworkYuck-22.png'
import HomeworkYuck23 from '../assets/books/homeworkYuck/HomeworkYuck-23.png'
import HomeworkYuck24 from '../assets/books/homeworkYuck/HomeworkYuck-24.png'
import HomeworkYuck25 from '../assets/books/homeworkYuck/HomeworkYuck-25.png'

import HammyTheHamster01 from '../assets/books/hammyTheHamster/HammyTheHamster-01.png'
import HammyTheHamster02 from '../assets/books/hammyTheHamster/HammyTheHamster-02.png'
import HammyTheHamster03 from '../assets/books/hammyTheHamster/HammyTheHamster-03.png'
import HammyTheHamster04 from '../assets/books/hammyTheHamster/HammyTheHamster-04.png'
import HammyTheHamster05 from '../assets/books/hammyTheHamster/HammyTheHamster-05.png'
import HammyTheHamster06 from '../assets/books/hammyTheHamster/HammyTheHamster-06.png'
import HammyTheHamster07 from '../assets/books/hammyTheHamster/HammyTheHamster-07.png'
import HammyTheHamster08 from '../assets/books/hammyTheHamster/HammyTheHamster-08.png'
import HammyTheHamster09 from '../assets/books/hammyTheHamster/HammyTheHamster-09.png'
import HammyTheHamster10 from '../assets/books/hammyTheHamster/HammyTheHamster-10.png'
import HammyTheHamster11 from '../assets/books/hammyTheHamster/HammyTheHamster-11.png'
import HammyTheHamster12 from '../assets/books/hammyTheHamster/HammyTheHamster-12.png'
import HammyTheHamster13 from '../assets/books/hammyTheHamster/HammyTheHamster-13.png'
import HammyTheHamster14 from '../assets/books/hammyTheHamster/HammyTheHamster-14.png'
import HammyTheHamster15 from '../assets/books/hammyTheHamster/HammyTheHamster-15.png'
import HammyTheHamster16 from '../assets/books/hammyTheHamster/HammyTheHamster-16.png'

import Button from '@material-ui/core/Button';
import { ArrowBack, ArrowForward } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  video: {
    width: '100%',
    marginTop: '10px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    // [theme.breakpoints.down('xs')]: {
    //   flexDirection: 'column',
    // },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
  button: {
    padding: '10px',
  },
}));

const VideoPlayer = () => {
  const [homeworkYuckBook, setHomeworkYuckBook] = React.useState([HomeworkYuck01, HomeworkYuck02, HomeworkYuck03, HomeworkYuck04, HomeworkYuck05, HomeworkYuck06, HomeworkYuck07, HomeworkYuck08, HomeworkYuck09, HomeworkYuck10, HomeworkYuck11, HomeworkYuck12, HomeworkYuck13, HomeworkYuck14, HomeworkYuck15, HomeworkYuck16, HomeworkYuck17, HomeworkYuck18, HomeworkYuck19, HomeworkYuck20, HomeworkYuck21, HomeworkYuck22, HomeworkYuck23, HomeworkYuck24, HomeworkYuck25]);
  const [hammyTheHamster, setHammyTheHamster] = React.useState([HammyTheHamster01, HammyTheHamster02, HammyTheHamster03, HammyTheHamster04, HammyTheHamster05, HammyTheHamster06, HammyTheHamster07, HammyTheHamster08, HammyTheHamster09, HammyTheHamster10, HammyTheHamster11, HammyTheHamster12, HammyTheHamster13, HammyTheHamster14, HammyTheHamster15, HammyTheHamster16]);
  const [bookshelf, setBookshelf] = React.useState([homeworkYuckBook, hammyTheHamster]);
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call, pageNumber, book, setPageNumber } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
          <Grid item xs={12} md={4}>
            
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
            {callAccepted && !callEnded && (
              <video playsInline ref={userVideo} autoPlay className={classes.video} /> 
            )}
          </Grid>
        
      )}
      {callAccepted && !callEnded && (
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>
              <img style={{width: '100%'}} src={bookshelf[book][pageNumber]} />

              <div>
                <Button onClick={() => setPageNumber(pageNumber - 1)} className={classes.button} variant="contained" startIcon={<ArrowBack fontSize="large" />} color="primary">
                  Back
                </Button>

                <Button onClick={() => setPageNumber(pageNumber + 1)} style={{position: "relative", float: "right"}} className={classes.button} variant="contained" endIcon={<ArrowForward fontSize="large" />} color="primary">
                  Next
                </Button>
              </div>
              
            </Paper>
            
            
          </Grid>
      )}
    </Grid>
  );
};

export default VideoPlayer;
