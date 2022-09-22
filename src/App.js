import { useState } from "react";
import Header from "./components/Header";
import GridGame from "./components/GridGame";
import shuffle from "./utils/shuffle";

function App() {

  const [cards, setCards] = useState(shuffle());

  const handleClick = (card) => {
    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, visible: true };
      }
      return c;
    });
    setCards(newCards);
  }

  return (
    <div className="grid-layout">
      <Header />
      <div className="left"></div>
        <GridGame cards={cards} handleClick={handleClick}/>
      <div className="right"></div>
    </div>
  );
}

export default App;
