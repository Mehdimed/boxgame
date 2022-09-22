function Card ({card, onClick}) {
    return (
        <div className="card" onClick={onClick}>
            <div className={card.visible && "selected"}>
                <div className="card-face">{card.visible && card.value}</div>
                <div className="card-back">{!card.visible && card.index}</div>
            </div>

        </div>
    );
}

export default Card;