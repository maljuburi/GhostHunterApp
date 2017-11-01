$(document).ready(function () {

  setTimeout(function () {
    $(".splash-page").fadeOut();
    $(".welcome-page").delay(300).fadeIn();
  }, 3000);


  // Navigation Buttons
  // =======================
  $("#compassbtn").on('click', function () {
    $(".welcome-page").fadeOut();
    $(".compass-page").delay(500).fadeIn();
  });
  $("#flashbtn").on('click', function () {
    $(".welcome-page").fadeOut();
    $(".flash-page").delay(500).fadeIn();
  });
  $("#camerabtn").on('click', function () {
    $(".welcome-page").fadeOut();
    $(".camera-page").delay(500).fadeIn();
  });

  // Go Back Buttons
  // ===================

  $("#compassback").on('click', function () {
    $(".compass-page").fadeOut();
    $(".welcome-page").delay(500).fadeIn();
  });
  $("#flashback").on('click', function () {
    $(".flash-page").fadeOut();
    $(".welcome-page").delay(500).fadeIn();
  });
  $("#cameraback").on('click', function () {
    $(".camera-page").fadeOut();
    $(".welcome-page").delay(500).fadeIn();
  });

});

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {


  // Background Audio
  // ============
  var audio = new Audio("../audio/halloween.mp3");
  audio.loop = true;
  audio.play();


  // ===============
  // Compass
  // ==============

  var watchcompass = navigator.compass.watchHeading(onCompassSuccess, onCompassError, options);

  function onCompassSuccess(heading) {
    var hvalue = Math.round(heading.magneticHeading);
    document.getElementById("nav").innerHTML = hvalue;
    document.getElementById("compass").style.transform = "rotate(" + (-hvalue) + "deg)";
    document.getElementById("compass").style.webkitTransform = "rotate(" + (-hvalue) + "deg)";
  };

  function onCompassError(compassError) {
    alert('Compass error: ' + compassError.code);
  };

  var options = {
    frequency: 3000
  };

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
  $("#getphoto").on('click', getphoto);

  function takephoto() {
    navigator.camera.getPicture(ontakeSuccess, ontakeFail, {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      encodingType: Camera.EncodingType.JPEG,
      correctOrientation: true
    });

    function ontakeSuccess(imageURI) {
      var image = document.getElementById('myImage');
      image.src = imageURI;

      document.getElementById("imgContainer").style.display = "block";
    }

    function ontakeFail(message) {

      alert('Failed because: ' + message);
    }
  }


  function getphoto() {
    navigator.camera.getPicture(ongetSuccess, ongetFail, {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY),
      correctOrientation: true
    });

    function ongetSuccess(imageURI) {
      var image = document.getElementById('myImage');
      image.src = imageURI;

      document.getElementById("imgContainer").style.display = "block";
    }

    function ongetFail(message) {

      alert('Failed because: ' + message);
    }
  }


}

