import { CiMail } from "react-icons/ci";

function Page5() {
  return (
    <div className="h-[80dvh] w-full bg-bk_black flex flex-col gap-2 align-middle justify-around items-center pt-10">
      <div className="w-8/12 h-fit  py -5  text-center flex flex-col gap-4">
        <h2 className="text-md text-orange_text font-semibold tracking-wider ">
          CONTACT ME
        </h2>
        <p className="text-2xl text-text_color font-bold tracking-wide ">
          Ways To Contact Me
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida non
          proident, sunt in culpa qui officia
        </p>
      </div>
      <div className="h-3/6 w-full text-xl text-orange_text flex flex-col align-middle justify-center items-center gap-10">
        <div className="flex align-middle justify-center gap-20">
          <div className="contact">
            <CiMail className="text-white" />
            16gsanket@gmail.com
          </div>
          <div className="contact">📞 +91 9769580066</div>
        </div>

        <div className="contact">@snlet</div>

        <div className="flex align-middle justify-center gap-20">
          <div className="contact">
            <svg
              class="h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
            @snlet
          </div>
          <div className="contact">+91 9769580066</div>
        </div>
      </div>
      <div className="end" >
        <h2 className="text-center">
          &copy;Copyright - Snlet & Sanket | All Rights Reserved
        </h2>
      </div>
    </div>
  );
}

export default Page5;
