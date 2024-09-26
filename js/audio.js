$(document).ready(function () {
  let audio = $("#audioTrack")[0];

  $playBtn = $("#audio-play");
  $pauseBtn = $("#audio-pause");
  $audioControl = $('[data-type="audio-control"]');

  initAudioPlayer();
  //   setTimeout(initAudioPlayer, 800);

  function initAudioPlayer() {
    $playBtn.parent().show();
    audio.loop = true;
    // audio.play();

    $audioControl.click(function () {
      if (audio.paused) {
        audio.play();
        $playBtn.parent().hide();
        $pauseBtn.parent().show();
      } else {
        audio.pause();
        $playBtn.parent().show();
        $pauseBtn.parent().hide();
      }
    });
  }
});
