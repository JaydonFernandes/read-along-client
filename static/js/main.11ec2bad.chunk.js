(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{158:function(e,t){},160:function(e,t){},178:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(11),o=a.n(i),r=a(8),s=a(32),l=a(231),d=a(102),m=a(210),b=a(180),j=a(235),p=a(230),u=a(224),h=a(223),g=a(232),O=a(213),f=a(101),x=a(93),k=a(64),y=a.n(k),H=a(41),w=a.p+"static/media/beep.7d9014f4.mp3",v=a.p+"static/media/cheer.0864341f.mp3",C=a.p+"static/media/fart.d247c87e.mp3",S=a.p+"static/media/laugh.8be1a53c.mp3",N=a.p+"static/media/scream.e14ebe6d.mp3",Y=a(3),T=Object(c.createContext)(),B=Object(x.io)("https://cpsc581-p2.herokuapp.com/"),I=function(e){var t=e.children,a=Object(c.useState)(!1),n=Object(r.a)(a,2),i=n[0],o=n[1],s=Object(c.useState)(!1),l=Object(r.a)(s,2),d=l[0],m=l[1],b=Object(c.useState)(),j=Object(r.a)(b,2),p=j[0],u=j[1],h=Object(c.useState)(""),g=Object(r.a)(h,2),O=g[0],f=g[1],x=Object(c.useState)({}),k=Object(r.a)(x,2),I=k[0],D=k[1],P=Object(c.useState)(""),A=Object(r.a)(P,2),R=A[0],W=A[1],z=Object(c.useState)(""),E=Object(r.a)(z,2),L=E[0],U=E[1],F=Object(c.useState)(-1),J=Object(r.a)(F,2),V=J[0],M=J[1],G=Object(c.useState)(0),K=Object(r.a)(G,2),q=K[0],Q=K[1],X=Object(c.useState)(0),Z=Object(r.a)(X,2),$=Z[0],_=Z[1],ee=Object(c.useState)(["Homework Yuck!","Hammy the Hamster"]),te=Object(r.a)(ee,2),ae=te[0],ce=te[1],ne=Object(c.useRef)(),ie=Object(c.useRef)(),oe=Object(c.useRef)(),re=Object(H.a)(w),se=Object(r.a)(re,1)[0],le=Object(H.a)(v),de=Object(r.a)(le,1)[0],me=Object(H.a)(C),be=Object(r.a)(me,1)[0],je=Object(H.a)(S),pe=Object(r.a)(je,1)[0],ue=Object(H.a)(N),he=Object(r.a)(ue,1)[0];Object(c.useEffect)((function(){B.on("turnPage",(function(e){console.log("Found Page: ".concat(e)),Q(e)})),B.on("changeBook",(function(e){console.log("New book: ".concat(e)),Q(0),M(e)})),B.on("me",(function(e){return W(e)})),B.on("playSfx",(function(e){console.log("Hearing sound: ".concat(e)),"beep"===e?(console.log("in beep"),se()):"cheer"===e?de():"fart"===e?be():"laugh"===e?pe():"scream"===e&&he()})),B.on("callUser",(function(e){var t=e.from,a=e.name,c=e.signal,n=e.book;console.log("Client Book: ".concat(n)),M(n),D({isReceivingCall:!0,from:t,name:a,signal:c})}))}),[]),Object(c.useEffect)((function(){0!==$&&(console.log("Started!!!"),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){u(e),ne.current.srcObject=e})))}),[$]),Object(c.useEffect)((function(){q>0&&(console.log("Page Turned: "+q),ge(L))}),[q]),Object(c.useEffect)((function(){V>-1&&Oe(V)}),[V]);var ge=function(e){console.log("in turn page ".concat(e)),B.emit("turnPage",{targetCaller:e,pageNumber:q})},Oe=function(){console.log("changing book to: ".concat(V," with user ").concat(L)),B.emit("changeBook",{targetCaller:L,bookId:V})};return Object(Y.jsx)(T.Provider,{value:{call:I,callAccepted:i,myVideo:ne,userVideo:ie,stream:p,name:O,setName:f,callEnded:d,me:R,book:V,pageNumber:q,started:$,setStarted:_,setPageNumber:Q,setBook:M,callUser:function(e){U(e);var t=new y.a({initiator:!0,trickle:!1,stream:p});t.on("signal",(function(t){B.emit("callUser",{userToCall:e,signalData:t,from:R,name:O,book:V})})),t.on("stream",(function(e){ie.current.srcObject=e})),B.on("callAccepted",(function(e){o(!0),t.signal(e)})),oe.current=t},leaveCall:function(){m(!0),oe.current.destroy(),window.location.reload()},answerCall:function(){o(!0);var e=new y.a({initiator:!1,trickle:!1,stream:p});e.on("signal",(function(e){console.log(I.from),U(I.from),B.emit("answerCall",{signal:e,to:I.from})})),e.on("stream",(function(e){ie.current.srcObject=e})),e.signal(I.signal),oe.current=e},turnPage:ge,bookTitles:ae,setBookTitles:ce,playBeep:se,playCheer:de,playFart:be,playLaugh:pe,playScream:he,playSfx:function(e){"beep"===e?(console.log("playing beep"),se()):"cheer"===e?de():"fart"===e?be():"laugh"===e?pe():"scream"===e&&he(),B.emit("playSfx",{targetCaller:L,sfx:e})}},children:t})},D=a.p+"static/media/HomeworkYuck-01.03283a7f.png",P=a.p+"static/media/HomeworkYuck-02.f0dd020a.png",A=a.p+"static/media/HomeworkYuck-03.5893ecb5.png",R=a.p+"static/media/HomeworkYuck-04.f0e26d0c.png",W=a.p+"static/media/HomeworkYuck-05.fffc6142.png",z=a.p+"static/media/HomeworkYuck-06.41fab4dd.png",E=a.p+"static/media/HomeworkYuck-07.5253d44c.png",L=a.p+"static/media/HomeworkYuck-08.bc4e84f2.png",U=a.p+"static/media/HomeworkYuck-09.aa661414.png",F=a.p+"static/media/HomeworkYuck-10.06de20bd.png",J=a.p+"static/media/HomeworkYuck-11.92c4f756.png",V=a.p+"static/media/HomeworkYuck-12.61697216.png",M=a.p+"static/media/HomeworkYuck-13.b067cbfb.png",G=a.p+"static/media/HomeworkYuck-14.ab43fb07.png",K=a.p+"static/media/HomeworkYuck-15.4f3bfec9.png",q=a.p+"static/media/HomeworkYuck-16.808be050.png",Q=a.p+"static/media/HomeworkYuck-17.16bebce2.png",X=a.p+"static/media/HomeworkYuck-18.f93ae2f3.png",Z=a.p+"static/media/HomeworkYuck-19.fb9616a9.png",$=a.p+"static/media/HomeworkYuck-20.94abdd28.png",_=a.p+"static/media/HomeworkYuck-21.ad906566.png",ee=a.p+"static/media/HomeworkYuck-22.3f0b1014.png",te=a.p+"static/media/HomeworkYuck-23.7d056ac3.png",ae=a.p+"static/media/HomeworkYuck-24.b9dbff2d.png",ce=a.p+"static/media/HomeworkYuck-25.c08eaea4.png",ne=a.p+"static/media/HammyTheHamster-01.b0046e30.png",ie=a.p+"static/media/HammyTheHamster-02.738c253c.png",oe=a.p+"static/media/HammyTheHamster-03.e4968da4.png",re=a.p+"static/media/HammyTheHamster-04.02767372.png",se=a.p+"static/media/HammyTheHamster-05.3eddcdf6.png",le=a.p+"static/media/HammyTheHamster-06.92215c09.png",de=a.p+"static/media/HammyTheHamster-07.ee5a7111.png",me=a.p+"static/media/HammyTheHamster-08.1b12032f.png",be=a.p+"static/media/HammyTheHamster-09.5f6430bb.png",je=a.p+"static/media/HammyTheHamster-10.143f0710.png",pe=a.p+"static/media/HammyTheHamster-11.7b040adb.png",ue=a.p+"static/media/HammyTheHamster-12.52e5b3ed.png",he=a.p+"static/media/HammyTheHamster-13.a6bb5b93.png",ge=a.p+"static/media/HammyTheHamster-14.2b7c06a3.png",Oe=a.p+"static/media/HammyTheHamster-15.c9940d91.png",fe=a.p+"static/media/HammyTheHamster-16.130301f6.png",xe=a(215),ke=a(216),ye=Object(m.a)((function(e){return{video:Object(s.a)({width:"100%",marginTop:"10px"},e.breakpoints.down("xs"),{width:"300px"}),gridContainer:{justifyContent:"center"},paper:{padding:"10px",border:"2px solid black",margin:"10px"},button:{padding:"10px"}}})),He=function(){var e=n.a.useState([D,P,A,R,W,z,E,L,U,F,J,V,M,G,K,q,Q,X,Z,$,_,ee,te,ae,ce]),t=Object(r.a)(e,2),a=t[0],i=(t[1],n.a.useState([ne,ie,oe,re,se,le,de,me,be,je,pe,ue,he,ge,Oe,fe])),o=Object(r.a)(i,2),s=o[0],l=(o[1],n.a.useState([a,s])),d=Object(r.a)(l,2),m=d[0],j=(d[1],Object(c.useContext)(T)),p=(j.name,j.callAccepted),u=j.myVideo,h=j.userVideo,g=j.callEnded,x=j.stream,k=(j.call,j.pageNumber),y=j.book,H=j.setPageNumber,w=ye();return Object(Y.jsxs)(O.a,{container:!0,className:w.gridContainer,children:[x&&Object(Y.jsxs)(O.a,{item:!0,xs:12,md:4,children:[Object(Y.jsx)("video",{playsInline:!0,muted:!0,ref:u,autoPlay:!0,className:w.video}),p&&!g&&Object(Y.jsx)("video",{playsInline:!0,ref:h,autoPlay:!0,className:w.video})]}),p&&!g&&Object(Y.jsx)(O.a,{item:!0,xs:12,md:8,children:Object(Y.jsxs)(f.a,{className:w.paper,children:[Object(Y.jsx)("img",{style:{width:"100%"},src:m[y][k]}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)(b.a,{onClick:function(){return H(k-1)},className:w.button,variant:"contained",startIcon:Object(Y.jsx)(xe.a,{fontSize:"large"}),color:"primary",children:"Back"}),Object(Y.jsx)(b.a,{onClick:function(){return H(k+1)},style:{position:"relative",float:"right"},className:w.button,variant:"contained",endIcon:Object(Y.jsx)(ke.a,{fontSize:"large"}),color:"primary",children:"Next"})]})]})})]})},we=a(217),ve=a(233),Ce=a(99),Se=a(219),Ne=a(220),Ye=a(221),Te=a(222),Be=a(225),Ie=a(226),De=a(229),Pe=a(228),Ae=a(227),Re=a(218),We=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column"},gridContainer:Object(s.a)({width:"100%"},e.breakpoints.down("xs"),{flexDirection:"column"}),container:Object(s.a)({width:"600px",margin:"35px 0",padding:0},e.breakpoints.down("xs"),{width:"80%"}),soundeffects:{textAlign:"center"},margin:{marginTop:20},padding:{paddingLeft:20,paddingRight:20,padding:20},paper:{padding:"10px 20px",border:"2px solid black"}}})),ze=function(e){var t=e.children,a=Object(c.useContext)(T),n=a.me,i=a.callAccepted,o=a.name,s=a.setName,l=a.callEnded,m=a.leaveCall,g=a.callUser,x=a.book,k=a.setBook,y=a.playSfx,H=a.playCheer,w=(a.turnPage,a.pageNumber,a.setPageNumber),v=Object(c.useState)(""),C=Object(r.a)(v,2),S=C[0],N=C[1],B=We(),I=Object(c.useState)(!1),P=Object(r.a)(I,2),A=P[0],R=P[1],W=function(){R(!1)};return Object(Y.jsxs)("div",{children:[i&&!l?Object(Y.jsx)(we.a,{className:B.container,children:Object(Y.jsxs)(f.a,{elevation:10,className:B.paper,children:[Object(Y.jsx)(d.a,{gutterBottom:!0,className:B.soundeffects,variant:"h6",children:"Sound Bar"}),Object(Y.jsxs)(Re.a,{fullWidth:!0,className:B.soundeffects,variant:"contained",color:"primary","aria-label":"contained primary button group",children:[Object(Y.jsx)(b.a,{onClick:function(){y("beep")},children:"Beep"}),Object(Y.jsx)(b.a,{onClick:function(){H()},children:"Cheer"}),Object(Y.jsx)(b.a,{children:"Fart"}),Object(Y.jsx)(b.a,{children:"Laugh"}),Object(Y.jsx)(b.a,{children:"Scream"})]})]})}):Object(Y.jsx)("div",{}),Object(Y.jsx)(we.a,{className:B.container,children:Object(Y.jsxs)(f.a,{elevation:10,className:B.paper,children:[Object(Y.jsx)("form",{className:B.root,noValidate:!0,autoComplete:"off",children:Object(Y.jsxs)(O.a,{container:!0,className:B.gridContainer,children:[Object(Y.jsx)(O.a,{item:!0,xs:12,md:12,className:B.padding,children:Object(Y.jsx)(b.a,{onClick:function(){R(!0)},variant:"contained",color:"primary",startIcon:Object(Y.jsx)(Se.a,{fontSize:"large"}),fullWidth:!0,className:B.margin,children:"Bookshelf"})}),Object(Y.jsxs)(O.a,{item:!0,xs:12,md:6,className:B.padding,children:[Object(Y.jsx)(d.a,{gutterBottom:!0,variant:"h6",children:"Account Info"}),Object(Y.jsx)(ve.a,{label:"Name",value:o,onChange:function(e){return s(e.target.value)},fullWidth:!0}),Object(Y.jsx)(Ce.CopyToClipboard,{text:n,className:B.margin,children:Object(Y.jsx)(b.a,{variant:"contained",color:"primary",fullWidth:!0,startIcon:Object(Y.jsx)(Ne.a,{fontSize:"large"}),children:"Copy Your ID"})})]}),Object(Y.jsxs)(O.a,{item:!0,xs:12,md:6,className:B.padding,children:[Object(Y.jsx)(d.a,{gutterBottom:!0,variant:"h6",children:"Make a call"}),Object(Y.jsx)(ve.a,{label:"ID to call",value:S,onChange:function(e){return N(e.target.value)},fullWidth:!0}),x>-1?i&&!l?Object(Y.jsx)(b.a,{variant:"contained",color:"secondary",startIcon:Object(Y.jsx)(Ye.a,{fontSize:"large"}),fullWidth:!0,onClick:m,className:B.margin,children:"Hang Up"}):Object(Y.jsx)(b.a,{variant:"contained",color:"primary",startIcon:Object(Y.jsx)(Te.a,{fontSize:"large"}),fullWidth:!0,onClick:function(){return g(S)},className:B.margin,children:"Call"}):Object(Y.jsx)(b.a,{disabled:!0,variant:"contained",color:"primary",startIcon:Object(Y.jsx)(Te.a,{fontSize:"large"}),fullWidth:!0,className:B.margin,children:"Call"})]})]})}),t]})}),Object(Y.jsx)("div",{children:Object(Y.jsxs)(j.a,{open:A,onClose:W,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(Y.jsx)(h.a,{id:"alert-dialog-title",children:"Bookshelf"}),Object(Y.jsxs)(u.a,{children:[Object(Y.jsxs)(Be.a,{className:B.root,children:[Object(Y.jsxs)(Ie.a,{children:[Object(Y.jsx)(Ae.a,{component:"img",alt:"Contemplative Reptile",height:"440",image:D,title:"Homework Yuck"}),Object(Y.jsxs)(Pe.a,{children:[Object(Y.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Homework Yuck"}),Object(Y.jsx)(d.a,{variant:"body2",color:"textSecondary",component:"p",children:"Jamal made a case at the next open house and it mattered much. Download this free children\u2019s book to read about how he chose to stand his ground and took courage to validate his actions. A little bit of honesty and a little bit of courage had gone a long way in boosting Jamal\u2019s belief in himself. Read more in this free children\u2019s real aloud and be truly inspired."})]})]}),Object(Y.jsx)(De.a,{children:Object(Y.jsx)(b.a,{onClick:function(){k(0),w(0),W()},variant:"contained",size:"large",color:"primary",children:"Select"})})]}),Object(Y.jsxs)(Be.a,{className:B.root,children:[Object(Y.jsxs)(Ie.a,{children:[Object(Y.jsx)(Ae.a,{component:"img",alt:"Hammy the Hamster",height:"440",image:ne,title:"Hammy The Hamster"}),Object(Y.jsxs)(Pe.a,{children:[Object(Y.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Hammy The Hamster"}),Object(Y.jsx)(d.a,{variant:"body2",color:"textSecondary",component:"p",children:"He\u2019s got swag. He wears a tux. He\u2019s a hipster hamster who likes to live free. Join Hammy in his South American home as you read this free story book for kids on your next read aloud day."})]})]}),Object(Y.jsx)(De.a,{children:Object(Y.jsx)(b.a,{onClick:function(){k(1),w(0),W()},variant:"contained",size:"large",color:"primary",children:"Select"})})]})]}),Object(Y.jsx)(p.a,{children:Object(Y.jsx)(b.a,{onClick:W,color:"primary",children:"Close"})})]})})]})},Ee=function(){var e=Object(c.useContext)(T),t=e.answerCall,a=e.call,n=e.callAccepted,i=e.book,o=e.bookTitles;return Object(Y.jsx)(Y.Fragment,{children:a.isReceivingCall&&!n&&Object(Y.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(Y.jsxs)("h3",{children:[a.name," wants to read ",o[i],":"]}),Object(Y.jsx)(b.a,{variant:"contained",color:"primary",onClick:t,children:"Answer"})]})})},Le=Object(m.a)((function(e){return{appBar:Object(s.a)({borderRadius:15,margin:"30px 100px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"600px",border:"2px solid black"},e.breakpoints.down("xs"),{width:"90%"}),pap:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(16),height:e.spacing(16)}},image:{marginLeft:"15px"},wrapper:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}})),Ue=function(){var e=Le(),t=Object(c.useContext)(T),a=t.book,i=(t.setBook,t.pageNumber,t.setPageNumber,t.setStarted),o=t.bookTitles,s=Object(c.useState)(""),m=Object(r.a)(s,2),O=(m[0],m[1],n.a.useState(!0)),f=Object(r.a)(O,2),x=f[0],k=f[1],y=n.a.useState(!1),H=Object(r.a)(y,2),w=(H[0],H[1],function(){i(1),k(!1)});return Object(Y.jsxs)("div",{className:e.wrapper,children:[Object(Y.jsx)(l.a,{className:e.appBar,position:"static",color:"inherit",children:Object(Y.jsx)(d.a,{variant:"h2",align:"center",children:o[a]})}),Object(Y.jsx)(He,{}),Object(Y.jsx)(ze,{children:Object(Y.jsx)(Ee,{})}),Object(Y.jsx)("div",{children:Object(Y.jsxs)(j.a,{open:x,onClose:w,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(Y.jsx)(h.a,{id:"alert-dialog-title",children:"Welcome to Read Along!"}),Object(Y.jsxs)(u.a,{children:[Object(Y.jsx)(g.a,{id:"alert-dialog-description",children:"Read Along lets you connect with others during social distance over a great book for children."}),Object(Y.jsx)(g.a,{id:"alert-dialog-description",children:'Start by selecting a book from the "BOOKSHELF" and then get the ID of the person you would like to call. The ID of a user can by copied from the "COPY YOUR ID" button. Finaly paste the ID of the person you would like to call in the "ID to call" line and hit the "CALL" button.'})]}),Object(Y.jsx)(p.a,{children:Object(Y.jsx)(b.a,{onClick:w,color:"primary",children:"Got it"})})]})})]})};a(178);o.a.render(Object(Y.jsx)(I,{children:Object(Y.jsx)(Ue,{})}),document.getElementById("root"))}},[[179,1,2]]]);
//# sourceMappingURL=main.11ec2bad.chunk.js.map