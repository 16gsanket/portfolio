function Page3() {
  return (
    <div className="h-[90dvh] w-full bg-bk_black flex flex-col gap-2 align-middle justify-around items-center ">
      <div className="w-8/12 h-fit py -5  text-center flex flex-col gap-4">
        <h2 className="text-md text-orange_text font-semibold tracking-wider ">
          PORTFOLIO
        </h2>
        <p className="text-2xl text-text_color font-bold tracking-wide ">
          My Masterpiece Collection
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida non
          proident, sunt in culpa qui officia
        </p>
      </div>
      <div className="h-4/6 w-10/12 bg-red-500 flex flex-col gap-1">
        <div className="h-1/6 w-full bg-red-400 text-senter">
            <ul className="">
                <li>ALL</li>
                <li>FRONT END DEVELOPMENT</li>
                <li>BACK END DEVELOPMENT</li>
                <li>UI/UX</li>
            </ul>

        </div>
        <div className="h-5/6 w-full bg-green-400"
        ></div>

      </div>
    </div>
  );
}

export default Page3;
