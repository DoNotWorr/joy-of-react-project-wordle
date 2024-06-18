import React from 'react';
import {useGuessListState} from "../../../hooks/useGuessListState";

function GuessList({guesses}) {
    return (
        <ul className="guess-results">
            {guesses.map(guess => <li key={guess} className="guess">{guess}</li>)}
        </ul>
    );
}

export default GuessList;
