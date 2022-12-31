document.addEventListener("keydown", function (e) {
  if (e.keyCode == 65) {
    document.getElementById("sound_1").play();
  } else if (e.keyCode == 83) {
    document.getElementById("sound_2").play();
  } else if (e.keyCode == 68) {
    document.getElementById("sound_3").play();
  } else if (e.keyCode == 70) {
    document.getElementById("sound_4").play();
  }
});
