import {useState} from "react";

export const useGuessState = () => {
    const initialState = ''
    const [guess, setState] = useState(initialState)
    const setGuess = (input) => {
        const guess = input.toUpperCase()
        setState(guess)
    }
    const restoreGuess = () => setState(initialState)
    return [guess, setGuess, restoreGuess]
}
