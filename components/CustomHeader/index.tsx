import React, { Fragment, useEffect, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  ShareIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { useHook } from "../useHook";
import { openNewWin } from "@/utils";
import { HeaderContext } from "./context";
import CustomFooter from "../CustomFooter";
import IMG_LOGO from "@/public/web-images/LOGO.png";
export const GetGas = "/main/top-up-gas";
export const whitePaper = "/static/BSN Spartan Network White Paper.pdf";
export const UserManual = "/static/user-manual/index.html";
// export const UserManual = "/static/User Manual.pdf";
export const TermsOfService = "/static/Terms Of Service.pdf";

const catalogue = [
  {
    name: "Home",
    href: "#Home",
    description: "",
    Icon: HomeIcon,
  },
  {
    name: "NC Chains",
    href: "#NonCryptocurrencyPublicChains",
    description: "",
    Icon: ShareIcon,
  },
  {
    name: "Documentation",
    href: "#Documentation",
    description: "",
    Icon: ClipboardDocumentIcon,
  },
  {
    name: "Contract Marketplace",
    href: "https://www.spartan.bsn.foundation/main/contract",
    description: "",
    Icon: ClipboardDocumentIcon,
  },
];
const catalogue1 = [
  {
    name: "Return to Foundation Website",
    href: "https://www.spartan.bsn.foundation",
    description: "",
  },
];

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}
export const CustomHeaderContext = React.createContext(HeaderContext);
export default function CustomHeader({
  children,
  sysInfo,
}: {
  children: any;
  sysInfo: any;
}) {
  const MainRef = useRef(null);
  const { router, routerBack } = useHook();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = useState(false);
  const [headerName, setHeaderName] = useState("");
  const [activeName, setActiveName] = useState("Home");
  const [pathname, setPathname] = useState(
    router.pathname !== "/" ? router.pathname : ""
  );
  useEffect(() => {
    const handleRouteChange = () => {
      setPathname(router.pathname !== "/" ? router.pathname : "");
      if (router.pathname) {
        setActiveName("");
        (MainRef.current as any).scrollTo(0, 0);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const activeClassName = (pathName: string) =>
    activeName === pathName ? "border-b-2 border-red border-solid " : "";

  return (
    <div className="bg-white h-full flex flex-col">
      <header>
        <Popover className="relative bg-white">
          <div className="mx-auto flex items-center justify-between py-6 lg:justify-start px-4 md:px-10 bg-theme text-white md:h-28 text-xl">
            <div
              className={
                "w-full lg:hidden flex flex-1 justify-start items-center" +
                (pathname && pathname !== "/main/ntt-account-energy-recharge"
                  ? ""
                  : " hidden")
              }
            >
              <div
                onClick={() => {
                  routerBack();
                }}
              >
                <ArrowLeftIcon className="w-8 h-8" />
              </div>
              <div className="flex-1 text-center pr-6">{headerName}</div>
            </div>

            <div
              className={
                "lg:flex flex-1 justify-start" +
                (pathname && pathname !== "/main/ntt-account-energy-recharge"
                  ? " hidden"
                  : "")
              }
            >
              <div className="w-40 h-8 md:w-48 md:h-10 relative">
                <Image
                  className=""
                  src={
                    sysInfo.logo && sysInfo.logo !== null
                      ? sysInfo.logo
                      : IMG_LOGO
                  }
                  alt=""
                  layout="fill"
                />
              </div>
            </div>

            <div
              className={
                "-my-2 -mr-2 lg:hidden" +
                (pathname && pathname !== "/main/ntt-account-energy-recharge"
                  ? " hidden"
                  : "")
              }
            >
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            <Popover.Group
              as="div"
              className="hidden space-x-8 lg:flex items-center"
            >
              {catalogue.map((item) => {
                const className =
                  "font-medium hover:scale-110 cursor-pointer pb-2 whitespace-nowrap " +
                  activeClassName(item.href);

                return item.name !== "White Paper" &&
                  item.name !== "GitHub" &&
                  item.name !== "Contract Marketplace" ? (
                  <Link key={item.name} href={"/" + item.href}>
                    <span
                      className={className}
                      onClick={() => {
                        setActiveName(item.href);
                      }}
                    >
                      {item.name}
                    </span>
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    target="_blank"
                    className={className}
                    href={item.href}
                  >
                    {item.name}
                  </a>
                );
              })}
            </Popover.Group>
            <div className="hidden space-x-8 lg:flex flex-1 justify-end ml-2">
              {catalogue1.map((item) =>
                item.href ? (
                  <a
                    key={item.name}
                    onClick={() => {
                      openNewWin(item.href);
                    }}
                  >
                    <p className="whitespace-nowrap pb-2 font-medium hover:scale-105 cursor-pointer">
                      {item.name}
                    </p>
                  </a>
                ) : (
                  <p
                    key={item.name}
                    onClick={() => {
                      setOpen(true);
                    }}
                    className="whitespace-nowrap pb-2 font-medium hover:scale-105 cursor-pointer"
                  >
                    {item.name}
                  </p>
                )
              )}
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition lg:hidden h-screen w-screen bg-[rgba(0,0,0,0.3)]"
            >
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="">
                  <div className="flex items-center justify-between bg-theme px-5 pt-5 pb-6">
                    <div className="w-48 h-10 relative">
                      <Image
                        className=""
                        src={
                          sysInfo.logo && sysInfo.logo !== null
                            ? sysInfo.logo
                            : IMG_LOGO
                        }
                        alt=""
                        layout="fill"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6 pb-6">
                    <nav className="grid grid-cols-1 gap-7">
                      {catalogue.map((item) => {
                        const className =
                          "-m-3 flex items-center rounded-lg p-3 ";
                        const children = () => (
                          <>
                            <item.Icon
                              className="ml-5 h-6 w-6 flex-shrink-0 text-indigo-600"
                              aria-hidden="true"
                            />
                            <span className="ml-4 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </>
                        );
                        return item.name !== "White Paper" &&
                          item.name !== "GitHub" &&
                          item.name !== "Contract Marketplace" ? (
                          <Link key={item.name + "-mp"} href={"/" + item.href}>
                            <div>
                              <Popover.Button
                                as="div"
                                key={item.name + "-mp"}
                                className={className}
                              >
                                {children()}
                              </Popover.Button>
                            </div>
                          </Link>
                        ) : (
                          <Popover.Button
                            as="a"
                            key={item.name + "-mp"}
                            href={item.href}
                            target="_blank"
                            className={className}
                          >
                            {children()}
                          </Popover.Button>
                        );
                      })}
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>

      <main
        ref={MainRef}
        className="flex-1 overflow-y-auto"
        onScroll={() => {
          if (router.pathname === "/")
            setTimeout(() => {
              // router.push("/?a=0", "/", { shallow: true });
            }, 1000);
        }}
      >
        <CustomHeaderContext.Provider value={{ setHeaderText: setHeaderName }}>
          <>
            {children}
            <CustomFooter sysConfig={sysInfo.copyright} />
          </>
        </CustomHeaderContext.Provider>
      </main>
      <footer className="bg-gray-50" aria-labelledby="footer-heading"></footer>
    </div>
  );
}
