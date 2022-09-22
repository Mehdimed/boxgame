import Card from './Card';

function GridGame ({cards, handleClick}) {

    return (
            <div className="grid-game">
                {cards.map((card) => (
                    <Card key={card.id} card={card} onClick={() => handleClick(card)}/>
                ))}
            </div>
    );
}

export default GridGame;