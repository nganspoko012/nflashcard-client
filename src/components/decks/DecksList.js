import Deck from "./Deck";

let DUMMY_DECKS = [
  {
    id: 1,
    title: "600 Essential Words For TOEIC",
    scope: "private",
    author: {
      name: "Ngan Vo",
    },
    dueCards: 10,
    totalCards: 20,
    avgStars: 4.3,
  },
  {
    id: 2,
    title: "English Grammar",
    scope: "public",
    author: {
      name: "Athony",
    },
    dueCards: 5,
    totalCards: 20,
    avgStars: 4.3,
  },
  {
    id: 3,
    title: "JLPT N2",
    scope: "public",
    author: {
      name: "Ngan Vo",
    },
    dueCards: 10,
    totalCards: 20,
    avgStars: 4.3,
  },
  {
    id: 4,
    title: "JLPT N2",
    scope: "public",
    author: {
      name: "Ngan Vo",
    },
    dueCards: 10,
    totalCards: 20,
    avgStars: 4.3,
  },
  {
    id: 5,
    title: "JLPT N2",
    scope: "public",
    author: {
      name: "Ngan Vo",
    },
    dueCards: 10,
    totalCards: 20,
    avgStars: 4.3,
  },
  {
    id: 6,
    title: "JLPT N2",
    scope: "public",
    author: {
      name: "Ngan Vo",
    },
    dueCards: 10,
    totalCards: 20,
    avgStars: 4.3,
  },
];

const DecksList = (props) => {
  return (
    <ul className="flex flex-wrap w-full gap-4">
      {DUMMY_DECKS.map((deck) => (
        <li className="w-full md:w-1/5" key={deck.id}>
          <Deck {...deck} type="community" />
        </li>
      ))}
    </ul>
  );
};

export default DecksList;
