// Reference https://gist.github.com/riceissa/1ead1b9881ffbb48793565ce69d7dbdd

// New Card Status
const NEW_STEPS = [1, 10]; // minutes
const GRADUATE_INTERVAL = 1; // days
export const EASY_INTERVAL = 4; // days
export const STARTING_EASE = 250; // percents

// Review Card Status
const EASY_BONUS = 130; // percents
const INTERVAL_MODIFIER = 100; // percents
const MAXIMUM_INTERVAL = 36500; //d ays

// Lapses Status
const LAPSES_STEPS = [10]; // minutes
const NEW_INTERVAL = 70; // percents
const MINIMUM_INTERVAL = 1; // days

const minutesToDays = (minutes) => minutes / (60 * 24);
export const daysToMiliseconds = (days) => days * 1000 * 60 * 60 * 24;
export const milisecondsToDays = (mili) => mili / 1000 / 60 / 60 / 24;

const newCardInterval = (card, option) => {
  switch (option) {
    case "again": {
      card.steps_index = 0;
      return minutesToDays(NEW_STEPS[card.steps_index]);
    }
    case "good": {
      card.steps_index += 1;
      if (card.steps_index < NEW_STEPS.length)
        return minutesToDays(NEW_STEPS[card.steps_index]);
      else {
        card.status = "learned";
        card.interval = GRADUATE_INTERVAL;
        return card.interval;
      }
    }
    case "easy": {
      card.status = "learned";
      card.interval = EASY_INTERVAL;
      return EASY_INTERVAL;
    }
    default:
      throw new Error("Option is not valid!");
  }
};

const learnedCardInterval = (card, option) => {
  switch (option) {
    case "again": {
      card.status = "relearning";
      card.steps_index = 0;
      card.ease_factor = Math.max(EASY_BONUS, card.ease_factor - 20);
      card.interval = Math.max(
        MINIMUM_INTERVAL,
        (card.interval * NEW_INTERVAL) / 100
      );
      return minutesToDays(LAPSES_STEPS[0]);
    }
    case "hard": {
      card.ease_factor = Math.max(EASY_BONUS, card.ease_factor - 15);
      card.interval = (card.interval * 1.2 * INTERVAL_MODIFIER) / 100;
      return Math.min(MAXIMUM_INTERVAL, card.interval);
    }
    case "good": {
      card.interval =
        card.interval * (card.ease_factor / 100) * (INTERVAL_MODIFIER / 100);
      return Math.min(MAXIMUM_INTERVAL, card.interval);
    }
    case "easy": {
      card.ease_factor += 15;
      card.interval =
        card.interval * (card.ease_factor / 100) * (INTERVAL_MODIFIER / 100);
      return Math.min(MAXIMUM_INTERVAL, card.interval);
    }
    default:
      throw new Error("Option is not valid!");
  }
};

const relearnCardInterval = (card, option) => {
  switch (option) {
    case "again": {
      card.steps_index = 0;
      return minutesToDays(LAPSES_STEPS[0]);
    }
    case "good": {
      card.steps_index += 1;
      if (card.steps_index < LAPSES_STEPS.length)
        return minutesToDays(LAPSES_STEPS[card.steps_index]);
      else {
        card.status = "learned";
        return card.interval;
      }
    }
    default:
      throw new Error("Option is not valid!");
  }
};

export const humanFriendlyTime = (days) => {
  if (!days) return days;
  if (days < 1) {
    return parseFloat((days * 24 * 60).toFixed(2)) + "m";
  } else if (days < 30) {
    return parseFloat(days.toFixed(2)) + "d";
  } else if (days < 365) {
    return parseFloat((days / (365.25 / 12)).toFixed(2)) + "M";
  } else return parseFloat((days / 365.25).toFixed(2)) + "y";
};

export const getNewInterval = (card, option) => {
  let newCard = { ...card };
  let newInterval;
  switch (newCard.status) {
    case "new": {
      newInterval = newCardInterval(newCard, option);
      return { newCard, newInterval };
    }
    case "learned": {
      newInterval = learnedCardInterval(newCard, option);
      return { newCard, newInterval };
    }
    case "relearning": {
      newInterval = relearnCardInterval(newCard, option);
      return { newCard, newInterval };
    }
    default:
      throw new Error("Card status is not valid!");
  }
};
