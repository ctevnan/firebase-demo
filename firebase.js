$(function(){

var myDataRef = new Firebase('https://ethlyvi0dja.firebaseio-demo.com/');
      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          myDataRef.push({name: name, text: text});
          $('#messageInput').val('');
        }
      });
       myDataRef.on('child_added', function(snapshot) {
  //We'll fill this in later.
});
    </script>

 