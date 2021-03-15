//1. function to connect to server
// io()

//2. save io() to a variable to get access to socket here.
// now we can send and recieve events from both C & S side

    var socket = io();

    //receive(listen) event from server
    socket.on('countUpdated',(count) => {
        
        console.log('The count has been updated',count);
    });

    //Attach event to BUTTON
    document.querySelector('#increment').addEventListener('click', ()=>{
        console.log('Clicked');
        socket.emit('increment');
    })