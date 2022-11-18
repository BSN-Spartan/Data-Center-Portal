import Link from "next/link";
import React from "react";

interface PropsTypes {
  showBorder: boolean;
  title: string;
  description: undefined | string;
  buttons: undefined | { name: string; href: string }[];
}

const ComQuickStartCard = (props: React.PropsWithChildren<PropsTypes>) => {
  return (
    <div className="text-base px-8 pt-8">
      <p className="text-black font-bold">{props.title}</p>
      <p className="mt-3">{props.description}</p>
      <div className="mt-3">
        {props.buttons?.map((item) =>
          ["Join Spartan", "Get NTT", "Contact Us"].includes(item.name) ? (
            <Link key={item.name} href={item.href}>
              <span className="pr-4 text-theme underline underline-offset-4 leading-8 cursor-pointer">
                {item.name}
              </span>
            </Link>
          ) : (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="pr-4 text-theme underline underline-offset-4 leading-8"
            >
              {item.name}
            </a>
          )
        )}
      </div>
      <div>{props.children}</div>
      {props.showBorder ? (
        <div className="border border-gray-300 mt-8"></div>
      ) : null}
    </div>
  );
};

export default ComQuickStartCard;
