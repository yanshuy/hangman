type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  isLoser?: boolean;
};

const HangmanWord = ({
  wordToGuess,
  guessedLetters,
  isLoser,
}: HangmanWordProps) => {
  return (
    <div className="hangman-word">
      {wordToGuess.split("").map((letter, index) => (
        <span
          key={index}
          style={{
            borderBottom: "3px solid #333",
            display: "inline-block",
            margin: "0 5px",
            padding: "0 5px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || isLoser
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && isLoser ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
