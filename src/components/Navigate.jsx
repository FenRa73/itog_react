import React, { useState } from "react";

function Navigate() {
    const [filmName, setFilmName] = useState()
    return (
        <header className="navbar">
            <li className="item"><a href="/">Главная</a></li>
            <li className="item"><a href="/">Контакты</a></li>
            <input
                className="search"
                type="text"
                maxLength={40}
                placeholder="Поиск фильма"
                value={filmName}
                onChange={event => setFilmName(event.target.value)}>
            </input>
            <div className="item">{filmName}</div>
        </header>
    );
}

export default Navigate;