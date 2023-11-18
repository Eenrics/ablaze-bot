import Jackpot from "../../components/Jackpot";
import Animation from "../../components/BlowAniumation/animation";
import "../../index.css";

function index() {
  return (
    <>
      <div className="background-container">
        <Animation />
      </div>

      <Jackpot />
    </>
  );
}

export default index;
