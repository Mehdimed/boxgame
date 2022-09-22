function Header ({newgame}) {
    return (
            <div className="header">
                <div>titre du jeu</div>
                <button onClick={() => newgame()} >Nouvelle partie</button>
            </div>
    );
}

export default Header;