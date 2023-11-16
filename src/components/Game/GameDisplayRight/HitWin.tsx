interface Props {
  hit: string;
  win: string;
}

function HitWin({ hit, win }: Props) {
  return (
    <div className="grid grid-cols-2 w-full">
      <h4 className="text-[#FFFFFF] font-extrabold text-center">{hit}</h4>
      <h4 className="text-[#FFFFFF] font-extrabold text-center">{win}</h4>
    </div>
  );
}

export default HitWin;
