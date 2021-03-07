"use strict";

import PopUp from "./popup.js";
import GameBuilder from "./game.js";

const gameFinishBanner = new PopUp();

const game = new GameBuilder()
  .withGameDuration(15)
  .withCarrotCount(15)
  .withBugCount(15)
  .builer();

game.setGameStopListnenr((reason) => {
  let message;
  switch (reason) {
    case "cancel":
      message = "REPLAY?";
      break;
    case "win":
      message = "YOU WIN";
      break;
    case "lose":
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
