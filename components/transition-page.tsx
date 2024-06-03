"use client";

import { transitionVariantsPage } from "@/utils/motion-transitions";
import { AnimatePresence, motion } from "framer-motion";

const TransitionPage = () => {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
          variants={transitionVariantsPage}
          //   initial="initial" //TODO para activar la animación de entrada descomentar esto, por el momento no me gusta
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionPage;
