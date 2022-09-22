const shuffle = () => {
    let possibleRewards = [1,2,3,4,5,6,7,8,10,15,20,25,30,35,40,45,50,55,60,75,100,150,200,300].sort(() => Math.random() - 0.5);
    let cards = [];
    for (let i = 1; i <= 24; i++) {
        cards.push({index: i, value: possibleRewards.shift(), id: Math.random()});
    }
    return cards
}
 
export default shuffle;