document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

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


  $("#camera").on('click', takephoto);

  function takephoto() {
    navigator.camera.getPicture(onSuccess, onFail, {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI
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