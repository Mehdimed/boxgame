function RewardList ({ position, cards }) {
    // order cards by value , make a new array with the 12 highest values if position == "right" or the 12 lowest values if position == "left"
    if (position === "right") {
        cards = cards.sort((a, b) => b.value - a.value).slice(0, 12).sort((a, b) => a.value - b.value);
    } else if (position === "left") {
        cards = cards.sort((a, b) => a.value - b.value).slice(0, 12);
    }

    return (
            <div className={position}>
                {cards.map((card) => (
                    <div key={card.id} className={card.visible ? "reward eliminate" : "reward"}>
                        {card.value}
                    </div>
                ))}
            </div>
    );
}

export default RewardList;