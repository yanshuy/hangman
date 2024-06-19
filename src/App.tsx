import { useState, useEffect, useCallback } from "react";
import wordList from "./wordList.json";
import Hangman from "./components/Hangman.tsx";
import HangmanWord from "./components/HangmanWord.tsx";
import Keyboard from "./components/Keyboard.tsx";

function getWord(): string {
  const randomIndex = Math.ceil(Math.random() * wordList.length);
  return wordList[randomIndex];
}

function App() {
  const [word, setWord] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !word.includes(letter)
  );

  const correctGuesses = guessedLetters.filter((letter) =>
    word.includes(letter)
  );

  const isLoser = incorrectGuesses.length >= 6;
  const isWinner = correctGuesses.length === new Set(word).size;

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((prev) => [...prev, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!e.key.match(/^[a-z]$/)) return;
      e.preventDefault();

      addGuessedLetter(e.key.toLowerCase());
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key != "Enter") return;
      e.preventDefault();
      setGuessedLetters([]);
      setWord(getWord);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [guessedLetters]);

  return (
    <>
      <p className="assert">
        {isWinner && "WOW Correct Guess! you saved him "}
        {isLoser && "baby gronk just died!"}

        {!isLoser && !isWinner && "Guess the word to save baby gronk"}
      </p>
      <Hangman incorrects={incorrectGuesses.length} />
      <HangmanWord
        wordToGuess={word}
        guessedLetters={guessedLetters}
        isLoser={isLoser}
        isWinner={isWinner}
      />
      <Keyboard
        correctGuesses={correctGuesses}
        incorrectGuesses={incorrectGuesses}
        onKeyClick={addGuessedLetter}
      />
    </>
  );
}

export default App;
