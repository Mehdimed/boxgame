import Card from './Card';

function GridGame ({cards, handleClick}) {
    console.log(cards);

    return (
            <div className="grid-game">
                {cards.map((card) => (
                    <Card key={card.id} card={card} onClick={() => handleClick(card)}/>
                ))}
            </div>
    );
}

export default GridGame;