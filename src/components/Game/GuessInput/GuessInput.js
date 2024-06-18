import React from 'react';
import {useGuessState} from "../../../hooks/useGuessState";

function GuessInput() {
    const [guess, setGuess, restoreGuess] = useGuessState()

    function handleChange(event) {
        event.preventDefault()
        setGuess(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log({guess})
        restoreGuess()
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess</label>
            <input type="text" value={guess} onChange={handleChange} required pattern="[A-Z]{5}"/>
        </form>
    );
}

export default GuessInput;
