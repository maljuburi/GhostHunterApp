document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {


  // Background Audio
  // ============
  // var audio = new Audio("../audio/halloween.mp3");
  // audio.loop = true;
  // audio.play();
  

  // Flash Torch
  // ============
  $(".flash #on").on('click', function () {
    $("#on").hide();
    $("#off").show();
    window.plugins.flashlight.switchOff();
  });
  $(".flash #off").on('click', function () {
    $("#on").show();
    $("#off").hide();
    window.plugins.flashlight.switchOn();
  });



  // Camera Plugin
  // ============
  $("#camera").on('click', takephoto);

  function takephoto() {
    navigator.camera.getPicture(onSuccess, onFail, {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      encodingType: Camera.EncodingType.JPEG,
      correctOrientation: true
    });

    function onSuccess(imageURI) {
      var image = document.getElementById('myImage');
      image.src = imageURI;

      document.getElementById("imgContainer").style.display = "block";
    }

    function onFail(message) {
      
      alert('Failed because: ' + message);
    }
  }





// ===========================




}

function redirect(page) {
  window.location.href = page;
}