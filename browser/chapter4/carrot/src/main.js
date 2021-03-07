"use strict";

import PopUp from "./popup.js";
import GameBuilder, { Reason } from "./game.js";
import * as sound from "./sound.js";

const gameFinishBanner = new PopUp();

const game = new GameBuilder()
  .withGameDuration(3)
  .withCarrotCount(3)
  .withBugCount(3)
  .builer();

game.setGameStopListnenr((reason) => {
  let message;
  switch (reason) {
    case Reason.cancal:
      sound.palyAlert();
      message = "REPLAY?";
      break;
    case Reason.win:
      sound.palyWin();
      message = "YOU WIN";
      break;
    case Reason.lose:
      sound.palyBug();
      message = "YOU LOST";
      break;

    default:
      throw new Error("not valid reason");
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
