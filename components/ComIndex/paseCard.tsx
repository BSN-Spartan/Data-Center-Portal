import { openNewWin } from "@/utils";
import { useState, useEffect } from "react";
import SideWin from "@/components/ComSideWin";
interface PropsPaseCard {
  type: string;
  stepNo: string;
  stepImg: string;
  title: string;
  description: string | (() => JSX.Element);
  image: string;
  buttonName: string;
  href: string;
}

export default function ComIndexPaseCard(props: PropsPaseCard) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(() => {
      return open;
    });
  }, [open]);
  return (
    <div>
      <div
        className={
          "mb-10 py-2 text-[1rem] md:mb-10 md:py-4 text-white text-center md:text-[1.4rem] " +
          props.stepImg
        }
      >
        {props.stepNo}
      </div>
      <div className="bg-white sm:h-[30rem] lg:h-[45rem] md:h-[40rem] shadow-2xl px-4 py-4 md:px-4 md:py-8">
        <div className={"h-20 m-auto md:h-24 " + props.image}></div>
        <div className="my-6 text-center">
          <p className="font-bold text-[1rem] md:text-[1.2rem] md:h-[2.4rem]">
            {props.title}
          </p>
        </div>
        <div className="pb-6 md:h-[18rem] lg:h-[22rem] mt-2 lg:mt-5 text-[1rem] md:text-[1.2rem] text-[#767676]">
          {typeof props.description !== "string" ? (
            props.description()
          ) : (
            <p className="leading-8 md:px-4">{props.description}</p>
          )}
        </div>
        <div className="border-2 border-gray-200 mt-8"></div>
        <div className="mt-8 flex items-center justify-between">
          {props.type == "clickHandel" ? (
            <div
              className="w-full"
              onClick={() => {
                if (props.href == "metaMask") {
                  setOpen(!open);
                }
                openNewWin(props.href);
              }}
            >
              <div className="w-full text-[1rem] md:text-[1rem] text-center py-2 px-2 md:px-4 md:py-3 inline-flex items-center justify-center border border-transparent font-medium rounded-full shadow-sm text-white bg-theme hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme cursor-pointer">
                {props.buttonName}
              </div>
            </div>
          ) : (
            <a
              className="w-full"
              href={props.href}
              target={props.type == "openWin" ? "_blank" : ""}
            >
              <div className="w-full text-[1rem] md:text-[1rem] text-center py-2 px-2 md:px-4 md:py-3 inline-flex items-center justify-center border border-transparent font-medium rounded-full shadow-sm text-white bg-theme hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme cursor-pointer">
                {props.buttonName}
              </div>
            </a>
          )}
        </div>
      </div>
      <SideWin open={open} setOpen={setOpen}></SideWin>
    </div>
  );
}
