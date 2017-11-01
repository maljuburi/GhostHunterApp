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


  // function setOptions(srcType) {
  //   var options = {
  //     // Some common settings are 20, 50, and 100
  //     quality: 50,
  //     destinationType: Camera.DestinationType.FILE_URI,
  //     // In this app, dynamically set the picture source, Camera or photo gallery
  //     sourceType: srcType,
  //     encodingType: Camera.EncodingType.JPEG,
  //     mediaType: Camera.MediaType.PICTURE,
  //     allowEdit: true,
  //     correctOrientation: true //Corrects Android orientation quirks
  //   }
  //   return options;
  // }


  // ===========================




}

function redirect(page) {
  window.location.href = page;
}