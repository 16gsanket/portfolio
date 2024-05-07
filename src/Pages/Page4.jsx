const ONGOING_PRESENT_PROJECT = [
  {
    date: "21 April 2024",
    title: "The Wild Oasis",
    information:
      "Cured with care for internal staff use only of the hotel of the oasisi hotel using the supabase ofr backend",
    stack: "React, React Router@4 ",
    link: "",
    github: "https://github.com/16gsanket/the-wild-oasis",
  },
  {
    date: "21 April 2024",
    title: "real Estate Pro",
    information: "For Real Estate",
    stack: "React, React Router@4 ",
    link: "https://property-broker-one.vercel.app/",
    github: "https://github.com/16gsanket/PropertyBroker",
  },
];

function Page4() {
  return (
    <div className="h-fit w-full bg-page2_color flex flex-col gap-2 align-middle justify-between items-center py-20">
      <div className="w-8/12 h-fit  py -5  text-center flex flex-col gap-4">
        <h2 className="text-md text-orange_text font-semibold tracking-wider ">
          LATEST NEWS
        </h2>
        <p className="text-2xl text-text_color font-bold tracking-wide ">
          My Latest Articles and Project
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida non
          proident, sunt in culpa qui officia
        </p>
      </div>
      <div className=""></div>
      <div className="h-fit w-full md:flex">
        {ONGOING_PRESENT_PROJECT.map((project) => (
          <div class="bg-bk_black shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)]  p-4 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
            <img
              src="https://readymadeui.com/cardImg.webp"
              class="w-full rounded-lg"
            />
            <div class="px-4 my-6 text-center">
              <h3 class="text-lg font-semibold">{project.title}</h3>
              <p class="mt-2 text-sm text-gray-400">{project.information}</p>
              <button
                type="button"
                class="px-6 py-2 w-5/12 mt-4 mx-4 rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-orange_text hover:bg-orange_hover active:bg-blue-600"
              >
                Visit
              </button>

              <button
                type="button"
                class="px-6 py-2 w-5/12 mt-4 rounded-lg text-white text-sm tracking-wider font-semibold border outline-none  hover:bg-stone-500 active:bg-blue-600"
              >
                GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page4;
