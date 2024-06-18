import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "./GuessInput";
import {useGuessListState} from "../../hooks/useGuessListState";
import GuessList from "./GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guesses, setGuesses] = useGuessListState()
    return (
        <>
            <GuessList guesses={guesses}/>
            <GuessInput/>
        </>
    );
}

export default Game;
