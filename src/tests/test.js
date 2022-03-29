import {
  STARTING_EASE,
  getNewInterval,
  humanFriendlyTime,
  daysToMiliseconds,
  milisecondsToDays,
} from "../util/newInterval.js";

let card = {
  status: "new",
  steps_index: 0,
  ease_factor: STARTING_EASE,
  interval: null,
};

const response = ["good", "good", "again"];
for (let r of response) {
  console.log(card.status, card.interval);
  const { newCard, newInterval } = getNewInterval(card, r);
  console.log(humanFriendlyTime(newInterval), newCard.status, newCard.interval);
}

const date1 = new Date();
const date2 = new Date(date1.getTime() + daysToMiliseconds(1));
const daydiff = date2 - date1;
console.log(milisecondsToDays(daydiff));
