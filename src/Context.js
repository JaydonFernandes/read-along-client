import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

// const socket = io('http://localhost:5000');
const socket = io('https://cpsc581-p2.herokuapp.com/');

const ContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');
  const [callerId, setCallerId] = useState('');
  const [book, setBook] = useState(-1);
  const [pageNumber, setPageNumber] = useState(0);

  const [started, setStarted] = useState(0);

  const [bookTitles, setBookTitles] = useState(["Homework Yuck!", "Hammy the Hamster"]);

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    // navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    //   .then((currentStream) => {
    //     setStream(currentStream);

    //     myVideo.current.srcObject = currentStream;
    //   });

    socket.on('turnPage', (page) => {console.log(`Found Page: ${page}`); setPageNumber(page)});

    socket.on('me', (id) => setMe(id));

    socket.on('callUser', ({ from, name: callerName, signal, book: selectedBook }) => {
      console.log(`Client Book: ${selectedBook}`);
      setBook(selectedBook);
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, []);

  useEffect(() => {
    if (started !== 0){
      console.log("Started!!!")

      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((currentStream) => {
          setStream(currentStream);

          myVideo.current.srcObject = currentStream;
        });
    }
    
  }, [started]);

  useEffect(() => {
    if (pageNumber > 0){
      console.log("Page Turned: "+pageNumber)
      turnPage(callerId);
    }
    
  }, [pageNumber]);

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      console.log(call.from)
      setCallerId(call.from)
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const turnPage = (id) => {
    console.log(`in turn page ${id}`);
    socket.emit('turnPage', { targetCaller: id, pageNumber: pageNumber });
  };

  const callUser = (id) => {
    setCallerId(id);
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name, book });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };

  return (
    <SocketContext.Provider value={{
      call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      me,
      book,
      pageNumber,
      started,
      setStarted,
      setPageNumber,
      setBook,
      callUser,
      leaveCall,
      answerCall,
      turnPage,
      bookTitles, 
      setBookTitles
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
