// 1. Load YT API by inserting script tag at the start of the placeholder div.
    
var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//2. Create the youtube player and iframe.

      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: '968593PHu3Q',
          playerVars: { 'autoplay': 0  , 'controls': 0 },
          events: {}
        });
      }



// 3. Bind the control buttons to click events.

  var buttonsDiv = document.getElementById("buttons");
  var playButton = document.getElementById("playButton");
  var stopButton = document.getElementById("stopButton");
  var pauseButton = document.createElement("button");

    pauseButton.className += "pause";
    pauseButton.innerHTML = "PAUSE";

      stopButton.addEventListener("click", function () {
        player.stopVideo();
        pauseButton.parentNode.removeChild(pauseButton);
        buttonsDiv.insertBefore(playButton, stopButton);
      })

      playButton.addEventListener("click", function () {
        player.playVideo();
        playButton.parentNode.removeChild(playButton); 
        buttonsDiv.insertBefore(pauseButton,stopButton); 
      })

     pauseButton.addEventListener("click", function () {
        player.pauseVideo();
        pauseButton.parentNode.removeChild(pauseButton);
        buttonsDiv.insertBefore(playButton, stopButton);
      })
  
  

//Bind chapter events

  var chapter1Button = document.getElementById("chapter1");
  var chapter2Button = document.getElementById("chapter2");

  chapter1Button.addEventListener("click", function () {
      player.seekTo(15);
  })

  chapter2Button.addEventListener("click", function () {
      player.seekTo(30);
  })



//When clicking popup button, pop a module that asks for a comment

var i=0;

var popUpButton = document.getElementById("popUpButton");
var wrapper = document.getElementById("wrapper");

 var    commentInputButton = document.createElement("button");

  popUpButton.addEventListener("click", function () {

        player.pauseVideo();

      comment = document.createElement("div");
      comment.className = "takeover "; 
      comment.className +=  i;
      wrapper.prepend(comment); 


      commentInputButton.className = "takeoverButton ";
      commentInputButton.className += i;
      commentInputButton.innerHTML = "Create Comment";
      comment.prepend(commentInputButton);  

      commentInput = document.createElement("input")
      commentInput.className = "takeoverInput ";
      commentInput.className += i;
      comment.prepend(commentInput);

      popUpButton.disabled = true ;
      
      i++
  })


commentInputButton.addEventListener("click", function () {
  player.playVideo();
  sessionStorage.setItem(commentInput,commentInput.value);
  comment.parentNode.removeChild(comment);
  popUpButton.disabled = false;

  var annotationDiv = document.getElementById("annotations");
  annotationDiv.innerHTML +=("<p>" + commentInput.value + "</p>");

})


////Work Outstanding

//Add commentInput.value to #buttons at a certain time in the video
  
//If clicking the button div, pause of play the video...

//Change play to pause if video is playing...

//Change pause to play if video is stopped/paused...



  