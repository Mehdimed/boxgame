function Card ({card, onClick}) {
    return (
        <div className={card.visible ? "card visible" : "card"} onClick={onClick}>
            {card.visible ? card.value + ' subs' : card.index}
        </div>
    );
}

export default Card;