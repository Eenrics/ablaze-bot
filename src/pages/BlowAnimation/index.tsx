// import Jackpot from "../../components/Jackpot";
import Animation from "../../components/BlowAniumation/animation";
import "../../index.css";
import { useLocation, useNavigate } from "react-router-dom";
import { currentRoute } from "../../services/routeService";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
// import BlowMachine from "./BlowMachine";

function BlowAnimation() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!(location.pathname == currentRoute.value))
      navigate(currentRoute.value);
  }, [currentRoute.value]);

  return (
    <div className="w-full h-full overflow-hidden flex justify-center">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 2 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="background-container"
          // className={`bg-[url('/assets/portrait.png')] h-[100vh] w-[100%] bg-no-repeat bg-cover bg-center `}
        >
          <div className="pb-40">
            <Animation />
          </div>
        </motion.div>
        {/* <Jackpot /> */}
        {/* <BlowMachine /> */}
      </AnimatePresence>
    </div>
  );
}

export default BlowAnimation;
