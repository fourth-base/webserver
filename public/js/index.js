/**
 * Created by matt on 29/10/2016.
 */

const userData = {
  socket: io('/'),
  sessionID: undefined
  username: ''
};

$(function() {
  var socket = io('/');

  socket.on('user.onLogin', function (data) {
    // extract session id
    userData.initiateSession(data.sessionID);
  });
});
