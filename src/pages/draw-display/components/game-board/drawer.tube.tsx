import React from 'react'
import { INDEX, SPOT } from '../../../../data/data.source'
import { AnimatePresence, motion } from 'framer-motion'

function DrawerTube() {
  return (
    <div className="w-full ml-2 mx-2 h-full relative flex flex-col gap-3 justify-center items-center bg-transparent from-[#F63308] to-[#EC1100] overflow-hidden">
      <img
        className="scale-[100%] z-20  h-[99%] w-full absolute"
        src="/assets/balls/Asset_1.png"
        alt=""
      />
      <p className="text-[12px] absolute text-white left-[75%] top-[8%]">
        {INDEX.init}/20
      </p>
      <AnimatePresence>
        {SPOT.init != undefined && (
          <motion.div
            initial={{ scale: 0, y: 200 }}
            transition={{ delay: 0.001 }}
            animate={{ scale: 1, x: -1, y: -13 }}
            whileInView={{ scale: 1 }}
            exit={{ scale: 0, y: -200 }}
            className=" absolute [box-shadow:_inset_-8px_-3px_24px_0_rgb(0_0_0_/_1);] flex justify-center items-center mt-6 z-10 left-[8%] right-0 bg-gradient-to-r from-yellow-300 from-10% via-yellow-500 via-40% to-yellow-700 to-90% rounded-full w-[85%] aspect-square"
          >
            <p className="shake text-[12vw] font-bold text-black ">
              {SPOT.init}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <img
        className="scale-[100%] z-3 absolute w-full"
        src="/assets/balls/asset_2.png"
        alt=""
      />
    </div>
  )
}

export default DrawerTube