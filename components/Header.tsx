import { motion } from 'framer-motion';

export default function Header() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  return (
    <div className="flex items-center justify-center lg:justify-start min-h-[500px] lg:border-2 lg:mx-10 rounded-lg my-6 mb-24 lg:py-16 font-graphikSemibold translate-y-56">
    <header className="lg:px-12  mx-2 text-center lg:text-left">
      <motion.h1 className="lg:text-6xl text-3xl font-semibold lg:text-left max-w-2xl mb-4" variants={variants} initial="hidden" animate="show">
        Hire top tech, design, marketing talent.
      </motion.h1>
      <motion.h2 className="lg:text-5xl text-3xl font-semibold" variants={variants} initial="hidden" animate="show">
        Innovate, fast.
      </motion.h2>
      <motion.button className="border-black py-2 px-6 border-2 rounded-3xl bg-black text-white transition-all duration-300 hover:bg-white hover:text-black mt-8" variants={variants} initial="hidden" animate="show">
        Hire talent
      </motion.button>

      <div className="flex items-center justify-center my-12 sm:hidden ">
        <div className="w-[360px] h-[360px] border-2 rounded-lg border-black "></div>
      </div>
    </header>
  </div>
  )
}
