interface GameStatusTitleProps {
  message?: string;
}

function GameStatusTitle({ message }: GameStatusTitleProps) {
  return (
    <div className="flex flex-col items-center  ">
      {message && message != "" ? (
        <>
          <p className="status-timer">CHECK</p>
          <p className="draw-number">INTERNET CONNECTION</p>
        </>
      ) : (
        <>
          <p className="status-timer">BETS</p>
          <p className="draw-number">CLOSED</p>
        </>
      )}
    </div>
  );
}

export default GameStatusTitle;
