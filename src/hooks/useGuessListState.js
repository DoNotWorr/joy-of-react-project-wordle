import {useState} from "react";

export const useGuessListState = () => {
    const initialState = []
    const [guesses, setGuesses] = useState(initialState);
    const addGuess = (guess) => {
        setGuesses([...guesses, guess]);
        // todo prevent adding duplicate guesses
    }
    return [guesses, addGuess];
}
