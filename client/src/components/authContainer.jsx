import InputBar from "./inputBar";
import { CircleUser } from "lucide-react";
export default function AuthContainer({
  heading,
  defineText,
  lable,
  highlightText,
  buttonName,
  anchorTagName
}) {
  return (
    <div className="px-7 z-30 md:px-10 py-10 absolute bg-white/10 md:w-full backdrop-blur-sm rounded-xl border border-amber-300/20 shadow-2xl shadow-black/70 md:max-w-lg ">
      <div>
        <div className="text-3xl text-white text-center mb-1 w-full">
          <div className="flex w-full justify-center ">
            {" "}
            <h1>{heading}</h1>
            <div className="ml-2">
              <CircleUser size={35} />
            </div>
          </div>{" "}
        </div>
        <p className="text-md text-neutral-400 text-center">
          {defineText}
          <span className="text-amber-300">{highlightText}</span>
        </p>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <div className="w-full">
          <h1 className="text-md mb-2 ml-2 text-neutral-400">Full Name</h1>
          <InputBar type={"text"} placeholder={"Enter your full name"} />
        </div>
        <div className="w-full">
          <h1 className="text-md mb-2 ml-2 text-neutral-400">Email</h1>
          <InputBar type={"email"} placeholder={"Enter your email"} />
        </div>
        <div className="w-full">
          <h1 className="text-md mb-2 ml-2 text-neutral-400">Password</h1>
          <InputBar type={"password"} placeholder={"Create your password"} />
        </div>

        <div className="flex flex-col items-center gap-2 py-10 pt-5">
          <button className="bg-amber-400 hover:bg-amber-400 hover:transition-transform duration-500 hover:scale-[1.02] text-md py-2.5 rounded-lg w-full text-neutral-700">
            {buttonName}
          </button>
          <div className="text-sm text-neutral-300 flex gap-1">
            <p>already have an account?</p>
            <a
              href=""
              className="text-amber-400 cursor-pointer hover:underline "
            >
              {" "}
              {anchorTagName}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
