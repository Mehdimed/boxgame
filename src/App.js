import { useState } from "react";
import Header from "./components/Header";
import GridGame from "./components/GridGame";
import RewardList from "./components/RewardList";
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

  const newGame = () => {
    setCards(shuffle());
  }

  return (
    <div className="app">
      <Header newgame={newGame}/>
      <div className="row">
          <RewardList position="left" cards={[...cards]}/>
          <GridGame cards={cards} handleClick={handleClick}/>
          <RewardList position="right" cards={[...cards]}/>
      </div>
    </div>
  );
}

export default App;
