function appendMe(text) {
  var container = $("#chatLogContainer");
  var newBubble = "<div class='row'> <div class='col-md-13'><div class='chat-bubble chat-bubble-me'>"+text+"</div></div></div>";
  
  $(container).append(newBubble);
}

function appendOp(text) {
  var container = $("#chatLogContainer");
  var newBubble = "<div class='row'> <div class='col-md-13'><div class='chat-bubble chat-bubble-op'>"+text+"</div></div></div>";
  
  $(container).append(newBubble);  
}
