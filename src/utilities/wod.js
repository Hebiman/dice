const wodDice = function (dice, again, auto) {
  let builder = "";
  let successes = 0;
  let sucDice = 0;

  if (dice) {
    dice = parseInt(dice, 10);
  } else {
    dice = 0;
  }
  if (again) {
    again = parseInt(again, 10);
  } else {
    again = 10;
  }
  if (auto) {
    auto = parseInt(auto, 10);
  } else {
    auto = 0;
  }

  while (dice > 0) {
    let result = Math.floor(Math.random() * 10);
    if (result === 0) {
      result = 10;
    }

    if (result >= 8) {
      successes += 1;
    }

    if (result >= again) {
      dice += 1;
      sucDice += 1;
    }

    if (result === 1) {
      builder += result;
    } else if (result >= again) {
      builder += "**" + result + "**";
    } else if (result >= 8) {
      builder += "*" + result + "*";
    } else {
      builder += result;
    }

    dice -= 1;

    if (dice > 0) {
      builder += ",";
    }
  }
  successes += auto;
  return builder + "\n**SUCCESSES: " + successes + "(" + sucDice + ")**";
};

export default wodDice;
