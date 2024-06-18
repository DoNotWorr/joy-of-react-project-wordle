import React, {useState} from 'react';

const useGuessState = (initialState) => {
    const [guess, setState] = useState(initialState)
    const setGuess = (input) => {
        const guess = input.toUpperCase()
        setState(guess)
    }
    const restoreGuess = () => setState(initialState)
    return [guess, setGuess, restoreGuess]
}
function GuessInput() {
    const initialState = ''
    const [guess, setGuess, restoreGuess] = useGuessState(initialState)

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
