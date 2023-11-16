function DisplayBallDrawn() {
  return (
    <div className="flex flex-col items-center w-2/3 mx-auto">
      <p className="text-center goodtime font-light text-[5vw] capitalize">
        <span className="text-[#EB0908]">20</span> balls drawn from{" "}
        <span className="text-[#EB0908]">80</span>
      </p>
    </div>
  );
}

export default DisplayBallDrawn;
