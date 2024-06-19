const head = <div className="head"></div>;
const body = <div className="body"></div>;
const leftHand = <div className="left-hand"></div>;
const rightHand = <div className="right-hand"></div>;
const leftLeg = <div className="left-leg"></div>;
const rightLeg = <div className="right-leg"></div>;

const man = [head, body, leftHand, rightHand, leftLeg, rightLeg];

type Incorrects = {
  incorrects: number;
};

const Hangman = ({ incorrects }: Incorrects) => {
  return (
    <div className="canvas">
      <div className="drawing">
        <div className="upper-stand">
          <div className="rope"></div>
        </div>
        <div className="stick"></div>
        <div className="bottom-stand"></div>
        <div className="man">{man.slice(0, incorrects)}</div>
      </div>
    </div>
  );
};

export default Hangman;
