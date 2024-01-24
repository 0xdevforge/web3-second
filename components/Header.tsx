

export default function Header() {
  return (
    <div className="flex items-center justify-center lg:justify-start min-h-[500px] lg:border-2 lg:mx-10 rounded-lg my-6 mb-24 lg:py-16">
      <header className="lg:px-12  mx-2 text-center lg:text-left">
        <h1 className="lg:text-6xl text-3xl font-semibold lg:text-left max-w-2xl mb-4">
          Hire top tech, design, marketing talent.
        </h1>
        <h2 className="lg:text-5xl text-3xl font-semibold">
          Innovate, fast.
        </h2>
        <button className="border-black py-2 px-6 border-2 rounded-3xl bg-black text-white transition-all duration-300 hover:bg-white hover:text-black mt-8">
          Hire talent
        </button>

        <div className="flex items-center justify-center my-12 sm:hidden ">
          <div className="w-[360px] h-[360px] border-2 rounded-lg border-black "></div>
        </div>
      </header>
    </div>
  )
}
