import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { currentRoute } from "../../services/general";
import { useEffect } from "react";

function UpcomingEvents() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!(location.pathname == currentRoute.value))
      navigate(currentRoute.value);
  }, [currentRoute.value]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className="flex flex-col h-screen w-screen justify-center items-center"
    >
      <h2 className="uppercase text-[6vw] truncate bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#4d4a4a] bg-clip-text text-transparent font-extrabold">
        More Events Shortly...
      </h2>
      <h3 className="uppercase font-semibold text-[3vw] bg-gradient-to-b from-[#ffffff] via-[#a4a4a4] to-[#4d4a4a] bg-clip-text text-transparent">
        events happen daily from 7:00 until 22:00
      </h3>
    </motion.div>
  );
}

export default UpcomingEvents;
