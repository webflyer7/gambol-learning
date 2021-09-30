setScreen("mainscreen");
onEvent("buttonPlay", "click", function( ) {
  setScreen("Playscreen");
  var x = 0;
  onEvent("buttonCircle", "click", function( ) {
    setProperty("buttonCircle", "background-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 0.5));
    setPosition("buttonCircle", randomNumber(30, 284), randomNumber(80, 400), 40, 40);
    x = x + 1;
    setNumber("labelBlank", x);
  });
  timedLoop(1000, function() {
    x = x - 1;
    setNumber("labelBlank", x);
  });
});
onEvent("buttonStudy", "click", function( ) {
  setScreen("studyscreen");
  onEvent("startButton", "click", function( ) {
    var r = 0;
    var time = getText("studyInput") * 60;
    timedLoop(1000, function() {
      if (r < time) {
        r = r + 1;
        setProperty("bigLabel", "text-color", rgb(randomNumber(0, 255),randomNumber(0, 255),randomNumber(0, 255),0.5));
        setNumber("bigLabel", r);
      } else {
        stopTimedLoop();
        playSound("assets/category_digital/coin_2.mp3", false);
      }
    });
  });
  onEvent("resetButtton", "click", function( ) {
    setNumber("bigLabel", 0);
    r = 0;
    stopTimedLoop();
    playSound("assets/category_accent/puzzle_game_accent_small_d_02.mp3", false);
  });
});
