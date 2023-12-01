// import Jackpot from "../../components/Jackpot";
import Animation from "../../components/BlowAniumation/animation";
import "../../index.css";
import { useLocation, useNavigate } from "react-router-dom";
import { currentRoute } from "../../services/routeService";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import BlowMachine from "./BlowMachine";

function BlowAnimation() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!(location.pathname == currentRoute.value))
      navigate(currentRoute.value);
  }, [currentRoute.value]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 2 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="background-container"
      >
        <Animation />
      </motion.div>
      {/* <Jackpot /> */}
      <BlowMachine />
    </AnimatePresence>
  );
}

export default BlowAnimation;
