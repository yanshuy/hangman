const KEYS = "abcdefghijklmnopqrstuvwxyz".split("");

type KeyboardProps = {
  correctGuesses: string[];
  incorrectGuesses: string[];
  onKeyClick: (key: string) => void;
};

const Keyboard = ({
  correctGuesses,
  incorrectGuesses,
  onKeyClick,
}: KeyboardProps) => {
  return (
    <div className="keyboard">
      {KEYS.map((key, index) => (
        <button
          key={index}
          onClick={() => onKeyClick(key)}
          disabled={incorrectGuesses.includes(key)}
          className={`keys ${correctGuesses.includes(key) ? "active" : ""}`}
        >
          {key.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
